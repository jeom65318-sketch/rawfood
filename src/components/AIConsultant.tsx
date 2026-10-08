import React, { useState } from 'react';
import { FAQ_LIST } from '../data/saengsikData';
import { FAQItem } from '../types';
import { Bot, Send, Sparkles, HelpCircle, Loader2, MessageSquare, CheckCircle2, User } from 'lucide-react';

export const AIConsultant: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState<FAQItem | null>(FAQ_LIST[0]);
  const [aiResponse, setAiResponse] = useState<{ answer: string; keyTips?: string[] } | null>(null);

  const handleAskAI = async (e?: React.FormEvent, customQ?: string) => {
    if (e) e.preventDefault();
    const query = customQ || question;
    if (!query.trim()) return;

    setLoading(true);
    setAiResponse(null);
    setSelectedFAQ(null);

    try {
      const res = await fetch('/api/ai-consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: query,
          context: {
            purpose: '다움생식 효과적 섭취방법 문의',
            liquid: '두유 및 물',
            experience: '초보/입문자'
          }
        })
      });

      if (!res.ok) {
        throw new Error('응답 실패');
      }

      const data = await res.json();
      setAiResponse(data);
    } catch (err) {
      console.error(err);
      setAiResponse({
        answer: `다움생식은 40℃ 이하 미지근한 음료(두유 200ml)에 1포를 넣고 쉐이킹 후 씹듯이 마시는 것이 가장 효과적입니다. 마신 후 15분 뒤 물 1컵을 추가하여 마셔주세요.`,
        keyTips: ['미지근한 음료 사용', '씹듯이 오물거리기', '섭취 후 물 1컵 필수']
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
            <Bot className="w-3.5 h-3.5" />
            <span>AI SAENGSIK HEALTH CONSULTANT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            AI 다움생식 전문 영양 Q&A 상담소
          </h2>
          <p className="text-sm text-stone-600">
            생식 섭취 중 궁금한 점을 질문하시면 AI 영양 상담사가 즉시 전문적인 가이드를 제공해 드립니다.
          </p>
        </div>

        {/* Quick FAQ Question Buttons */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">
            자주 묻는 질문 바로보기 (클릭)
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            {FAQ_LIST.map((faq, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSelectedFAQ(faq);
                  setAiResponse(null);
                }}
                className={`px-3 py-2 rounded-xl border text-left transition-colors ${
                  selectedFAQ?.question === faq.question
                    ? 'border-emerald-600 bg-emerald-700 text-white font-bold'
                    : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                }`}
              >
                {faq.question}
              </button>
            ))}
          </div>
        </div>

        {/* Question Input Form */}
        <form onSubmit={(e) => handleAskAI(e)} className="relative">
          <div className="flex items-center gap-2 bg-stone-50 border border-stone-300 rounded-2xl p-2 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-500/20 shadow-sm">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="예: 명현현상이 심하면 어떻게 하나요? / 당뇨 환자도 두유에 타 먹어도 되나요?"
              className="flex-1 bg-transparent px-3 py-2 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !question.trim()}
              className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 disabled:bg-stone-300 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 shrink-0"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              <span>질문하기</span>
            </button>
          </div>
        </form>

        {/* AI Answer Display Card */}
        <div className="bg-stone-50 rounded-2xl border border-stone-200 p-5 sm:p-6 space-y-4">
          
          {loading && (
            <div className="py-12 text-center space-y-3">
              <Loader2 className="w-8 h-8 text-emerald-700 animate-spin mx-auto" />
              <p className="text-xs font-bold text-stone-600">
                AI 영양상담사가 다움생식 관련 답변을 분석 및 작성 중입니다...
              </p>
            </div>
          )}

          {!loading && selectedFAQ && (
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                <HelpCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-emerald-800 uppercase">자주 묻는 질문</div>
                  <h3 className="font-bold text-stone-900 text-base mt-0.5">
                    {selectedFAQ.question}
                  </h3>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-3 text-sm text-stone-800 leading-relaxed">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 border-b border-stone-100 pb-2">
                  <Bot className="w-4 h-4 text-emerald-700" />
                  <span>전문 영양 답변</span>
                </div>
                <p className="whitespace-pre-line text-xs sm:text-sm">
                  {selectedFAQ.answer}
                </p>
              </div>
            </div>
          )}

          {!loading && aiResponse && (
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                <MessageSquare className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-emerald-800 uppercase">사용자 문의</div>
                  <h3 className="font-bold text-stone-900 text-base mt-0.5">
                    {question}
                  </h3>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-4 text-sm text-stone-800 leading-relaxed">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 border-b border-stone-100 pb-2">
                  <Bot className="w-4 h-4 text-emerald-700" />
                  <span>AI 전문 영양상담 답변</span>
                </div>
                
                <div className="whitespace-pre-line text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {aiResponse.answer}
                </div>

                {aiResponse.keyTips && aiResponse.keyTips.length > 0 && (
                  <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 space-y-1.5 text-xs">
                    <div className="font-bold text-emerald-950 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>핵심 요약 팁</span>
                    </div>
                    <ul className="list-disc list-inside text-emerald-900 space-y-1">
                      {aiResponse.keyTips.map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
