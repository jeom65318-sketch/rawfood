import { FAQItem, Recipe } from '../types';

export const GOLDEN_RULES = [
  {
    id: 1,
    title: '40℃ 이하 온도 엄수',
    subtitle: '생소화효소 & 비타민 보존',
    description: '뜨거운 물은 생식 속 동결건조된 살아있는 효소, 비타민C, 엽산을 파괴합니다. 손등에 대었을 때 미지근하거나 차가운 음료(15~30℃)를 사용하세요.',
    doText: '차가운 물, 미지근한 두유/우유',
    dontText: '60℃ 이상의 따뜻한/뜨거운 물',
    icon: 'FlameOff'
  },
  {
    id: 2,
    title: '두유 200~250ml 황금 비율',
    subtitle: '식물성 단백질 + 영양 시너지',
    description: '무당 검은콩 두유는 생식의 고소한 맛을 배가시키고 식물성 단백질과 칼슘을 보충해 줍니다. 물에 탈 때는 꿀 1티스푼을 넣으면 풍미가 좋아집니다.',
    doText: '무당 검은콩 두유 200~250ml',
    dontText: '너무 많은 액수로 가묽어지는 현상',
    icon: 'Milk'
  },
  {
    id: 3,
    title: '타서 3분 이내 즉시 음용',
    subtitle: '겔(Gel)화 & 산화 방지',
    description: '생식의 풍부한 차전자피, 차조, 식이섬유는 시간이 지나면 음료를 흡수해 젤처럼 굳어집니다. 쉐이커로 10~15초 흔든 후 곧바로 마시는 것이 좋습니다.',
    doText: '타자마자 즉시 마시기',
    dontText: '타놓고 30분 이상 방치하기',
    icon: 'Timer'
  },
  {
    id: 4,
    title: '오물오물 씹듯이 천천히',
    subtitle: '소화효소 아밀라아제 활성화',
    description: '원샷으로 한번에 마시면 속이 더부룩할 수 있습니다. 입안에서 침과 섞이도록 2~3분에 걸쳐 씹듯이 천천히 마시면 소화 흡수율이 극대화됩니다.',
    doText: '2~3분간 천천히 침과 섞어 음용',
    dontText: '꿀꺽꿀꺽 벌컥벌컥 원샷',
    icon: 'Sparkles'
  },
  {
    id: 5,
    title: '섭취 후 물 1컵 보충 (애프터 워터)',
    subtitle: '식이섬유 팽창 & 장 운동 촉진',
    description: '생식의 수용성·불용성 식이섬유는 장에서 물을 흡수하여 변을 부드럽게 만들고 포만감을 높입니다. 마신 뒤 10~15분 후 물 1컵(200ml)을 마셔주세요.',
    doText: '섭취 15분 후 미지근한 물 1컵',
    dontText: '생식 마신 뒤 물을 전혀 안 마심',
    icon: 'Droplets'
  }
];

export const RECIPES: Recipe[] = [
  {
    id: 'black-soymilk-latte',
    name: '시그니처 검은콩 라떼',
    category: 'taste',
    calories: 195,
    ingredients: ['다움생식 1포 (30g)', '무당 검은콩 두유 200ml', '볶은 곡물 가루 약간 (선택)'],
    liquid: '무당 검은콩 두유',
    prepTime: '1분',
    satietyStars: 5,
    digestibility: '최상',
    description: '다움생식과 가장 궁합이 좋은 고소한 영양 만점 대표 섭취법입니다.',
    instructions: [
      '쉐이커 컵에 무당 검은콩 두유 200ml를 먼저 붓습니다.',
      '다움생식 1포를 쉐이커에 넣습니다.',
      '뚜껑을 잘 닫고 위아래로 10~15회 가볍게 흔듭니다.',
      '천천히 입안에서 씹듯이 오물거리며 마십니다.'
    ],
    benefits: ['식물성 단백질 충전', '검은콩 안토시아닌 영양', '높은 포만감']
  },
  {
    id: 'detox-honey-water',
    name: '깔끔한 아침 디톡스 워터',
    category: 'diet',
    calories: 135,
    ingredients: ['다움생식 1포 (30g)', '시원한 미네랄 워터 230ml', '천연 벌꿀 1티스푼 (5g)'],
    liquid: '미네랄 워터',
    prepTime: '1분',
    satietyStars: 4,
    digestibility: '최상',
    description: '칼로리를 최소화하고 속을 가볍게 개운하게 비워주는 저칼로리 깔끔 섭취법입니다.',
    instructions: [
      '차가운 물 230ml에 꿀 1티스푼을 넣어 가볍게 젓습니다.',
      '다움생식 1포를 넣고 쉐이커로 흔듭니다.',
      '공복 아침에 천천히 음용합니다.'
    ],
    benefits: ['최저 칼로리 (135kcal)', '순수 가벼운 디톡스', '체중 감량 최적']
  },
  {
    id: 'green-apple-vitality',
    name: '그린 애플 비타민 믹스',
    category: 'gut',
    calories: 220,
    ingredients: ['다움생식 1포', '아몬드 밀크(무당) 200ml', '사과 1/4조각 (믹서 갈기)'],
    liquid: '아몬드 밀크 + 사과',
    prepTime: '3분',
    satietyStars: 5,
    digestibility: '상',
    description: '사과의 펙틴 식이섬유와 아몬드유의 비타민E가 결합하여 장 건강과 상쾌함을 주는 스무디입니다.',
    instructions: [
      '아몬드유 200ml와 사과 1/4조각을 믹서기에 5초간 가볍게 갈아줍니다.',
      '생식 1포를 넣고 수동으로 흔들거나 3초간 가볍게 갈아 마십니다.',
      '아침 상쾌한 활력을 되찾아줍니다.'
    ],
    benefits: ['사과 펙틴 식이섬유', '비타민C 활력', '장내 유익균 증식']
  },
  {
    id: 'protein-power-shake',
    name: '피트니스 단백질 밸런스 쉐이크',
    category: 'fitness',
    calories: 280,
    ingredients: ['다움생식 1포', '저지방 우유 250ml', '식물성 단백질 파우더 1/2스쿱 (10g)'],
    liquid: '저지방 우유',
    prepTime: '2분',
    satietyStars: 5,
    digestibility: '상',
    description: '운동 직후나 단백질 보충이 필요한 분들을 위한 프리미엄 아미노산 & 근육 영양 레시피입니다.',
    instructions: [
      '우유 250ml에 단백질 파우더와 생식 1포를 함께 넣습니다.',
      '덩어리가 풀릴 때까지 흔들어 마십니다.',
      '운동 후 30분 이내 섭취하면 근육 회복에 탁월합니다.'
    ],
    benefits: ['고단백 영양 20g+', '근육 합성 촉진', '오후 피로 회복']
  },
  {
    id: 'gut-probiotics-yogurt-bowl',
    name: '속 편한 프로바이오틱스 요거트 볼',
    category: 'gut',
    calories: 210,
    ingredients: ['다움생식 1/2~1포', '플레인 요거트 150g', '블루베리 또는 견과류 약간'],
    liquid: '플레인 요거트 (떠먹는 방식)',
    prepTime: '2분',
    satietyStars: 4,
    digestibility: '상',
    description: '마시는 것보다 씹는 식감을 원할 때, 요거트에 생식을 뿌려 떠먹는 이색 고소한 영양식입니다.',
    instructions: [
      '볼에 볼레인 요거트 150g을 담습니다.',
      '다움생식 1/2포~1포를 솔솔 뿌립니다.',
      '숟가락으로 살살 섞어 씹어가며 먹습니다.'
    ],
    benefits: ['유산균 + 생식 신바이오틱스', '씹는 재미와 오랜 포만감', '간식/야식 대용']
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: '뜨거운 물에 타서 마시면 안 되나요?',
    answer: '절대 안 됩니다! 다움생식은 동결건조 공법으로 곡물과 채소의 살아있는 생소화효소, 비타민C, 엽산, 클로로필 등이 풍부하게 보존되어 있습니다. 40℃ 이상의 뜨거운 물을 사용하면 이 열에 약한 유효 영양소와 효소가 변성되어 효과가 급격히 떨어집니다. 반드시 미지근하거나 차가운 음료(15~30℃)에 타서 드세요.',
    category: 'temperature',
    iconName: 'Thermometer'
  },
  {
    question: '두유, 우유, 물 중 어떤 것에 타먹는 것이 가장 효과적인가요?',
    answer: '영양과 맛의 밸런스 면에서는 [무당 검은콩 두유]가 베스트 1위입니다. 식물성 단백질과 안토시아닌, 칼슘이 보충되어 고소하고 포만감이 오래 지속됩니다. 칼로리를 낮춰 빠른 체중 감량을 원할 때는 [시원한 물 230ml + 꿀 1티스푼] 조합을 추천하며, 유제품이 잘 맞으시는 분은 [저지방 우유]에 타서 드셔도 아주 좋습니다.',
    category: 'liquid',
    iconName: 'GlassWater'
  },
  {
    question: '다이어트 목적으로 저녁 대신 먹을 때 배고픔을 줄이는 팁이 있나요?',
    answer: '저녁 대체 섭취 시 2가지 핵심 팁이 있습니다! 1) 섭취 시 꼭 2~3분간 씹듯이 천천히 마시기 (뇌의 만복중추 자극). 2) 생식을 다 마신 10~15분 뒤, 미지근한 물 1컵(200~250ml)을 마셔주세요. 장 속 식이섬유가 수분을 머금고 2~3배 부풀어 올라 밤늦게까지 배고픔 없이 개운하고 든든하게 유지됩니다.',
    category: 'diet',
    iconName: 'Scale'
  },
  {
    question: '생식을 마신 후 가스가 차거나 방귀가 자주 나오고 속이 더부룩해요.',
    answer: '매우 자연스러운 [장내 환경 적응 반응(명현현상)]입니다! 평소 식이섬유 섭취가 적었던 분이 갑자기 다움생식의 풍부한 생식이 들어오면, 장내 유익균이 활발해지면서 일시적으로 가스가 발생할 수 있습니다. 처음에 3~7일간은 1포를 다 먹지 말고 [반 포(1/2포)]로 줄여서 드시고, 물을 평소보다 하루 500ml 이상 더 마시면 1주일 이내에 속이 편안해지고 배변 활동이 몰라보게 좋아집니다.',
    category: 'symptoms',
    iconName: 'Stethoscope'
  },
  {
    question: '아이들이나 임산부, 어르신이 드셔도 안전한가요?',
    answer: '네, 다움생식은 화학 첨가물이나 인공 합성 영양제 없이 자연 곡물, 채소, 과일, 해조류를 그대로 건조 가공한 자연식품이므로 임산부, 어르신, 아이들 모두 안심하고 드실 수 있습니다. 성장기 아이들은 간식으로 우유나 두유에 타서 드시면 영양 밸런스에 매우 좋고, 어르신들은 소화 흡수가 용이하여 기력 회복에 도움을 줍니다.',
    category: 'family',
    iconName: 'HeartHandshake'
  }
];
