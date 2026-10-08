import React, { useState } from 'react';
import { RECIPES } from '../data/saengsikData';
import { Recipe } from '../types';
import { BookOpen, Star, Clock, Check, Sparkles, Flame, HeartPulse } from 'lucide-react';

export const RecipeBook: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(RECIPES[0]);

  const filteredRecipes = selectedCategory === 'all' 
    ? RECIPES 
    : RECIPES.filter(r => r.category === selectedCategory);

  return (
    <section className="py-10 bg-white border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            LIQUID SYNERGY RECIPES
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            다움생식 황금 음료 레시피
          </h2>
          <p className="text-sm text-stone-600">
            생식 특유의 고소한 풍미를 살리고 영양 흡수율을 높여주는 검증된 음료 조합 컬렉션입니다.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-medium">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'all' 
                ? 'bg-stone-900 text-white font-bold' 
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            전체 보기 ({RECIPES.length})
          </button>
          <button
            onClick={() => setSelectedCategory('taste')}
            className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'taste' 
                ? 'bg-emerald-700 text-white font-bold' 
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            🥛 대표 시그니처 (두유 조합)
          </button>
          <button
            onClick={() => setSelectedCategory('diet')}
            className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'diet' 
                ? 'bg-emerald-700 text-white font-bold' 
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            🔥 다이어트 & 디톡스
          </button>
          <button
            onClick={() => setSelectedCategory('gut')}
            className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'gut' 
                ? 'bg-emerald-700 text-white font-bold' 
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            🌿 장건강 & 프로바이오틱스
          </button>
          <button
            onClick={() => setSelectedCategory('fitness')}
            className={`px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap ${
              selectedCategory === 'fitness' 
                ? 'bg-emerald-700 text-white font-bold' 
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            💪 피트니스 & 단백질
          </button>
        </div>

        {/* Recipe Grid & Active Viewer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Left: Recipe List (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            {filteredRecipes.map((recipe) => {
              const isSelected = activeRecipe?.id === recipe.id;
              return (
                <div
                  key={recipe.id}
                  onClick={() => setActiveRecipe(recipe)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected 
                      ? 'border-emerald-600 bg-emerald-50/70 shadow-sm' 
                      : 'border-stone-200 bg-white hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-bold text-stone-900 text-sm">
                      {recipe.name}
                    </h4>
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded">
                      {recipe.calories} kcal
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-1">
                    {recipe.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-stone-400 mt-3 pt-2 border-t border-stone-100">
                    <span className="text-stone-500 font-medium">{recipe.liquid}</span>
                    <span className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{recipe.satietyStars}.0</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Recipe Detail Card (7 cols) */}
          {activeRecipe && (
            <div className="md:col-span-7 bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-5">
              
              <div className="flex items-start justify-between border-b border-stone-200 pb-4">
                <div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded uppercase tracking-wide">
                    {activeRecipe.liquid} 조합
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2">
                    {activeRecipe.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1">
                    {activeRecipe.description}
                  </p>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-white p-2.5 rounded-lg border border-stone-200">
                  <div className="text-stone-400">칼로리</div>
                  <div className="font-mono font-bold text-stone-900 text-sm mt-0.5">{activeRecipe.calories} kcal</div>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-stone-200">
                  <div className="text-stone-400">조리시간</div>
                  <div className="font-bold text-stone-900 text-sm mt-0.5">{activeRecipe.prepTime}</div>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-stone-200">
                  <div className="text-stone-400">소화 용이성</div>
                  <div className="font-bold text-emerald-800 text-sm mt-0.5">{activeRecipe.digestibility}</div>
                </div>
              </div>

              {/* Ingredients List */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  준비 재료
                </div>
                <div className="bg-white p-3 rounded-xl border border-stone-200 space-y-1.5">
                  {activeRecipe.ingredients.map((ing, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step by Step Instructions */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  제조 및 음용 방법
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-2.5">
                  {activeRecipe.instructions.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-800">
                      <span className="w-5 h-5 rounded-full bg-stone-100 font-mono font-bold text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed mt-0.5">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Health Benefits Pills */}
              <div className="pt-2 border-t border-stone-200 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-bold text-stone-600">주요 장점:</span>
                {activeRecipe.benefits.map((b, idx) => (
                  <span key={idx} className="bg-emerald-100/80 text-emerald-900 px-2.5 py-0.5 rounded font-medium">
                    {b}
                  </span>
                ))}
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
