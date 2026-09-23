import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Shield,
  Bell,
  CheckCircle2,
  Edit3,
  Camera,
  Save,
  Truck,
  Building2,
  HeartHandshake
} from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Input } from '../components/common/FormComponents';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { useFoodBridge } from '../context/FoodBridgeContext';

const ProfilePage = () => {
  const { role, currentUser, updateCurrentUser } = useFoodBridge();
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: currentUser.name || '',
    organizationName: currentUser.organizationName || '',
    email: currentUser.email || '',
    phone: currentUser.phone || '',
    location: currentUser.location || '',
    vehicle: currentUser.vehicle || '',
    notificationsSms: true,
    notificationsEmail: true,
    soundAlerts: true
  });

  const handleSave = (e) => {
    e.preventDefault();
    updateCurrentUser(formData);
    setIsEditing(false);
  };

  const getRoleIcon = () => {
    switch (role) {
      case 'provider': return Building2;
      case 'volunteer': return Truck;
      case 'ngo': return HeartHandshake;
      default: return Shield;
    }
  };

  const RoleIcon = getRoleIcon();

  return (
    <DashboardLayout
      title="Account &amp; Organization Profile"
      subtitle="Manage your FoodBridge identity, dispatch preferences, and contact details"
      action={
        <Button
          variant={isEditing ? 'ghost' : 'primary'}
          size="sm"
          icon={isEditing ? null : Edit3}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancel Edit' : 'Edit Profile'}
        </Button>
      }
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft relative overflow-hidden">
          {/* Subtle green top banner */}
          <div className="h-24 -mt-8 -mx-8 bg-gradient-to-r from-brand-600 to-brand-500 relative" />

          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-12 relative z-10">
            <div className="relative">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover border-4 border-white shadow-lg bg-stone-100"
              />
              <div className="absolute -bottom-1 -right-1 p-2 rounded-xl bg-brand-500 text-white shadow-sm">
                <RoleIcon className="w-4 h-4" />
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <h2 className="text-2xl font-black text-surface-dark">{currentUser.name}</h2>
                <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-800 border border-brand-200 self-center sm:self-auto capitalize">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                  {role} Certified
                </span>
              </div>
              <p className="text-xs text-stone-500 font-medium">
                {currentUser.organizationName || 'Verified Community Member'} &bull; FoodBridge ID #{currentUser.id}
              </p>
            </div>
          </div>

          {/* Details Overview */}
          <div className="mt-8 pt-6 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-2xl bg-stone-50/80 border border-stone-100">
              <span className="text-stone-400 block mb-1 flex items-center gap-1 font-semibold">
                <Mail className="w-3.5 h-3.5" /> Email
              </span>
              <span className="font-bold text-surface-dark text-sm truncate block">{currentUser.email}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50/80 border border-stone-100">
              <span className="text-stone-400 block mb-1 flex items-center gap-1 font-semibold">
                <Phone className="w-3.5 h-3.5" /> Phone
              </span>
              <span className="font-bold text-surface-dark text-sm truncate block">{currentUser.phone}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-stone-50/80 border border-stone-100">
              <span className="text-stone-400 block mb-1 flex items-center gap-1 font-semibold">
                <MapPin className="w-3.5 h-3.5" /> Base Location
              </span>
              <span className="font-bold text-surface-dark text-sm truncate block">{currentUser.location}</span>
            </div>
          </div>
        </div>

        {/* Edit Form or Settings Card */}
        {isEditing ? (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft">
            <h3 className="text-lg font-bold text-surface-dark mb-4">
              Edit Account Information
            </h3>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Display Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  label="Organization / Subtitle"
                  value={formData.organizationName}
                  onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Contact Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Input
                  label="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <Input
                label="Physical Address / Base"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />

              {role === 'volunteer' && (
                <Input
                  label="Vehicle Model & Capacity"
                  value={formData.vehicle}
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                />
              )}

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-stone-100">
                <Button variant="ghost" size="md" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="md" icon={Save}>
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        ) : (
          /* Preferences & Settings */
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-soft space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-stone-100">
              <Bell className="w-5 h-5 text-brand-600" />
              <h3 className="text-base font-bold text-surface-dark">
                Notification &amp; Alert Preferences
              </h3>
            </div>

            <div className="space-y-4">
              <label className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-100 cursor-pointer">
                <div>
                  <p className="text-xs font-bold text-surface-dark">Urgent Food Rescue Alerts</p>
                  <p className="text-[11px] text-stone-500">Receive instant push pings when food is expiring within 3 hours</p>
                </div>
                <input
                  type="checkbox"
                  checked={formData.notificationsSms}
                  onChange={(e) => setFormData({ ...formData, notificationsSms: e.target.checked })}
                  className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
                />
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-2xl bg-stone-50 border border-stone-100 cursor-pointer">
                <div>
                  <p className="text-xs font-bold text-surface-dark">Daily Impact Digest</p>
                  <p className="text-[11px] text-stone-500">Summary email of meals saved and community thank-you notes</p>
                </div>
                <input
                  type="checkbox"
                  checked={formData.notificationsEmail}
                  onChange={(e) => setFormData({ ...formData, notificationsEmail: e.target.checked })}
                  className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500"
                />
              </label>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
