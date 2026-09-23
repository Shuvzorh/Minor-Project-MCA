import React from 'react';
import { AlertCircle, CheckCircle2, Clock, Truck, PackageCheck, Leaf, Flame } from 'lucide-react';

const StatusBadge = ({ status, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 font-semibold gap-1',
    md: 'text-xs px-2.5 py-1 font-semibold gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 font-bold gap-2',
  };

  const getBadgeConfig = () => {
    switch (status?.toLowerCase()) {
      case 'urgent':
        return {
          bg: 'bg-rose-100 text-rose-800 border border-rose-200',
          icon: AlertCircle,
          label: 'URGENT',
          pulse: true
        };
      case 'normal':
        return {
          bg: 'bg-stone-100 text-stone-700 border border-stone-200',
          icon: Clock,
          label: 'Standard',
          pulse: false
        };
      case 'pending':
        return {
          bg: 'bg-amber-100 text-amber-800 border border-amber-200',
          icon: Clock,
          label: 'Available / Pending',
          pulse: true
        };
      case 'volunteer assigned':
      case 'assigned':
        return {
          bg: 'bg-blue-100 text-blue-800 border border-blue-200',
          icon: Truck,
          label: 'Volunteer Assigned',
          pulse: false
        };
      case 'food picked up':
      case 'picked up':
        return {
          bg: 'bg-indigo-100 text-indigo-800 border border-indigo-200',
          icon: PackageCheck,
          label: 'Food Picked Up',
          pulse: false
        };
      case 'out for delivery':
      case 'in transit':
        return {
          bg: 'bg-purple-100 text-purple-800 border border-purple-200',
          icon: Truck,
          label: 'Out for Delivery',
          pulse: true
        };
      case 'delivered':
      case 'completed':
        return {
          bg: 'bg-brand-100 text-brand-800 border border-brand-200',
          icon: CheckCircle2,
          label: 'Delivered',
          pulse: false
        };
      case 'veg':
      case 'vegetarian':
        return {
          bg: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
          icon: Leaf,
          label: 'Pure Veg',
          pulse: false
        };
      case 'non-veg':
      case 'non-vegetarian':
        return {
          bg: 'bg-orange-100 text-orange-800 border border-orange-300',
          icon: Flame,
          label: 'Non-Veg',
          pulse: false
        };
      default:
        return {
          bg: 'bg-stone-100 text-stone-700 border border-stone-200',
          icon: Clock,
          label: status || 'General',
          pulse: false
        };
    }
  };

  const { bg, icon: Icon, label, pulse } = getBadgeConfig();

  return (
    <span className={`inline-flex items-center rounded-full ${bg} ${sizeClasses[size]}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
        </span>
      )}
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{label}</span>
    </span>
  );
};

export default StatusBadge;
