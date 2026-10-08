import React, { useState } from 'react';
import { GOLDEN_RULES } from '../data/saengsikData';
import { Flame, Milk, Timer, Sparkles, Droplets, Check, X, ChevronDown, ChevronUp } from 'lucide-react';

export const GoldenRules: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlameOff': return <Flame className="w-5 h-5 text-amber-600" />;
      case 'Milk': return <Milk className="w-5 h-5 text-emerald-600" />;
      case 'Timer': return <Timer className="w-5 h-5 text-sky-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-blue-600" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="py-10 bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            5 GOLDEN RULES OF SAENGSIK
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            다움생식 효과 높이는 5대 황금 법칙
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            생식 속 미네랄, 살아있는 생소화효소, 항산화 영양소를 100% 온전하게 섭취하는 구체적 방법입니다.
          </p>
        </div>

        {/* 5 Rules Interactive Cards */}
        <div className="space-y-3">
          {GOLDEN_RULES.map((rule) => {
            const isExpanded = expandedId === rule.id;
            return (
              <div 
                key={rule.id}
                className={`rounded-xl border transition-all duration-200 ${
                  isExpanded 
                    ? 'border-emerald-300 bg-stone-50/90 shadow-sm' 
                    : 'border-stone-200 bg-white hover:border-stone-300'
                }`}
              >
                {/* Card Top / Header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : rule.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center shrink-0">
                      {getIcon(rule.icon)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                          0{rule.id}
                        </span>
                        <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                          {rule.title}
                        </h3>
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5 font-medium">
                        {rule.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-stone-400">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-4 pb-5 sm:px-5 space-y-4 border-t border-stone-200/60 pt-4">
                    <p className="text-sm text-stone-700 leading-relaxed">
                      {rule.description}
                    </p>

                    {/* Do vs Don't Comparison */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-lg p-3 flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 text-xs mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-emerald-900 uppercase">올바른 방법 (DO)</div>
                          <div className="text-xs text-emerald-800 mt-0.5 font-medium">{rule.doText}</div>
                        </div>
                      </div>

                      <div className="bg-rose-50/80 border border-rose-200/80 rounded-lg p-3 flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 text-xs mt-0.5">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-rose-900 uppercase">피해야 할 방법 (DON'T)</div>
                          <div className="text-xs text-rose-800 mt-0.5 font-medium">{rule.dontText}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Visual Shaking & Temperature Guide */}
        <div className="bg-gradient-to-r from-emerald-900 to-stone-900 text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold text-emerald-300 uppercase tracking-widest">
                TEMPERATURE & SHAKING TIPS
              </span>
              <h3 className="text-xl font-serif font-bold text-white mt-1">
                왜 차가운/미지근한 음료(40℃ 이하)에 타야 할까요?
              </h3>
            </div>
            <div className="bg-emerald-800/80 border border-emerald-600 text-emerald-200 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap self-start sm:self-auto">
              생식 과학: 동결건조 공법 보존
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-3xl">
            다움생식은 열을 가하지 않고 영하 40℃ 이하에서 수분만 급속 승화시키는 <strong className="text-white">동결건조(Freeze-Drying)</strong> 공법으로 제조됩니다. 
            원물의 활성 유기 미네랄, 엽산, 비타민, 클로로필 및 생소화효소가 보존되어 있어, 40℃ 이상의 뜨거운 열이 가해지면 단백질 변성 및 효소 불활성화가 일어납니다.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 space-y-1">
              <div className="text-emerald-300 font-bold">🧊 10~25℃ (차가운 음료)</div>
              <div className="text-stone-300">여름철 및 상쾌한 디톡스 목적. 맛이 가장 깔끔하고 청량함.</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 space-y-1">
              <div className="text-emerald-300 font-bold">🥛 25~35℃ (미지근한 음료)</div>
              <div className="text-stone-300">위장이 예민하거나 겨울철. 소화가 편안하고 장에 부담 없음.</div>
            </div>
            <div className="bg-red-500/20 backdrop-blur-sm rounded-lg p-3 border border-red-400/30 space-y-1">
              <div className="text-red-300 font-bold">🔥 50℃ 이상 (뜨거운 물)</div>
              <div className="text-stone-300">절대 금지! 효소 파괴 및 식이섬유 불균형 유발.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
