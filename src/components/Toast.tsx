'use client';
import { createContext, useContext, useState } from 'react';

type Kind = 'success' | 'error' | 'info';
type Toast = { id: number; message: string; kind?: Kind };

const ToastCtx = createContext<{ push: (t: Omit<Toast, 'id'>) => void } | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const push = (t: Omit<Toast, 'id'>) => {
    const id = Date.now() + Math.random();
    setToasts(s => [...s, { ...t, id }]);
    setTimeout(() => setToasts(s => s.filter(x => x.id !== id)), 3500);
  };
  return (
    <ToastCtx.Provider value={{ push }}>
      {children}
      <div className="fixed bottom-4 right-4 z-[1000] space-y-2">
        {toasts.map(t => (
          <div
            key={t.id}
            className={[
              'rounded-lg px-4 py-3 shadow-xl border backdrop-blur-sm',
              t.kind === 'success' && 'bg-emerald-500/15 border-emerald-400/30 text-emerald-200',
              t.kind === 'error' && 'bg-rose-500/15 border-rose-400/30 text-rose-200',
              (!t.kind || t.kind === 'info') && 'bg-white/10 border-white/20 text-white',
            ].filter(Boolean).join(' ')}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
  return ctx.push;
}
