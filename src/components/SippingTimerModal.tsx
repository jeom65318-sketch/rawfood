import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';

interface SippingTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SippingTimerModal: React.FC<SippingTimerModalProps> = ({ isOpen, onClose }) => {
  const TOTAL_SECONDS = 180; // 3 minutes
  const [secondsLeft, setSecondsLeft] = useState<number>(TOTAL_SECONDS);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let timer: any = null;
    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsLeft / 60);
  const remainingSecs = secondsLeft % 60;
  const progressPercent = ((TOTAL_SECONDS - secondsLeft) / TOTAL_SECONDS) * 100;

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(TOTAL_SECONDS);
  };

  // Guidance text based on progress
  let phaseText = '생식 한 모금을 입안에 머금고 5초간 천천히 오물거리세요.';
  if (secondsLeft > 120) {
    phaseText = '첫 모금: 침 속 소화효소(아밀라아제)가 생식 곡물 가루와 충분히 섞이도록 오물거립니다.';
  } else if (secondsLeft > 60) {
    phaseText = '두 번째 모금: 급하게 삼키지 마시고 고소한 원물의 풍미를 느끼며 천천히 삼킵니다.';
  } else if (secondsLeft > 0) {
    phaseText = '마지막 모금: 속이 편안해지는 과정을 느끼며 천천히 음용을 마무리를 합니다.';
  } else {
    phaseText = '🎉 3분 씹어마시기 완료! 15분 뒤 미지근한 물 1컵을 꼭 마셔주세요.';
  }

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-xl border border-stone-200 relative animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>3분 천천히 씹어마시기</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-stone-900">
            소화 효소 극대화 타이머
          </h3>
        </div>

        {/* Circular Visual Ring Timer */}
        <div className="relative w-44 h-44 mx-auto flex flex-col items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="42"
              className="text-stone-100 stroke-current"
              strokeWidth="8"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              className="text-emerald-600 stroke-current transition-all duration-1000 ease-linear"
              strokeWidth="8"
              strokeDasharray={264}
              strokeDashoffset={264 - (264 * progressPercent) / 100}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>

          {/* Center Digital Clock */}
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1">
            <span className="text-3xl font-mono font-bold text-stone-900">
              {String(minutes).padStart(2, '0')}:{String(remainingSecs).padStart(2, '0')}
            </span>
            <span className="text-xs text-stone-400 font-medium">
              {secondsLeft === 0 ? '완료!' : isRunning ? '마시는 중...' : '일시정지'}
            </span>
          </div>
        </div>

        {/* Dynamic Phase Guidance Box */}
        <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 text-center space-y-1">
          <div className="text-xs font-bold text-emerald-900">
            {secondsLeft === 0 ? '가이드 완료' : '현재 씹어마시기 가이드'}
          </div>
          <p className="text-xs text-emerald-800 leading-relaxed font-medium">
            {phaseText}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleReset}
            className="p-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl transition-colors"
            title="리셋"
          >
            <RotateCcw className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-colors flex items-center gap-2 shadow-md"
          >
            {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            <span>{isRunning ? '일시 정지' : secondsLeft === 0 ? '다시 시작' : '타이머 시작'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
