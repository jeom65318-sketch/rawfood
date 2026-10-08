import React from 'react';
import { Leaf, Sparkles, Calendar, BookOpen, MessageSquareText, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenTimer: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenTimer }) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Zone - Single Element */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setActiveTab('summary'); }}
          className="flex items-center gap-2 font-bold text-xl tracking-tight text-emerald-950 hover:text-emerald-800 transition-colors shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center shadow-sm">
            <Leaf className="w-5 h-5" />
          </div>
          <span className="font-serif">다움생식가이드</span>
        </a>

        {/* Nav Zone - 4-5 Text Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-stone-600">
          <button
            onClick={() => setActiveTab('summary')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'summary' ? 'bg-stone-200/80 text-emerald-900 font-semibold' : 'hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            황금 섭취법
          </button>
          <button
            onClick={() => setActiveTab('planner')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'planner' ? 'bg-stone-200/80 text-emerald-900 font-semibold' : 'hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            맞춤 플래너
          </button>
          <button
            onClick={() => setActiveTab('recipes')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'recipes' ? 'bg-stone-200/80 text-emerald-900 font-semibold' : 'hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            황금 레시피
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'ai' ? 'bg-stone-200/80 text-emerald-900 font-semibold' : 'hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            AI 생식 상담
          </button>
          <button
            onClick={() => setActiveTab('tracker')}
            className={`px-3 py-1.5 rounded-md transition-colors ${
              activeTab === 'tracker' ? 'bg-stone-200/80 text-emerald-900 font-semibold' : 'hover:text-stone-900 hover:bg-stone-100'
            }`}
          >
            섭취 기록
          </button>
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenTimer}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>3분 천천히 마시기 타이머</span>
          </button>

          <button
            onClick={() => setActiveTab('planner')}
            className="px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 transition-colors shadow-sm whitespace-nowrap"
          >
            내 맞춤 플랜
          </button>
        </div>
      </div>

      {/* Mobile Sub Nav Bar */}
      <div className="md:hidden flex items-center justify-around border-t border-stone-200 bg-stone-50 px-2 py-1.5 text-xs font-medium text-stone-600 overflow-x-auto">
        <button
          onClick={() => setActiveTab('summary')}
          className={`px-2 py-1 rounded whitespace-nowrap ${activeTab === 'summary' ? 'text-emerald-800 font-bold bg-emerald-100/60' : ''}`}
        >
          황금법칙
        </button>
        <button
          onClick={() => setActiveTab('planner')}
          className={`px-2 py-1 rounded whitespace-nowrap ${activeTab === 'planner' ? 'text-emerald-800 font-bold bg-emerald-100/60' : ''}`}
        >
          맞춤플래너
        </button>
        <button
          onClick={() => setActiveTab('recipes')}
          className={`px-2 py-1 rounded whitespace-nowrap ${activeTab === 'recipes' ? 'text-emerald-800 font-bold bg-emerald-100/60' : ''}`}
        >
          황금레시피
        </button>
        <button
          onClick={() => setActiveTab('ai')}
          className={`px-2 py-1 rounded whitespace-nowrap ${activeTab === 'ai' ? 'text-emerald-800 font-bold bg-emerald-100/60' : ''}`}
        >
          AI상담
        </button>
        <button
          onClick={() => setActiveTab('tracker')}
          className={`px-2 py-1 rounded whitespace-nowrap ${activeTab === 'tracker' ? 'text-emerald-800 font-bold bg-emerald-100/60' : ''}`}
        >
          일일체크
        </button>
      </div>
    </header>
  );
};
