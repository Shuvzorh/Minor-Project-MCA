import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  color = 'green',
  delay = 0
}) => {
  const colorMap = {
    green: {
      bg: 'bg-brand-50',
      iconBg: 'bg-brand-100 text-brand-700',
      border: 'border-brand-200/60',
    },
    blue: {
      bg: 'bg-blue-50/60',
      iconBg: 'bg-blue-100 text-blue-700',
      border: 'border-blue-200/60',
    },
    amber: {
      bg: 'bg-amber-50/60',
      iconBg: 'bg-amber-100 text-amber-700',
      border: 'border-amber-200/60',
    },
    purple: {
      bg: 'bg-purple-50/60',
      iconBg: 'bg-purple-100 text-purple-700',
      border: 'border-purple-200/60',
    }
  };

  const scheme = colorMap[color] || colorMap.green;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-soft transition-all duration-200 flex flex-col justify-between"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs sm:text-sm font-medium text-stone-500 uppercase tracking-wider">{title}</p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-surface-dark tracking-tight">{value}</h3>
        </div>
        {Icon && (
          <div className={`p-3 rounded-xl ${scheme.iconBg} shadow-sm`}>
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
        <span>{subtitle}</span>
        {trend && (
          <span className="inline-flex items-center gap-1 font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md">
            <TrendingUp className="w-3 h-3" />
            {trend}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default StatCard;
