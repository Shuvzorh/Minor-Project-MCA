import React, { useState } from 'react';
import { Shield, Bell, Lock, Globe, Moon, Smartphone, Check } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Button from '../components/common/Button';
import { useFoodBridge } from '../context/FoodBridgeContext';

const SettingsPage = () => {
  const { showToast } = useFoodBridge();
  const [settings, setSettings] = useState({
    urgentSms: true,
    emailDigest: true,
    locationTracking: true,
    autoAcceptNearby: false,
    darkMode: false,
  });

  const handleSave = () => {
    showToast('Settings saved successfully.', 'success');
  };

  return (
    <DashboardLayout
      title="Application Settings"
      subtitle="Configure notifications, dispatch thresholds, and privacy preferences"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Notification Preferences */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft space-y-4">
          <div className="flex items-center gap-2.5 pb-4 border-b border-stone-100">
            <Bell className="w-5 h-5 text-brand-600" />
            <h3 className="font-bold text-base text-surface-dark">
              Notifications &amp; Real-Time Alerts
            </h3>
          </div>

          <div className="space-y-3 text-xs">
            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-100 cursor-pointer">
              <div>
                <p className="font-bold text-surface-dark">Urgent SMS Alerts</p>
                <p className="text-stone-500">Send high-priority SMS when food is within 2 hours of expiring</p>
              </div>
              <input
                type="checkbox"
                checked={settings.urgentSms}
                onChange={(e) => setSettings({ ...settings, urgentSms: e.target.checked })}
                className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-100 cursor-pointer">
              <div>
                <p className="font-bold text-surface-dark">Daily Impact Digest</p>
                <p className="text-stone-500">Receive summary email of meals rescued and certificates</p>
              </div>
              <input
                type="checkbox"
                checked={settings.emailDigest}
                onChange={(e) => setSettings({ ...settings, emailDigest: e.target.checked })}
                className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
              />
            </label>
          </div>
        </div>

        {/* Location & GPS */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft space-y-4">
          <div className="flex items-center gap-2.5 pb-4 border-b border-stone-100">
            <Globe className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-base text-surface-dark">
              Location &amp; Radius
            </h3>
          </div>

          <div className="space-y-3 text-xs">
            <label className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-100 cursor-pointer">
              <div>
                <p className="font-bold text-surface-dark">Share Live GPS During Active Delivery</p>
                <p className="text-stone-500">Enables NGOs and donors to see the courier moving on the map</p>
              </div>
              <input
                type="checkbox"
                checked={settings.locationTracking}
                onChange={(e) => setSettings({ ...settings, locationTracking: e.target.checked })}
                className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
              />
            </label>
          </div>
        </div>

        {/* Save button */}
        <div className="flex justify-end pt-2">
          <Button variant="primary" size="lg" icon={Check} onClick={handleSave}>
            Save Preferences
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
