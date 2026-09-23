import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Truck, Package, HeartHandshake, CheckCircle2 } from 'lucide-react';

const icons = [
  Package,
  HeartHandshake,
  Clock,
  Truck,
  CheckCircle2
];

const Timeline = ({ stages = [], currentStageIndex = 0, onStageClick }) => {
  return (
    <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-stone-200">
      {stages.map((stage, idx) => {
        const isCompleted = stage.completed;
        const isCurrent = idx === currentStageIndex;
        const Icon = icons[idx] || Check;

        return (
          <motion.div
            key={stage.stage}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.08 }}
            className="relative flex items-start gap-4 group cursor-pointer"
            onClick={() => onStageClick && onStageClick(idx)}
          >
            {/* Step Node Icon / Circle */}
            <div className="absolute -left-6 sm:-left-8 flex items-center justify-center">
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30'
                    : isCurrent
                    ? 'bg-amber-500 text-white ring-4 ring-amber-100 shadow-md animate-pulse'
                    : 'bg-white border-2 border-stone-300 text-stone-400'
                }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  <Icon className="w-3.5 h-3.5" />
                )}
              </div>
            </div>

            {/* Stage Content */}
            <div className={`flex-1 p-4 rounded-2xl transition-all duration-200 border ${
              isCurrent
                ? 'bg-amber-50/50 border-amber-200/80 shadow-soft'
                : isCompleted
                ? 'bg-brand-50/30 border-brand-100/70'
                : 'bg-stone-50/60 border-stone-200/50 opacity-70'
            }`}>
              <div className="flex items-center justify-between gap-2">
                <h4 className={`text-sm sm:text-base font-bold ${
                  isCompleted ? 'text-brand-900' : isCurrent ? 'text-amber-900' : 'text-stone-700'
                }`}>
                  {stage.stage}
                </h4>
                {stage.time && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white border border-stone-200 text-stone-600">
                    {stage.time}
                  </span>
                )}
              </div>

              {stage.details && (
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {stage.details}
                </p>
              )}

              {isCurrent && (
                <div className="mt-2.5 flex items-center gap-1.5 text-xs text-amber-700 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                  <span>Currently in progress</span>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Timeline;
