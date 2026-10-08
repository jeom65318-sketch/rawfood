import React, { useState } from 'react';
import { CustomPlanInput, CustomPlanOutput } from '../types';
import { Calculator, Calendar, Clock, Droplets, CheckCircle2, Sparkles, Copy, Check } from 'lucide-react';

export const CustomPlanner: React.FC = () => {
  const [inputs, setInputs] = useState<CustomPlanInput>({
    purpose: 'diet',
    experience: 'beginner',
    liquid: 'black_soymilk',
    targetTime: '19:00',
    sensitivity: 'normal'
  });

  const [copied, setCopied] = useState(false);

  // Calculate Custom Plan Output dynamically based on inputs
  const calculatePlan = (): CustomPlanOutput => {
    const isBeginner = inputs.experience === 'beginner' || inputs.sensitivity === 'sensitive';
    
    let title = '';
    let timingAdvice = '';
    let expectedCalorie = 150;
    let satietyIndex = '★★★★☆ (4.5 / 5.0)';
    let keySecretTip = '';

    if (inputs.purpose === 'diet') {
      title = '🔥 저녁 식사 대용 체중 감량 플랜';
      timingAdvice = '18:30 ~ 19:30 저녁 식사 대신 다움생식을 섭취하세요. 점심 식사는 정상적으로 드시고, 저녁 과식을 원천 차단합니다.';
      expectedCalorie = inputs.liquid === 'water' ? 135 : 195;
      satietyIndex = '★★★★★ (5.0 / 5.0 - 애프터 워터 필수)';
      keySecretTip = '생식을 천천히 씹어마신 후 15분 뒤 미지근한 물 250ml를 마시면 식이섬유가 위 안에서 팽창하여 밤 11시까지 배고픔이 느껴지지 않습니다.';
    } else if (inputs.purpose === 'breakfast') {
      title = '🌅 상쾌한 아침 활력 식사 대용 플랜';
      timingAdvice = '07:00 ~ 08:30 공복 아침 식사 대용으로 섭취하세요. 점심시간 과식을 예방하고 아침 뇌 활동에 필요한 건강 탄수화물을 공급합니다.';
      expectedCalorie = inputs.liquid === 'water' ? 135 : 195;
      satietyIndex = '★★★★☆ (4.0 / 5.0)';
      keySecretTip = '아침 공복에 마실 때 미지근한 음료를 사용하면 위장이 놀라지 않고 소화 흡수가 극대화됩니다.';
    } else if (inputs.purpose === 'digestive') {
      title = '🌿 속 편한 장 건강 & 클렌즈 플랜';
      timingAdvice = '07:30 공복 아침 1/2~1포 + 유산균 1포 조합 또는 저녁 가벼운 클렌즈로 섭취하세요.';
      expectedCalorie = 180;
      satietyIndex = '★★★★☆ (4.2 / 5.0)';
      keySecretTip = '장내 미생물 적응을 위해 첫 5일간은 반 포(1/2포)로 시작하고, 하루 수분을 총 2L 이상 마시는 것이 핵심입니다.';
    } else {
      title = '⚡ 기력 회복 & 영양 밸런스 플랜';
      timingAdvice = '오후 3~4시 나른한 간식 시간 또는 운동 후 30분 이내 영양 보충용으로 섭취하세요.';
      expectedCalorie = 220;
      satietyIndex = '★★★★☆ (4.0 / 5.0)';
      keySecretTip = '식사와 식사 사이 출출할 때 드시면 혈당 스파이크 없이 고른 활력을 유지시켜 줍니다.';
    }

    let recommendedLiquidName = '무당 검은콩 두유';
    let liquidAmount = '200~230ml';
    if (inputs.liquid === 'water') {
      recommendedLiquidName = '미네랄 워터 (꿀 1티스푼 추가 권장)';
      liquidAmount = '230~250ml';
    } else if (inputs.liquid === 'almond_milk') {
      recommendedLiquidName = '무당 아몬드 밀크';
      liquidAmount = '200ml';
    } else if (inputs.liquid === 'milk') {
      recommendedLiquidName = '저지방 우유';
      liquidAmount = '200~220ml';
    } else if (inputs.liquid === 'soymilk') {
      recommendedLiquidName = '일반 무당 두유';
      liquidAmount = '200ml';
    }

    const weeklySchedule = isBeginner ? [
      { week: 1, dose: '1/2포 (15g)', advice: '150ml 음료에 1/2포 혼합. 장내 유익균 및 식이섬유 적응 기간입니다.' },
      { week: 2, dose: '1/2포 ~ 1포', advice: '속 편함 정도를 확인 후 1포로 증량합니다. 씹듯이 천천히 마십니다.' },
      { week: 3, dose: '1포 (30g) 정상 섭취', advice: '200~250ml 음료에 1포 정상 혼합. 섭취 후 물 1컵을 꼭 보충합니다.' },
      { week: 4, dose: '1포 유지 (습관화)', advice: '몸이 생식의 풍부한 영양과 식이섬유에 완전히 적응한 상태입니다.' },
    ] : [
      { week: 1, dose: '1포 (30g) 정상 섭취', advice: '200~250ml 음료에 1포 혼합하여 섭취합니다.' },
      { week: 2, dose: '1포 정기 섭취', advice: '섭취 후 15분 뒤 물 1컵 보충으로 포만감을 높입니다.' },
      { week: 3, dose: '1포 정기 섭취', advice: '주 5~7회 꾸준한 섭취로 체질 개선 및 장 건강 유지.' },
      { week: 4, dose: '1포 마스터 유지', advice: '몸이 가볍고 개운해지며 아침 활력이 향상됩니다.' },
    ];

    return {
      title,
      recommendedLiquid: recommendedLiquidName,
      liquidAmount,
      timingAdvice,
      expectedCalorie,
      satietyIndex,
      weeklySchedule,
      keySecretTip
    };
  };

  const planOutput = calculatePlan();

  const handleCopy = () => {
    const textToCopy = `[다움생식 나만의 맞춤 플랜]
플랜: ${planOutput.title}
권장 음료: ${planOutput.recommendedLiquid} ${planOutput.liquidAmount}
섭취 시간 및 요령: ${planOutput.timingAdvice}
예상 칼로리: 약 ${planOutput.expectedCalorie} kcal
핵심 비법: ${planOutput.keySecretTip}`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-10 bg-stone-50 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
            <Calculator className="w-3.5 h-3.5" />
            <span>PERSONALIZED REGIMEN CALCULATOR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            나의 목적별 맞춤 섭취 플래너
          </h2>
          <p className="text-sm text-stone-600">
            자신의 체질, 목적, 생식 경험에 맞춰 가장 효과적인 시간대와 음료 비율, 4주 적응 플랜을 자동으로 계산해 드립니다.
          </p>
        </div>

        {/* Input Form & Output Display Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Input Form (5 cols) */}
          <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm space-y-5">
            <h3 className="font-bold text-stone-900 text-base border-b border-stone-100 pb-3 flex items-center justify-between">
              <span>섭취 조건 설정</span>
              <span className="text-xs text-stone-400 font-normal">선택에 맞춰 실시간 변경</span>
            </h3>

            {/* 1. Purpose */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700">1. 주된 섭취 목적</label>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setInputs({ ...inputs, purpose: 'diet' })}
                  className={`p-2.5 rounded-lg border text-left transition-colors ${
                    inputs.purpose === 'diet' ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-bold' : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  🔥 다이어트/체중감량
                </button>
                <button
                  type="button"
                  onClick={() => setInputs({ ...inputs, purpose: 'breakfast' })}
                  className={`p-2.5 rounded-lg border text-left transition-colors ${
                    inputs.purpose === 'breakfast' ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-bold' : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  🌅 아침 식사 대용
                </button>
                <button
                  type="button"
                  onClick={() => setInputs({ ...inputs, purpose: 'digestive' })}
                  className={`p-2.5 rounded-lg border text-left transition-colors ${
                    inputs.purpose === 'digestive' ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-bold' : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  🌿 장 건강/배변 개선
                </button>
                <button
                  type="button"
                  onClick={() => setInputs({ ...inputs, purpose: 'vitality' })}
                  className={`p-2.5 rounded-lg border text-left transition-colors ${
                    inputs.purpose === 'vitality' ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-bold' : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  ⚡ 기력/영양 보충
                </button>
              </div>
            </div>

            {/* 2. Experience */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700">2. 생식 섭취 경험</label>
              <div className="grid grid-cols-3 gap-1.5 text-xs">
                <button
                  type="button"
                  onClick={() => setInputs({ ...inputs, experience: 'beginner' })}
                  className={`py-2 px-2 rounded-lg border transition-colors ${
                    inputs.experience === 'beginner' ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold' : 'border-stone-200 text-stone-600'
                  }`}
                >
                  처음(초보)
                </button>
                <button
                  type="button"
                  onClick={() => setInputs({ ...inputs, experience: 'intermediate' })}
                  className={`py-2 px-2 rounded-lg border transition-colors ${
                    inputs.experience === 'intermediate' ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold' : 'border-stone-200 text-stone-600'
                  }`}
                >
                  1~3개월차
                </button>
                <button
                  type="button"
                  onClick={() => setInputs({ ...inputs, experience: 'veteran' })}
                  className={`py-2 px-2 rounded-lg border transition-colors ${
                    inputs.experience === 'veteran' ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold' : 'border-stone-200 text-stone-600'
                  }`}
                >
                  베테랑
                </button>
              </div>
            </div>

            {/* 3. Preferred Liquid */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700">3. 선호 음료</label>
              <select
                value={inputs.liquid}
                onChange={(e) => setInputs({ ...inputs, liquid: e.target.value as any })}
                className="w-full text-xs font-medium bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="black_soymilk">🥛 무당 검은콩 두유 (강력 추천)</option>
                <option value="soymilk">🥛 일반 두유</option>
                <option value="water">💧 미네랄 워터 (최저 칼로리)</option>
                <option value="almond_milk">🌰 아몬드 밀크</option>
                <option value="milk">🥛 저지방 우유</option>
              </select>
            </div>

            {/* 4. Stomach Sensitivity */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-stone-700">4. 평소 위장/소화 상태</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setInputs({ ...inputs, sensitivity: 'sensitive' })}
                  className={`p-2 rounded-lg border ${
                    inputs.sensitivity === 'sensitive' ? 'border-amber-500 bg-amber-50 text-amber-900 font-bold' : 'border-stone-200 text-stone-600'
                  }`}
                >
                  속이 잘 더부룩함
                </button>
                <button
                  type="button"
                  onClick={() => setInputs({ ...inputs, sensitivity: 'normal' })}
                  className={`p-2 rounded-lg border ${
                    inputs.sensitivity === 'normal' ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold' : 'border-stone-200 text-stone-600'
                  }`}
                >
                  평범/소화 양호
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Plan Output Blueprint (7 cols) */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-2xl border border-emerald-200 shadow-sm space-y-6">
            
            {/* Header Result */}
            <div className="flex items-start justify-between border-b border-stone-100 pb-4 gap-3">
              <div>
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  YOUR CUSTOM BLUEPRINT
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                  {planOutput.title}
                </h3>
              </div>
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center gap-1 shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? '복사완료' : '플랜 복사'}</span>
              </button>
            </div>

            {/* Key Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 space-y-1">
                <div className="text-xs text-stone-500 font-medium">추천 음료 & 용량</div>
                <div className="text-xs font-bold text-emerald-900">{planOutput.recommendedLiquid}</div>
                <div className="text-xs text-stone-600 font-mono">{planOutput.liquidAmount}</div>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 space-y-1">
                <div className="text-xs text-stone-500 font-medium">예상 1회 칼로리</div>
                <div className="text-base font-mono font-bold text-stone-900">약 {planOutput.expectedCalorie} <span className="text-xs">kcal</span></div>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 space-y-1 col-span-2 sm:col-span-1">
                <div className="text-xs text-stone-500 font-medium">포만감 만족도</div>
                <div className="text-xs font-semibold text-emerald-800">{planOutput.satietyIndex}</div>
              </div>
            </div>

            {/* Timing Guidance */}
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-2 text-xs">
              <div className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm">
                <Clock className="w-4 h-4 text-emerald-700" />
                <span>추천 시간대 & 복용 노하우</span>
              </div>
              <p className="text-emerald-900 leading-relaxed">
                {planOutput.timingAdvice}
              </p>
            </div>

            {/* Key Secret Tip */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 space-y-1.5 text-xs">
              <div className="font-bold text-amber-950 flex items-center gap-1 text-xs uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>효과 극대화 비밀 비법</span>
              </div>
              <p className="text-amber-900 leading-relaxed font-medium">
                {planOutput.keySecretTip}
              </p>
            </div>

            {/* 4-Week Adaptation Timeline Table */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-stone-800 flex items-center justify-between">
                <span>📅 단계별 4주 적응 스케줄</span>
                <span className="text-stone-400 font-normal">속 편한 단계적 섭취법</span>
              </div>
              <div className="border border-stone-200 rounded-xl overflow-hidden text-xs">
                <div className="bg-stone-100 px-3 py-2 font-bold text-stone-700 grid grid-cols-12 gap-2 border-b border-stone-200">
                  <div className="col-span-3">주차</div>
                  <div className="col-span-3">권장 섭취량</div>
                  <div className="col-span-6">핵심 가이드</div>
                </div>
                <div className="divide-y divide-stone-100 bg-white">
                  {planOutput.weeklySchedule.map((item) => (
                    <div key={item.week} className="px-3 py-2.5 grid grid-cols-12 gap-2 items-center">
                      <div className="col-span-3 font-bold text-emerald-800">
                        {item.week}주차
                      </div>
                      <div className="col-span-3 font-semibold text-stone-900">
                        {item.dose}
                      </div>
                      <div className="col-span-6 text-stone-600">
                        {item.advice}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
