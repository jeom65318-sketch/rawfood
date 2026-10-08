import React from 'react';
import { Stethoscope, AlertCircle, CheckCircle, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

export const AdaptationGuide: React.FC = () => {
  return (
    <section className="py-10 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            BEGINNER ADAPTATION GUIDE
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            처음 섭취 시 속 편한 적응 반응 가이드
          </h2>
          <p className="text-sm text-stone-600">
            생식을 처음 드실 때 나타날 수 있는 장내 환경 변화와 해결법입니다.
          </p>
        </div>

        {/* Symptom vs Natural Adaption Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card 1: Natural Adaptation Symptoms */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 space-y-4 shadow-sm">
            <div className="flex items-center gap-2.5 text-emerald-900 font-bold border-b border-stone-100 pb-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>자연스러운 장내 적응 반응 (명현 현상)</span>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              평소 가공식품이나 익힌 음식 위주로 섭취하다가, 다움생식의 풍부한 생식이 들어오면 장내 유익균이 갑자기 활성화되면서 유해균과 대체되는 과정에서 발생합니다.
            </p>

            <ul className="space-y-2 text-xs text-stone-700">
              <li className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
                <span className="font-bold text-emerald-800 shrink-0">· 가스/방귀:</span>
                <span>식이섬유 발효로 유익균이 대사활동을 하며 발생하는 자연스러운 과정 (3~7일 내 호전)</span>
              </li>
              <li className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
                <span className="font-bold text-emerald-800 shrink-0">· 묽은 변/잦은 배변:</span>
                <span>장 연동 운동이 활발해져 장 속 찌꺼기가 배출되는 현상</span>
              </li>
              <li className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-lg border border-stone-200/60">
                <span className="font-bold text-emerald-800 shrink-0">· 일시적 피로감:</span>
                <span>몸 안의 대사 활동에 에너지가集中되면서 생기는 가벼운 반응</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Immediate Solutions */}
          <div className="bg-emerald-900 text-white p-5 sm:p-6 rounded-2xl space-y-4 shadow-sm">
            <div className="flex items-center gap-2.5 font-bold border-b border-emerald-800 pb-3 text-emerald-200">
              <Sparkles className="w-5 h-5 text-emerald-300 shrink-0" />
              <span>더부룩함 해결 3단계 골든 솔루션</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-emerald-800/80 p-3 rounded-xl border border-emerald-700 space-y-1">
                <div className="font-bold text-emerald-200">SOLUTION 1: 섭취량을 1/2포(반 포)로 줄이기</div>
                <div className="text-emerald-100/90 leading-relaxed">
                  처음 3~5일간은 1포를 다 마시지 말고 아침에 반 포만 음료 150ml에 타서 드세요. 장이 적응한 뒤 1포로 올립니다.
                </div>
              </div>

              <div className="bg-emerald-800/80 p-3 rounded-xl border border-emerald-700 space-y-1">
                <div className="font-bold text-emerald-200">SOLUTION 2: 따뜻하지 않은 미지근한 음료 사용</div>
                <div className="text-emerald-100/90 leading-relaxed">
                  차가운 우유보다는 미지근한 두유나 상온 상태의 물을 사용하면 위장이 놀라지 않고 편안해집니다.
                </div>
              </div>

              <div className="bg-emerald-800/80 p-3 rounded-xl border border-emerald-700 space-y-1">
                <div className="font-bold text-emerald-200">SOLUTION 3: 수분 섭취량 하루 +500ml 늘리기</div>
                <div className="text-emerald-100/90 leading-relaxed">
                  식이섬유는 수분을 머금어야 부드럽게 장을 통과합니다. 물을 충분히 마셔야 가스 참과 변비가 사라집니다.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
