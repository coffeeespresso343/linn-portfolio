import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Info, X, XCircle } from "lucide-react";
import { createContext, useCallback, useContext, useState } from "react";

const ToastContext = createContext(null);

const ICONS = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => {
      const toast = prev.find((t) => t.id === id);

      if (toast?.timeout) {
        clearTimeout(toast.timeout);
      }

      return prev.filter((t) => t.id !== id);
    });
  }, []);

  const showToast = useCallback(
    (message, type = "info", duration = 5000) => {
      const id = Date.now() + Math.random();
      const timeout = window.setTimeout(() => {
        removeToast(id);
      }, duration);

      setToasts((prev) => [...prev, { id, message, type, duration, timeout }]);
      window.setTimeout(() => removeToast(id), duration);
    },
    [removeToast],
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="pointer-events-none fixed top-25 right-4 z-100 flex w-[calc(100%-2rem)] max-w-sm sm:top-27 sm:right-6 sm:w-full flex-col gap-3">
        <AnimatePresence>
          {toasts.map((toast) => {
            const Icon = ICONS[toast.type] || Info;
            const barColor =
              toast.type === "success"
                ? "bg-emerald-500"
                : toast.type === "error"
                  ? "bg-red-500"
                  : "bg-accent";
            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: -80, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  x: 60,
                  scale: 0.9,
                  transition: { duration: 0.25 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                  mass: 0.8,
                }}
                className={`pointer-events-auto relative overflow-hidden rounded-2xl border shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-saturate-150
                
                ${
                  toast.type === "success"
                    ? "border-emerald-500/20"
                    : toast.type === "error"
                      ? "border-red-400/20"
                      : "border-accent/20"
                }`}
              >
                <div className="flex items-start gap-3 p-4 pr-2">
                  <Icon
                    size={20}
                    className={
                      toast.type === "success"
                        ? "mt-0.5 shrink-0 text-emerald-400"
                        : toast.type === "error"
                          ? "mt-0.5 shrink-0 text-red-400"
                          : "mt-0.5 shrink-0 text-accent"
                    }
                  />
                  <p
                    className={`font-mono text-[13px] leading-relaxed ${
                      toast.type === "success"
                        ? "text-emerald-400-400"
                        : toast.type === "error"
                          ? "text-red-400"
                          : "text-accent"
                    }`}
                  >
                    {toast.message}
                  </p>
                  <button
                    onClick={() => removeToast(toast.id)}
                    className="ml-auto shrink-0 rounded-full p-1.5 text-white/60 transition-all duration-200 hover:text-white/40 "
                    aria-label="Dismiss notification"
                  >
                    <X size={15} strokeWidth={2} />
                  </button>
                </div>
                <motion.div
                  className={`absolute inset-x-0 bottom-0 h-1 origin-left ${barColor}`}
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: 0 }}
                  transition={{
                    duration: toast.duration / 1000,
                    ease: "linear",
                  }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");

  return ctx;
}
