export interface CustomPlanInput {
  purpose: 'diet' | 'breakfast' | 'digestive' | 'vitality';
  experience: 'beginner' | 'intermediate' | 'veteran';
  liquid: 'black_soymilk' | 'soymilk' | 'water' | 'almond_milk' | 'milk';
  targetTime: '07:30' | '12:30' | '19:00' | '21:00';
  currentWeight?: number;
  sensitivity: 'sensitive' | 'normal' | 'strong';
}

export interface CustomPlanOutput {
  title: string;
  recommendedLiquid: string;
  liquidAmount: string;
  timingAdvice: string;
  expectedCalorie: number;
  satietyIndex: string;
  weeklySchedule: { week: number; dose: string; advice: string }[];
  keySecretTip: string;
}

export interface Recipe {
  id: string;
  name: string;
  category: 'diet' | 'taste' | 'gut' | 'fitness';
  calories: number;
  ingredients: string[];
  liquid: string;
  prepTime: string;
  satietyStars: number;
  digestibility: '최상' | '상' | '보통';
  description: string;
  instructions: string[];
  benefits: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'temperature' | 'liquid' | 'diet' | 'symptoms' | 'family';
  iconName: string;
}
