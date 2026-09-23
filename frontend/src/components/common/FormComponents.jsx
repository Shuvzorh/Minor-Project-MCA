import React from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

export const Input = ({
  label,
  error,
  icon: Icon,
  className = '',
  required,
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="block text-xs font-semibold text-stone-700">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          className={`w-full bg-white rounded-xl border ${
            error ? 'border-rose-300 ring-1 ring-rose-300' : 'border-stone-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20'
          } ${Icon ? 'pl-10' : 'px-4'} pr-4 py-2.5 text-sm text-surface-dark placeholder:text-stone-400 transition-all outline-none shadow-soft-sm ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-rose-500 font-medium">{error}</p>}
    </div>
  );
};

export const Textarea = ({
  label,
  error,
  className = '',
  rows = 3,
  required,
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="block text-xs font-semibold text-stone-700">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <textarea
        rows={rows}
        className={`w-full bg-white rounded-xl border ${
          error ? 'border-rose-300 ring-1 ring-rose-300' : 'border-stone-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20'
        } px-4 py-2.5 text-sm text-surface-dark placeholder:text-stone-400 transition-all outline-none shadow-soft-sm resize-none ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-rose-500 font-medium">{error}</p>}
    </div>
  );
};

export const Select = ({
  label,
  options = [],
  error,
  className = '',
  required,
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="block text-xs font-semibold text-stone-700">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <select
        className={`w-full bg-white rounded-xl border ${
          error ? 'border-rose-300 ring-1 ring-rose-300' : 'border-stone-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20'
        } px-4 py-2.5 text-sm text-surface-dark transition-all outline-none shadow-soft-sm cursor-pointer ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value ?? opt} value={opt.value ?? opt}>
            {opt.label ?? opt}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-rose-500 font-medium">{error}</p>}
    </div>
  );
};

export const FileUpload = ({ label, previewUrl, onSelectSample }) => {
  const sampleImages = [
    { label: 'Banquet Feast', url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=60' },
    { label: 'Biryani Platter', url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=60' },
    { label: 'Bakery & Bread', url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=60' },
    { label: 'Thali Meals', url: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&auto=format&fit=crop&q=60' },
  ];

  return (
    <div className="space-y-2">
      {label && <label className="block text-xs font-semibold text-stone-700">{label}</label>}
      <div className="border-2 border-dashed border-stone-200 hover:border-brand-400 bg-stone-50/50 hover:bg-brand-50/20 rounded-2xl p-4 transition-all text-center">
        {previewUrl ? (
          <div className="relative rounded-xl overflow-hidden h-36 w-full">
            <img src={previewUrl} alt="Selected food" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs font-semibold">
              Photo Attached
            </div>
          </div>
        ) : (
          <div className="py-4 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mb-2">
              <Upload className="w-5 h-5" />
            </div>
            <p className="text-xs font-medium text-stone-700">Click to upload or select sample photo below</p>
            <p className="text-[11px] text-stone-400 mt-0.5">PNG, JPG, WEBP up to 5MB</p>
          </div>
        )}

        {/* Quick Sample Selector */}
        <div className="mt-3 pt-3 border-t border-stone-200/80">
          <p className="text-[11px] font-semibold text-stone-500 mb-2">Quick Preset Photos:</p>
          <div className="grid grid-cols-4 gap-2">
            {sampleImages.map((img) => (
              <button
                key={img.label}
                type="button"
                onClick={() => onSelectSample && onSelectSample(img.url)}
                className={`relative rounded-lg overflow-hidden h-12 border-2 transition-all cursor-pointer ${
                  previewUrl === img.url ? 'border-brand-500 scale-105 shadow-sm' : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const EmptyState = ({ title, description, actionText, onAction, icon: Icon = ImageIcon }) => {
  return (
    <div className="text-center py-12 px-4 rounded-2xl bg-white border border-dashed border-stone-200 my-4">
      <div className="w-12 h-12 rounded-2xl bg-stone-100 text-stone-400 mx-auto flex items-center justify-center mb-3">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-base font-bold text-surface-dark">{title}</h4>
      <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">{description}</p>
      {actionText && (
        <button
          type="button"
          onClick={onAction}
          className="mt-4 px-4 py-2 bg-brand-50 text-brand-700 hover:bg-brand-100 font-semibold text-xs rounded-xl transition-all"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};
