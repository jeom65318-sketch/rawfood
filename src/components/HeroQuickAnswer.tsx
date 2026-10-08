import React from 'react';
import { Flame, Droplets, Clock, Sparkles, AlertTriangle, CheckCircle2, ArrowRight, GlassWater } from 'lucide-react';

interface HeroQuickAnswerProps {
  onGoPlanner: () => void;
  onGoRecipe: () => void;
  onOpenTimer: () => void;
}

export const HeroQuickAnswer: React.FC<HeroQuickAnswerProps> = ({
  onGoPlanner,
  onGoRecipe,
  onOpenTimer
}) => {
  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-stone-100/80 via-stone-50 to-stone-50 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Top Kicker & Headline */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
            <span>영양학적으로 입증된 가장 효과적인 복용법</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-snug">
            다움생식 효과 극대화 섭취 가이드
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            동결건조 생소화효소와 식이섬유를 파괴 없이 100% 흡수시키는 <br className="hidden sm:inline" />
            <strong className="text-emerald-900 font-semibold underline decoration-emerald-300 decoration-2 underline-offset-4">‘5대 황금 복용법’</strong>과 목적별 맞춤 가이드를 확인해보세요.
          </p>
        </div>

        {/* Quick Answer Summary Box */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6 mb-10">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>한눈에 보는 핵심 3초 표준 공식</span>
            </h2>
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100">
              추천 조합 1위: 무당 검은콩 두유
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Rule 1 */}
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200/80 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-mono">1</span>
                <span>음료 & 비율</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong className="text-stone-800">두유 또는 물 200~250ml</strong> + <strong className="text-stone-800">생식 1포(30g)</strong><br />
                쉐이커로 10~15초 가볍게 흔들어 혼합
              </p>
            </div>

            {/* Rule 2 */}
            <div className="bg-amber-50/50 rounded-xl p-4 border border-amber-200/60 space-y-2">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-sm">
                <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-mono">2</span>
                <span>온도 (가장 중요!)</span>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed">
                <strong className="text-amber-950 font-semibold">40℃ 이하 미지근하거나 차가운 음료</strong><br />
                뜨거운 물 사용 시 생효소 & 비타민 파괴
              </p>
            </div>

            {/* Rule 3 */}
            <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-200/60 space-y-2">
              <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
                <span className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-mono">3</span>
                <span>음용 방식 & 워터</span>
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                <strong className="text-emerald-950 font-semibold">씹듯이 2~3분간 천천히</strong> 마시고,<br />
                15분 후 미지근한 물 1컵 보충 필수
              </p>
            </div>
          </div>

          {/* Warning Banner */}
          <div className="flex items-start gap-3 bg-red-50/70 border border-red-200/80 rounded-xl p-3.5 text-xs text-red-900">
            <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">절대 주의:</span> 다움생식은 열에 민감한 살아있는 동결건조 생식이므로 <strong>60℃ 이상의 따뜻한 물이나 찌개에 타서 드시면 효소 효과가 사라집니다.</strong> 또한 타놓고 30분 이상 방치하면 식이섬유가 액체를 흡수해 젤 상태로 굳어지므로, 타는 즉시 음용하세요.
            </div>
          </div>

          {/* Quick CTA row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-stone-100">
            <div className="text-xs text-stone-500">
              💡 목적(다이어트, 아침식사대용, 장건강)에 따라 섭취 시간이 다릅니다.
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenTimer}
                className="px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-100/80 rounded-lg hover:bg-emerald-200 transition-colors flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>씹기 가이드 타이머</span>
              </button>
              <button
                onClick={onGoPlanner}
                className="px-4 py-2 text-xs font-bold text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 transition-colors flex items-center gap-1 shadow-sm"
              >
                <span>내 목적별 맞춤 시간표 계산</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          <div className="bg-white p-4 rounded-xl border border-stone-200/80 space-y-1">
            <div className="text-emerald-700 font-bold text-xl font-mono">150~195</div>
            <div className="text-xs text-stone-500 font-medium">1회 섭취 칼로리 (kcal)</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-stone-200/80 space-y-1">
            <div className="text-emerald-700 font-bold text-xl font-mono">200~250ml</div>
            <div className="text-xs text-stone-500 font-medium">두유/물 권장 혼합량</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-stone-200/80 space-y-1">
            <div className="text-emerald-700 font-bold text-xl font-mono">1.5 ~ 2L</div>
            <div className="text-xs text-stone-500 font-medium">일일 권장 수분 섭취량</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-stone-200/80 space-y-1">
            <div className="text-emerald-700 font-bold text-xl font-mono">4 ~ 5시간</div>
            <div className="text-xs text-stone-500 font-medium">식이섬유 포만감 유지</div>
          </div>
        </div>

      </div>
    </section>
  );
};
