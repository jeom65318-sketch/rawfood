import React, { useState, useEffect } from 'react';
import { Calendar, Droplets, Check, Plus, Trash2, Sparkles, GlassWater } from 'lucide-react';

interface LogEntry {
  id: string;
  date: string;
  time: string;
  liquid: string;
  waterGlasses: number;
  chewedSlowly: boolean;
  notes: string;
}

export const DailyTracker: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [todayWater, setTodayWater] = useState<number>(3); // initial glasses of water today
  const [liquid, setLiquid] = useState('무당 검은콩 두유 200ml');
  const [chewedSlowly, setChewedSlowly] = useState(true);
  const [notes, setNotes] = useState('');

  // Load logs from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('daum_saengsik_logs');
    if (saved) {
      try {
        setLogs(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    } else {
      // Default sample entry
      const initialLogs: LogEntry[] = [
        {
          id: '1',
          date: new Date().toISOString().split('T')[0],
          time: '08:15',
          liquid: '무당 검은콩 두유 200ml',
          waterGlasses: 6,
          chewedSlowly: true,
          notes: '아침 공복 섭취, 속이 매우 편하고 점심까지 배고픔 없음.'
        }
      ];
      setLogs(initialLogs);
      localStorage.setItem('daum_saengsik_logs', JSON.stringify(initialLogs));
    }
  }, []);

  const saveLogs = (newLogs: LogEntry[]) => {
    setLogs(newLogs);
    localStorage.setItem('daum_saengsik_logs', JSON.stringify(newLogs));
  };

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date();
    const newEntry: LogEntry = {
      id: Date.now().toString(),
      date: now.toISOString().split('T')[0],
      time: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`,
      liquid,
      waterGlasses: todayWater,
      chewedSlowly,
      notes: notes.trim() || '완벽한 온도(미지근함)로 천천히 마심'
    };

    saveLogs([newEntry, ...logs]);
    setNotes('');
  };

  const handleDeleteLog = (id: string) => {
    saveLogs(logs.filter(l => l.id !== id));
  };

  return (
    <section className="py-10 bg-stone-50 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
            <Calendar className="w-3.5 h-3.5" />
            <span>DAILY SAENGSIK & HYDRATION TRACKER</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            오늘의 생식 & 수분 섭취 체크리스트
          </h2>
          <p className="text-sm text-stone-600">
            생식은 규칙적인 복용과 하루 1.5~2L의 충분한 수분 보충이 핵심입니다. 일일 기록을 남겨보세요.
          </p>
        </div>

        {/* Tracker Form & Today Hydration Widget */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Left: Hydration & New Log Form (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            
            {/* Today Hydration Water Widget */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                <span className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                  <Droplets className="w-4 h-4 text-sky-600" />
                  <span>오늘의 수분 섭취량</span>
                </span>
                <span className="text-xs font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                  {(todayWater * 200 / 1000).toFixed(1)} L / 2.0 L
                </span>
              </div>

              {/* Water Glass Buttons */}
              <div className="flex items-center justify-between gap-1">
                {Array.from({ length: 8 }).map((_, idx) => {
                  const isDrunk = idx < todayWater;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setTodayWater(idx + 1 === todayWater ? idx : idx + 1)}
                      className={`flex-1 py-2 rounded-lg border text-xs flex flex-col items-center gap-0.5 transition-all ${
                        isDrunk
                          ? 'bg-sky-500 border-sky-600 text-white font-bold shadow-sm'
                          : 'bg-stone-50 border-stone-200 text-stone-400 hover:bg-stone-100'
                      }`}
                      title={`${(idx + 1) * 200}ml`}
                    >
                      <GlassWater className="w-3.5 h-3.5" />
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-stone-500 text-center">
                컵 당 200ml 기준 (목표: 하루 8컵 이상)
              </p>
            </div>

            {/* Quick Add Intake Log */}
            <form onSubmit={handleAddLog} className="bg-white p-5 rounded-2xl border border-stone-200 space-y-4 shadow-sm">
              <h3 className="font-bold text-stone-900 text-sm border-b border-stone-100 pb-2">
                생식 섭취 기록하기
              </h3>

              <div className="space-y-1.5 text-xs">
                <label className="font-bold text-stone-700">사용한 음료</label>
                <select
                  value={liquid}
                  onChange={(e) => setLiquid(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-stone-800"
                >
                  <option value="무당 검은콩 두유 200ml">무당 검은콩 두유 200ml</option>
                  <option value="미네랄 워터 230ml + 꿀 1티스푼">미네랄 워터 230ml + 꿀 1티스푼</option>
                  <option value="무당 아몬드 밀크 200ml">무당 아몬드 밀크 200ml</option>
                  <option value="저지방 우유 220ml">저지방 우유 220ml</option>
                </select>
              </div>

              <div className="flex items-center justify-between bg-emerald-50/70 p-3 rounded-xl border border-emerald-200 text-xs">
                <span className="font-bold text-emerald-950">씹듯이 천천히 마셨나요?</span>
                <input
                  type="checkbox"
                  checked={chewedSlowly}
                  onChange={(e) => setChewedSlowly(e.target.checked)}
                  className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-1.5 text-xs">
                <label className="font-bold text-stone-700">소화 상태 & 메모</label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="예: 속이 개운하고 편안함, 포만감 좋음"
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-stone-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>오늘 섭취 완료 기록</span>
              </button>
            </form>

          </div>

          {/* Right: History Log List (7 cols) */}
          <div className="md:col-span-7 bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-bold text-stone-900 text-base">
                섭취 히스토리 ({logs.length}건)
              </h3>
              <span className="text-xs text-stone-400">최근 날짜순 기록</span>
            </div>

            {logs.length === 0 ? (
              <div className="py-12 text-center text-xs text-stone-400">
                아직 기록된 섭취 내역이 없습니다. 왼쪽에서 오늘 첫 기록을 추가해보세요!
              </div>
            ) : (
              <div className="space-y-3">
                {logs.map((log) => (
                  <div key={log.id} className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                          {log.date} {log.time}
                        </span>
                        <span className="font-semibold text-stone-900">{log.liquid}</span>
                      </div>
                      <button
                        onClick={() => handleDeleteLog(log.id)}
                        className="text-stone-400 hover:text-red-500 transition-colors"
                        title="삭제"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 text-stone-600 pt-1 border-t border-stone-200/60">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-sky-700 font-medium">
                          <Droplets className="w-3.5 h-3.5 text-sky-500" />
                          <span>수분 {log.waterGlasses}잔</span>
                        </span>
                        {log.chewedSlowly && (
                          <span className="text-emerald-800 font-medium">
                            ✓ 씹어마시기 완료
                          </span>
                        )}
                      </div>
                      <span className="text-stone-500 italic">
                        "{log.notes}"
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
