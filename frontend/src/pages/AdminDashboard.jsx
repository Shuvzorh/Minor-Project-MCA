import React, { useState } from 'react';
import {
  Shield,
  Layers,
  Users,
  Building2,
  HeartHandshake,
  TrendingUp,
  Scale,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowUpRight,
  Filter
} from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import StatCard from '../components/common/StatCard';
import StatusBadge from '../components/common/StatusBadge';
import Button from '../components/common/Button';
import { useFoodBridge } from '../context/FoodBridgeContext';
import { adminChartData } from '../data/mockData';

const AdminDashboard = () => {
  const { donations, ngos, volunteers } = useFoodBridge();
  const [timeRange, setTimeRange] = useState('year'); // 'month' | 'quarter' | 'year'

  // Stats calculation
  const totalDonations = 1248;
  const foodSavedKg = 3840;
  const volunteersCount = 86;
  const ngosCount = 32;

  // Status breakdown calculations
  const pendingCount = donations.filter(d => d.status === 'Pending').length;
  const assignedCount = donations.filter(d => d.status === 'Volunteer Assigned').length;
  const inTransitCount = donations.filter(d => d.status === 'Out for Delivery' || d.status === 'Food Picked Up').length;
  const deliveredCount = donations.filter(d => d.status === 'Delivered').length;
  const totalInSystem = donations.length;

  // Max value for bar chart normalization
  const maxMeals = Math.max(...adminChartData.map(d => d.meals));

  const recentActivities = [
    { id: 1, user: 'Alex Rivera (Volunteer)', action: 'accepted request for 220 meals from The Oberoi Grand', time: '12 mins ago', type: 'volunteer' },
    { id: 2, user: 'La Petite Boulangerie (Provider)', action: 'listed 60 boxes of artisan bakery goods', time: '28 mins ago', type: 'provider' },
    { id: 3, user: 'Helping Hands Shelter (NGO)', action: 'confirmed receipt of 150 hot meals', time: '45 mins ago', type: 'ngo' },
    { id: 4, user: 'Priya Sharma (Volunteer)', action: 'completed delivery to Hope Community Kitchen', time: '1 hr ago', type: 'volunteer' },
    { id: 5, user: 'Sri Krishna Trust (Provider)', action: 'completed 300 meals community feast listing', time: '2 hrs ago', type: 'provider' }
  ];

  return (
    <DashboardLayout
      title="City Operations Command Center"
      subtitle="Network monitoring, food safety compliance &amp; redistribution metrics"
      action={
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-500 font-semibold hidden sm:inline">System Status:</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            99.8% On-Time Dispatch
          </span>
        </div>
      }
    >
      {/* 4 Core Admin Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <StatCard
          title="Total Donations"
          value={totalDonations.toLocaleString()}
          subtitle="Platform lifetime rescues"
          icon={Layers}
          color="green"
          trend="+28% YoY"
          delay={0}
        />
        <StatCard
          title="Food Saved"
          value={`${foodSavedKg.toLocaleString()} kg`}
          subtitle="Equivalent to 19,200 meals"
          icon={Scale}
          color="amber"
          trend="Saved ~9.6T CO₂"
          delay={0.05}
        />
        <StatCard
          title="Active Volunteers"
          value={volunteersCount}
          subtitle="Verified couriers on-call"
          icon={Users}
          color="blue"
          trend="+12 this month"
          delay={0.1}
        />
        <StatCard
          title="Partner NGOs"
          value={ngosCount}
          subtitle="Verified distribution centers"
          icon={HeartHandshake}
          color="purple"
          trend="100% verified"
          delay={0.15}
        />
      </div>

      {/* Main Grid: Chart & Status Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        {/* Left 8 Cols: Monthly Surplus Volume Chart */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-stone-200 shadow-soft flex flex-col justify-between">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
            <div>
              <h3 className="font-bold text-base text-surface-dark">
                Monthly Meals Rescued Growth
              </h3>
              <p className="text-xs text-stone-500">
                Number of meals salvaged from hotels &amp; catered events
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-xl">
              <TrendingUp className="w-4 h-4" />
              <span>+38.5% Growth</span>
            </div>
          </div>

          {/* Lightweight SVG / CSS Responsive Bar Chart */}
          <div className="h-56 flex items-end justify-between gap-2 pt-4 px-2">
            {adminChartData.map((bar) => {
              const heightPercent = Math.round((bar.meals / maxMeals) * 100);
              return (
                <div key={bar.month} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                  <div className="text-[10px] font-bold text-stone-400 group-hover:text-brand-600 transition-colors opacity-0 group-hover:opacity-100">
                    {bar.meals}
                  </div>
                  <div className="w-full max-w-[36px] bg-stone-100 rounded-t-xl overflow-hidden flex flex-col justify-end h-full">
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full bg-brand-500 group-hover:bg-brand-600 rounded-t-xl transition-all duration-500 shadow-xs group-hover:shadow-green-glow"
                    />
                  </div>
                  <span className="text-xs font-semibold text-stone-600 group-hover:text-surface-dark">
                    {bar.month}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-md bg-brand-500 inline-block" />
              <span>Meals Rescued</span>
            </span>
            <span>Target: 10,000 meals/mo by Q4</span>
          </div>
        </div>

        {/* Right 4 Cols: Donation Status Breakdown */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-stone-200 shadow-soft flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-base text-surface-dark mb-1">
              Active Status Breakdown
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Distribution of current real-time consignments
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-emerald-700">Delivered &amp; Verified</span>
                  <span>{deliveredCount} ({Math.round((deliveredCount / totalInSystem) * 100)}%)</span>
                </div>
                <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${(deliveredCount / totalInSystem) * 100}%` }}
                    className="bg-brand-500 h-full rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-purple-700">In-Transit / Courier</span>
                  <span>{inTransitCount} ({Math.round((inTransitCount / totalInSystem) * 100)}%)</span>
                </div>
                <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${(inTransitCount / totalInSystem) * 100}%` }}
                    className="bg-purple-500 h-full rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-blue-700">Volunteer Assigned</span>
                  <span>{assignedCount} ({Math.round((assignedCount / totalInSystem) * 100)}%)</span>
                </div>
                <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${(assignedCount / totalInSystem) * 100}%` }}
                    className="bg-blue-500 h-full rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-amber-700">Pending Pickup</span>
                  <span>{pendingCount} ({Math.round((pendingCount / totalInSystem) * 100)}%)</span>
                </div>
                <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${(pendingCount / totalInSystem) * 100}%` }}
                    className="bg-amber-500 h-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100 p-3 bg-stone-50 rounded-2xl text-xs text-stone-600 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
            <span>Average turnaround time from list to delivery: <strong>38 mins</strong></span>
          </div>
        </div>
      </div>

      {/* Network Activity Stream & Partner Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recent Network Activity */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-stone-200 shadow-soft">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
            <h3 className="font-bold text-base text-surface-dark">
              Live Network Activity
            </h3>
            <span className="text-xs text-stone-400">Auto-refreshing</span>
          </div>

          <div className="divide-y divide-stone-100">
            {recentActivities.map((act) => (
              <div key={act.id} className="py-3 flex items-start gap-3 text-xs">
                <div className="w-2 h-2 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                <div className="flex-1">
                  <p className="font-medium text-surface-dark">
                    <span className="font-bold">{act.user}</span> {act.action}
                  </p>
                  <span className="text-[11px] text-stone-400">{act.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registered Partners Quick List */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-stone-200 shadow-soft">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
            <h3 className="font-bold text-base text-surface-dark">
              Key Verified Partners
            </h3>
            <span className="text-xs text-brand-600 font-semibold">32 Certified</span>
          </div>

          <div className="space-y-3">
            {ngos.slice(0, 3).map((ngo) => (
              <div key={ngo.id} className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 border border-stone-100 text-xs">
                <div className="flex items-center gap-3">
                  <img src={ngo.image} alt={ngo.name} className="w-10 h-10 rounded-xl object-cover" />
                  <div>
                    <h4 className="font-bold text-surface-dark">{ngo.name}</h4>
                    <p className="text-stone-500">{ngo.category} • {ngo.mealsReceivedTotal.toLocaleString()} meals fed</p>
                  </div>
                </div>
                <StatusBadge status="Delivered" size="sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
