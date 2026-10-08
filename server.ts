import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// Initialize Gemini client if API key exists
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  aiClient = new GoogleGenAI({ apiKey });
}

// AI Advisor endpoint for Daum Saengsik queries
app.post('/api/ai-consult', async (req, res) => {
  const { question, context } = req.body;

  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: '질문 내용을 입력해주세요.' });
  }

  if (!aiClient) {
    // Fallback response if GEMINI_API_KEY is not configured
    return res.json({
      answer: `다움생식은 동결건조 공법으로 곡물, 채소, 과일, 해조류의 영양소와 효소가 그대로 살아있는 건강 생식입니다.
      
가장 효과적인 기본 섭취법:
1. 미지근하거나 차가운 두유 또는 물 200~250ml에 생식 1포를 넣고 흔들어 드세요. (뜨거운 물 절대 금지!)
2. 침 속 아밀라아제 효소가 잘 섞이도록 입안에서 천천히 씹듯이 마십니다.
3. 섭취 후 15분 뒤 물 1컵을 추가로 마시면 식이섬유 수분 흡수가 좋아져 배변활동과 포만감에 뛰어납니다.`,
      keyTips: [
        '40℃ 이하 차가운/미지근한 음료 사용 필수',
        '타놓고 바로 섭취 (방치 시 젤처럼 굳어짐)',
        '하루 1.5L 이상 충분한 수분 보충'
      ]
    });
  }

  try {
    const promptText = `
당신은 대한민국 대표 생식 전문 영양상담사입니다. 
사용자의 '다움생식(생식)' 관련 질문에 친절하고 전문적인 한국어로 답변해 주세요.

[사용자 상황 정보]
- 주요목적: ${context?.purpose || '건강증진 및 식사대용'}
- 선호음료: ${context?.liquid || '두유/물'}
- 생식 경험: ${context?.experience || '초보자'}

[사용자 질문]
${question}

[답변 작성 가이드라인]
1. 따뜻하고 전문적인 어조 (존댓말)
2. 다움생식의 특성(동결건조 영양, 생소화효소, 식이섬유)을 살린 실천 가이드
3. 핵심 섭취 팁 (뜨거운 물 금지, 씹듯이 마시기, 충분한 수분섭취, 적응기 반포부터 시작 등)
4. 답변 후 마지막에 2~3개의 '핵심 요약 팁'을 따로 명확하게 정리
    `;

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: promptText,
      config: {
        systemInstruction: '당신은 다움생식 및 식사대용 생식 전문 영양사입니다. 과학적이고 안전한 생식 섭취 가이드를 제공합니다.',
        temperature: 0.7,
      }
    });

    const replyText = response.text || '답변을 생성하지 못했습니다.';
    
    // Extract key tips if possible or generate clean structure
    res.json({
      answer: replyText,
      keyTips: [
        '미지근한 물/두유 200~250ml 조합 추천',
        '침과 섞이도록 씹듯이 천천히 마시기',
        '섭취 후 물 1컵 꼭 챙겨 마시기'
      ]
    });
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    res.status(500).json({
      error: 'AI 상담 중 오류가 발생했습니다.',
      details: error.message
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (_req, res) => {
      res.sendFile('index.html', { root: 'dist' });
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

startServer();
