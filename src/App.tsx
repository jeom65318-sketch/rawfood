import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroQuickAnswer } from './components/HeroQuickAnswer';
import { GoldenRules } from './components/GoldenRules';
import { CustomPlanner } from './components/CustomPlanner';
import { RecipeBook } from './components/RecipeBook';
import { AdaptationGuide } from './components/AdaptationGuide';
import { AIConsultant } from './components/AIConsultant';
import { DailyTracker } from './components/DailyTracker';
import { SippingTimerModal } from './components/SippingTimerModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('summary');
  const [isTimerOpen, setIsTimerOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 flex flex-col selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenTimer={() => setIsTimerOpen(true)}
      />

      {/* Main Content Area based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'summary' && (
          <>
            <HeroQuickAnswer
              onGoPlanner={() => setActiveTab('planner')}
              onGoRecipe={() => setActiveTab('recipes')}
              onOpenTimer={() => setIsTimerOpen(true)}
            />
            <GoldenRules />
            <AdaptationGuide />
          </>
        )}

        {activeTab === 'planner' && (
          <>
            <CustomPlanner />
            <AdaptationGuide />
          </>
        )}

        {activeTab === 'recipes' && (
          <RecipeBook />
        )}

        {activeTab === 'ai' && (
          <AIConsultant />
        )}

        {activeTab === 'tracker' && (
          <DailyTracker />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* 3-Minute Slow-Sipping Timer Modal */}
      <SippingTimerModal
        isOpen={isTimerOpen}
        onClose={() => setIsTimerOpen(false)}
      />

    </div>
  );
}
