import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Utensils,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Leaf,
  Flame,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Input, Select, Textarea, FileUpload } from '../components/common/FormComponents';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';
import { useFoodBridge } from '../context/FoodBridgeContext';

const CreateDonationPage = () => {
  const navigate = useNavigate();
  const { addDonation, currentUser } = useFoodBridge();

  const [formData, setFormData] = useState({
    foodType: 'Buffet Dinner (Biryani & Paneer Curry)',
    description: 'Hot, freshly prepared banquet surplus. Kept under heating lamps in hygienic containers.',
    quantity: 120,
    unit: 'Meals',
    isVeg: true,
    preparedAt: 'Today, 7:30 PM',
    pickupBefore: 'Today, 11:00 PM',
    location: currentUser.location || '14 Grand Boulevard, Central District',
    urgency: 'Urgent',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=60'
  });

  const [submittedDonation, setSubmittedDonation] = useState(null);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = addDonation(formData);
    setSubmittedDonation(newRecord);
    setSuccessModalOpen(true);
  };

  return (
    <DashboardLayout
      title="Create Food Surplus Donation"
      subtitle="Rescue edible meals by notifying nearby verified volunteers"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl border border-stone-200/90 shadow-soft p-6 sm:p-10"
        >
          <div className="mb-8 pb-6 border-b border-stone-100 flex items-start justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">
                Fast Listing
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-surface-dark mt-2">
                Surplus Food Details
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Provide accurate details to help volunteers pick up and deliver safely.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Food Name / Type */}
            <Input
              label="Food Type & Name"
              placeholder="e.g. Wedding Feast (Rice, Dal, Mixed Vegetables, Rotis)"
              value={formData.foodType}
              onChange={(e) => setFormData({ ...formData, foodType: e.target.value })}
              required
            />

            {/* Description */}
            <Textarea
              label="Description & Packaging Notes"
              placeholder="Describe temperature, packaging (aluminum foil, containers), allergen notices..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={2}
            />

            {/* Quantity and Unit & Veg / Non-Veg */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Input
                label="Quantity Available"
                type="number"
                min="1"
                placeholder="e.g. 150"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                required
              />

              <Select
                label="Unit of Measurement"
                options={[
                  { value: 'Meals', label: 'Meals / Servings' },
                  { value: 'kg', label: 'Kilograms (kg)' },
                  { value: 'Boxes', label: 'Packed Boxes' },
                  { value: 'Catering Trays', label: 'Catering Trays' },
                ]}
                value={formData.unit}
                onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
              />

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-stone-700">
                  Dietary Classification
                </label>
                <div className="grid grid-cols-2 gap-2 h-10">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, isVeg: true })}
                    className={`flex items-center justify-center gap-1.5 rounded-xl text-xs font-bold transition-all border ${
                      formData.isVeg
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-800 shadow-xs'
                        : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Veg</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, isVeg: false })}
                    className={`flex items-center justify-center gap-1.5 rounded-xl text-xs font-bold transition-all border ${
                      !formData.isVeg
                        ? 'bg-orange-50 border-orange-400 text-orange-800 shadow-xs'
                        : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <Flame className="w-3.5 h-3.5 text-orange-600" />
                    <span>Non-Veg</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Preparation time & Expiry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Prepared At"
                icon={Clock}
                placeholder="e.g. Today, 7:00 PM"
                value={formData.preparedAt}
                onChange={(e) => setFormData({ ...formData, preparedAt: e.target.value })}
                required
              />

              <Input
                label="Pickup Available Until (Deadline)"
                icon={Clock}
                placeholder="e.g. Today, 10:30 PM"
                value={formData.pickupBefore}
                onChange={(e) => setFormData({ ...formData, pickupBefore: e.target.value })}
                required
              />
            </div>

            {/* Pickup Location */}
            <Input
              label="Pickup Location & Gate Details"
              icon={MapPin}
              placeholder="Full address, loading bay or kitchen entrance"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              required
            />

            {/* Photo upload / sample selector */}
            <FileUpload
              label="Food Photo (Helps NGOs and Volunteers assess volume & packaging)"
              previewUrl={formData.imageUrl}
              onSelectSample={(url) => setFormData({ ...formData, imageUrl: url })}
            />

            {/* Urgency indicator */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900">
                <span className="font-bold">Urgent Dispatch Rule:</span> Hot cooked food is automatically broadcasted to verified couriers within 5 km to preserve freshness and temperature control.
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-stone-100 flex items-center justify-end gap-3">
              <Link to="/provider">
                <Button variant="ghost" size="md">
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={CheckCircle2}
                className="px-8"
              >
                Submit Donation
              </Button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={successModalOpen}
        onClose={() => {
          setSuccessModalOpen(false);
          navigate('/provider');
        }}
        title="Donation Created Successfully! 🎉"
      >
        <div className="text-center space-y-4 py-2">
          <div className="w-16 h-16 rounded-3xl bg-brand-100 text-brand-600 mx-auto flex items-center justify-center shadow-soft">
            <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-surface-dark">
              {submittedDonation?.quantity} {submittedDonation?.unit} Listed!
            </h3>
            <p className="text-xs text-stone-600 mt-1 max-w-xs mx-auto">
              Your donation <span className="font-mono font-bold text-brand-700">#{submittedDonation?.id}</span> is now active. Nearby volunteers have been pinged.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-stone-500">Food Item:</span>
              <span className="font-bold text-stone-800">{submittedDonation?.foodType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Pickup Deadline:</span>
              <span className="font-bold text-stone-800">{submittedDonation?.pickupBefore}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">Destination:</span>
              <span className="font-bold text-brand-700">{submittedDonation?.destinationNgo}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <Button
              variant="outline"
              size="md"
              onClick={() => {
                setSuccessModalOpen(false);
                navigate('/provider');
              }}
            >
              My Dashboard
            </Button>

            <Button
              variant="primary"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => {
                setSuccessModalOpen(false);
                navigate(`/track/${submittedDonation?.id}`);
              }}
            >
              Track Status
            </Button>
          </div>
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default CreateDonationPage;
