import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Truck,
  AlertCircle,
  MapPin,
  Clock,
  CheckCircle2,
  Navigation,
  Award,
  Calendar,
  Sparkles
} from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/common/StatCard';
import DonationCard from '../components/common/DonationCard';
import FilterPill from '../components/common/FilterPill';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';
import { useFoodBridge } from '../context/FoodBridgeContext';
import { EmptyState } from '../components/common/FormComponents';
import confetti from 'canvas-confetti';

const VolunteerDashboard = () => {
  const navigate = useNavigate();
  const { currentUser, donations, acceptDonation } = useFoodBridge();

  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'urgent' | 'nearby' | 'veg' | 'nonveg'
  const [selectedDonationForAccept, setSelectedDonationForAccept] = useState(null);
  const [acceptModalOpen, setAcceptModalOpen] = useState(false);

  // Filter donations
  const filteredDonations = donations.filter((item) => {
    if (activeFilter === 'urgent') return item.urgency === 'Urgent';
    if (activeFilter === 'nearby') return parseFloat(item.distance || '10') <= 2.5;
    if (activeFilter === 'veg') return item.isVeg === true;
    if (activeFilter === 'nonveg') return item.isVeg === false;
    return true;
  });

  const handleOpenAcceptModal = (donationId) => {
    const donation = donations.find(d => d.id === donationId);
    if (donation) {
      setSelectedDonationForAccept(donation);
      setAcceptModalOpen(true);
    }
  };

  const handleConfirmAccept = () => {
    if (selectedDonationForAccept) {
      acceptDonation(selectedDonationForAccept.id);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // safe
      }
      setAcceptModalOpen(false);
      navigate(`/volunteer/tracking/${selectedDonationForAccept.id}`);
    }
  };

  return (
    <DashboardLayout
      title={`Welcome, ${currentUser.name} 🛵`}
      subtitle={`Verified Courier • ${currentUser.vehicle || 'Cargo Scooter'} • 4.9 ★ Rating`}
      action={
        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>On-Call &amp; Ready for Rescue</span>
        </div>
      }
    >
      {/* Volunteer Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <StatCard
          title="Deliveries Completed"
          value={currentUser.stats?.deliveriesCompleted || 48}
          subtitle="Total successful trips"
          icon={Truck}
          color="green"
          trend="+5 this week"
          delay={0}
        />
        <StatCard
          title="Hours Contributed"
          value={`${currentUser.stats?.hoursContributed || 114} hrs`}
          subtitle="Community service time"
          icon={Clock}
          color="blue"
          trend="Gold Tier Badge"
          delay={0.05}
        />
        <StatCard
          title="Meals Rescued"
          value={(currentUser.stats?.mealsRescued || 4120).toLocaleString()}
          subtitle="Directly fed individuals"
          icon={Award}
          color="amber"
          trend="Top 5% Volunteer"
          delay={0.1}
        />
        <StatCard
          title="Active Requests"
          value={donations.filter(d => d.status === 'Pending').length}
          subtitle="Awaiting pickup right now"
          icon={AlertCircle}
          color="purple"
          trend="Urgent need"
          delay={0.15}
        />
      </div>

      {/* Main Section: Nearby Food Requests */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-stone-200/80">
          <div>
            <h2 className="text-xl font-bold text-surface-dark flex items-center gap-2">
              <span>Nearby Food Requests</span>
              <span className="text-xs bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full font-bold">
                {donations.filter(d => d.urgency === 'Urgent').length} Urgent
              </span>
            </h2>
            <p className="text-xs text-stone-500">
              Hot cooked banquet food awaiting rapid transit to local shelters
            </p>
          </div>

          {/* Filters: All, Urgent, Nearby, Vegetarian, Non-Vegetarian */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <FilterPill
              label="All"
              active={activeFilter === 'all'}
              count={donations.length}
              onClick={() => setActiveFilter('all')}
            />
            <FilterPill
              label="Urgent"
              active={activeFilter === 'urgent'}
              count={donations.filter(d => d.urgency === 'Urgent').length}
              onClick={() => setActiveFilter('urgent')}
            />
            <FilterPill
              label="Nearby"
              active={activeFilter === 'nearby'}
              onClick={() => setActiveFilter('nearby')}
            />
            <FilterPill
              label="Vegetarian"
              active={activeFilter === 'veg'}
              onClick={() => setActiveFilter('veg')}
            />
            <FilterPill
              label="Non-Vegetarian"
              active={activeFilter === 'nonveg'}
              onClick={() => setActiveFilter('nonveg')}
            />
          </div>
        </div>

        {/* Donation Cards Grid */}
        {filteredDonations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDonations.map((donation) => (
              <DonationCard
                key={donation.id}
                donation={donation}
                role="volunteer"
                onAccept={handleOpenAcceptModal}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No matching food requests"
            description="There are currently no requests matching this filter within your radius. Try selecting 'All' to see all active listings."
            actionText="View All Requests"
            onAction={() => setActiveFilter('all')}
          />
        )}
      </div>

      {/* Accept Request Confirmation Modal (exact wording from spec) */}
      <Modal
        isOpen={acceptModalOpen}
        onClose={() => setAcceptModalOpen(false)}
        title="Accept this donation?"
      >
        {selectedDonationForAccept && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200">
              <p className="text-sm font-semibold text-brand-950 leading-relaxed">
                You're agreeing to pick up <span className="font-extrabold text-brand-800">{selectedDonationForAccept.quantity} {selectedDonationForAccept.unit}</span> from <span className="font-extrabold text-brand-800">{selectedDonationForAccept.providerName}</span> and deliver them to the assigned NGO ({selectedDonationForAccept.destinationNgo || 'Helping Hands NGO'}).
              </p>
            </div>

            <div className="space-y-2 text-xs text-stone-600 bg-stone-50 p-4 rounded-2xl border border-stone-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Pickup: {selectedDonationForAccept.location} ({selectedDonationForAccept.distance} away)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Pickup before {selectedDonationForAccept.pickupBefore}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-100">
              <Button
                variant="ghost"
                size="md"
                onClick={() => setAcceptModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="md"
                icon={CheckCircle2}
                onClick={handleConfirmAccept}
              >
                Accept Request
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </DashboardLayout>
  );
};

export default VolunteerDashboard;
