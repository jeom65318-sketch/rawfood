import React from 'react';
import { Leaf } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-10 border-t border-stone-800 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-800 pb-6">
          <div className="flex items-center gap-2 text-white font-serif font-bold text-lg">
            <div className="w-6 h-6 rounded bg-emerald-600 flex items-center justify-center text-white">
              <Leaf className="w-3.5 h-3.5" />
            </div>
            <span>다움생식가이드</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-stone-400">
            <span>40℃ 이하 온도 엄수</span>
            <span aria-hidden="true">·</span>
            <span>두유 200ml 황금 비율</span>
            <span aria-hidden="true">·</span>
            <span>씹듯이 천천히 마시기</span>
            <span aria-hidden="true">·</span>
            <span>하루 1.5L 수분 보충</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500">
          <p>© {new Date().getFullYear()} 다움생식가이드. 본 가이드는 영양학적 생식 복용 가이드라인을 기반으로 제작되었습니다.</p>
          <p>개인의 체질 및 건강 상태에 맞춰 유연하게 조절해 드시기 바랍니다.</p>
        </div>

      </div>
    </footer>
  );
};
