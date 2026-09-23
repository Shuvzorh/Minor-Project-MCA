import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeartHandshake,
  Utensils,
  Users,
  Building2,
  CheckCircle2,
  Calendar,
  AlertTriangle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/common/StatCard';
import DonationCard from '../components/common/DonationCard';
import FilterPill from '../components/common/FilterPill';
import Button from '../components/common/Button';
import { useFoodBridge } from '../context/FoodBridgeContext';
import { EmptyState } from '../components/common/FormComponents';

const NgoDashboard = () => {
  const { currentUser, donations, claimDonationNgo } = useFoodBridge();
  const [filterDiet, setFilterDiet] = useState('all'); // 'all' | 'veg' | 'urgent'
  const [isAvailableOpen, setIsAvailableOpen] = useState(true);

  const stats = currentUser.stats || {
    donationsReceived: 28,
    mealsDistributed: 2450,
    peopleServed: 1820
  };

  const availableFood = donations.filter((d) => {
    if (filterDiet === 'urgent') return d.urgency === 'Urgent';
    if (filterDiet === 'veg') return d.isVeg === true;
    return true;
  });

  return (
    <DashboardLayout
      title={`Welcome, ${currentUser.organizationName || 'Calcutta Rescue'} 👋`}
      subtitle="Here's your impact."
      action={
        <div className="flex items-center gap-3">
          {/* NGO availability indicator from spec */}
          <button
            type="button"
            onClick={() => setIsAvailableOpen(!isAvailableOpen)}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              isAvailableOpen
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                : 'bg-stone-100 text-stone-600 border border-stone-300'
            }`}
          >
            <span className={`w-2.5 h-2.5 rounded-full ${isAvailableOpen ? 'bg-emerald-500 animate-pulse' : 'bg-stone-400'}`} />
            <span>{isAvailableOpen ? 'OPEN FOR DONATIONS' : 'AT CAPACITY'}</span>
          </button>

          <Link to="/explore">
            <Button variant="outline" size="sm">
              Live Map
            </Button>
          </Link>
        </div>
      }
    >
      {/* 3 Prominent NGO Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
        <StatCard
          title="Donations"
          value={stats.donationsReceived || 28}
          subtitle="Direct shelter consignments"
          icon={HeartHandshake}
          color="green"
          trend="+4 this week"
          delay={0}
        />
        <StatCard
          title="Meals Received"
          value={(stats.mealsDistributed || 2450).toLocaleString()}
          subtitle="Warm meals distributed"
          icon={Utensils}
          color="blue"
          trend="Zero food waste"
          delay={0.05}
        />
        <StatCard
          title="People Served"
          value={(stats.peopleServed || 1820).toLocaleString()}
          subtitle="Vulnerable community members"
          icon={Users}
          color="purple"
          trend="100% impact"
          delay={0.1}
        />
      </div>

      {/* Available Nearby Food Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-stone-200/80">
          <div>
            <h2 className="text-xl font-bold text-surface-dark flex items-center gap-2">
              <span>Available Nearby Food</span>
              <span className="text-xs font-bold text-brand-700 bg-brand-50 border border-brand-200 px-2 py-0.5 rounded-full">
                {availableFood.length} available
              </span>
            </h2>
            <p className="text-xs text-stone-500">
              Claim fresh meals from hotels and banquets for your shelter's dinner service
            </p>
          </div>

          <div className="flex items-center gap-2">
            <FilterPill
              label="All Food"
              active={filterDiet === 'all'}
              count={donations.length}
              onClick={() => setFilterDiet('all')}
            />
            <FilterPill
              label="Urgent Need"
              active={filterDiet === 'urgent'}
              onClick={() => setFilterDiet('urgent')}
            />
            <FilterPill
              label="Vegetarian Only"
              active={filterDiet === 'veg'}
              onClick={() => setFilterDiet('veg')}
            />
          </div>
        </div>

        {/* Donation Cards Grid with NGO claim actions */}
        {availableFood.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableFood.map((donation) => (
              <DonationCard
                key={donation.id}
                donation={donation}
                role="ngo"
                onClaim={(id) => claimDonationNgo(id)}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No surplus matching filter"
            description="Check back shortly or explore the interactive city map to find food camps and partner hotels."
            actionText="View All Surplus Food"
            onAction={() => setFilterDiet('all')}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default NgoDashboard;
