import React from 'react';
import Modal from './Modal';
import Button from './Button';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  description = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  type = 'primary', // 'primary' | 'danger'
  icon: CustomIcon
}) => {
  const Icon = CustomIcon || (type === 'danger' ? AlertCircle : CheckCircle2);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="space-y-4 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
            type === 'danger' ? 'bg-rose-100 text-rose-600' : 'bg-brand-100 text-brand-600'
          }`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-stone-600 leading-relaxed font-normal">
              {description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-100">
          <Button variant="ghost" size="md" onClick={onClose}>
            {cancelText}
          </Button>
          <Button
            variant={type === 'danger' ? 'danger' : 'primary'}
            size="md"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;
