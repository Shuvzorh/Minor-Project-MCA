import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useFoodBridge } from '../../context/FoodBridgeContext';

const Toast = () => {
  const { toast, setToast } = useFoodBridge();

  const getToastIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />;
      default:
        return <Info className="w-5 h-5 text-blue-600 shrink-0" />;
    }
  };

  return (
    <AnimatePresence>
      {toast.show && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 max-w-md w-full px-4"
        >
          <div className="bg-white rounded-2xl p-4 shadow-xl border border-stone-200/90 flex items-center gap-3.5">
            <div className="p-2 bg-stone-50 rounded-xl">
              {getToastIcon()}
            </div>
            <div className="flex-1 text-xs sm:text-sm font-medium text-surface-dark">
              {toast.message}
            </div>
            <button
              type="button"
              onClick={() => setToast(prev => ({ ...prev, show: false }))}
              className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
