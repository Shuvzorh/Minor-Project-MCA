import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Utensils, CheckCircle2, Scale, Users, Filter, Sparkles } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/common/StatCard';
import DonationCard from '../components/common/DonationCard';
import Button from '../components/common/Button';
import FilterPill from '../components/common/FilterPill';
import { useFoodBridge } from '../context/FoodBridgeContext';
import { EmptyState } from '../components/common/FormComponents';

const ProviderDashboard = () => {
  const { currentUser, donations } = useFoodBridge();
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'active' | 'completed'

  // Calculations for stats
  const totalDonationsCount = currentUser.stats?.totalDonations || donations.length;
  const completedCount = currentUser.stats?.completedDonations || donations.filter(d => d.status === 'Delivered').length;
  const foodSavedKg = currentUser.stats?.foodSavedKg || 850;
  const peopleServed = currentUser.stats?.peopleServed || 2100;

  // Filter donations
  const filteredDonations = donations.filter(d => {
    if (activeTab === 'active') return d.status !== 'Delivered';
    if (activeTab === 'completed') return d.status === 'Delivered';
    return true;
  });

  return (
    <DashboardLayout
      title={`Welcome, ${currentUser.name || 'ABC Hotel'} 👋`}
      subtitle="Manage your surplus banquet & kitchen donations in real-time"
      action={
        <Link to="/create-donation">
          <Button variant="primary" size="md" icon={PlusCircle}>
            Create Donation
          </Button>
        </Link>
      }
    >
      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <StatCard
          title="Total Donations"
          value={totalDonationsCount}
          subtitle="All-time rescue listings"
          icon={Utensils}
          color="green"
          trend="+14% this month"
          delay={0}
        />
        <StatCard
          title="Completed Rescues"
          value={completedCount}
          subtitle="Successfully delivered"
          icon={CheckCircle2}
          color="blue"
          trend="98.2% success"
          delay={0.05}
        />
        <StatCard
          title="Food Saved"
          value={`${foodSavedKg} kg`}
          subtitle="Landfill diversion"
          icon={Scale}
          color="amber"
          trend="+120 kg this week"
          delay={0.1}
        />
        <StatCard
          title="People Served"
          value={peopleServed.toLocaleString()}
          subtitle="Nourishing community"
          icon={Users}
          color="purple"
          trend="4.9 avg rating"
          delay={0.15}
        />
      </div>

      {/* Main Content Area: Recent Donations */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-stone-200/80">
          <div>
            <h2 className="text-xl font-bold text-surface-dark">
              Recent Food Donations
            </h2>
            <p className="text-xs text-stone-500">
              Live updates on volunteer pickups, transit, and NGO receipt
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            <FilterPill
              label="All Listings"
              active={activeTab === 'all'}
              count={donations.length}
              onClick={() => setActiveTab('all')}
            />
            <FilterPill
              label="Active & In-Transit"
              active={activeTab === 'active'}
              count={donations.filter(d => d.status !== 'Delivered').length}
              onClick={() => setActiveTab('active')}
            />
            <FilterPill
              label="Completed"
              active={activeTab === 'completed'}
              count={donations.filter(d => d.status === 'Delivered').length}
              onClick={() => setActiveTab('completed')}
            />
          </div>
        </div>

        {/* Donations Grid */}
        {filteredDonations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDonations.map((donation) => (
              <DonationCard
                key={donation.id}
                donation={donation}
                role="provider"
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No donations found in this filter"
            description="You don't have any items under this category right now. Click '+ Create Donation' to list your surplus."
            actionText="+ Create New Donation"
            onAction={() => window.location.href = '/create-donation'}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default ProviderDashboard;
