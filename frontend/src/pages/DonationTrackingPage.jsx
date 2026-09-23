import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Navigation,
  Phone,
  Truck,
  Building2,
  HeartHandshake,
  CheckCircle2,
  Clock,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Share2,
  Play
} from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Timeline from '../components/common/Timeline';
import StatusBadge from '../components/common/StatusBadge';
import Button from '../components/common/Button';
import MapView from '../components/common/MapView';
import { useFoodBridge } from '../context/FoodBridgeContext';

const DonationTrackingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { donations, updateDonationStatus, currentUser } = useFoodBridge();

  // Find target donation or fallback to first
  const donation = donations.find(d => d.id === id || d.code === id) || donations[0];

  const stageNames = [
    'Donation Created',
    'Volunteer Assigned',
    'Food Picked Up',
    'Out for Delivery',
    'Delivered to NGO'
  ];

  const getActiveStageIndex = () => {
    switch (donation?.status) {
      case 'Pending': return 0;
      case 'Volunteer Assigned': return 1;
      case 'Food Picked Up': return 2;
      case 'Out for Delivery': return 3;
      case 'Delivered': return 4;
      default: return 0;
    }
  };

  const currentStageIndex = getActiveStageIndex();

  const handleAdvanceStage = () => {
    const nextIndex = (currentStageIndex + 1) % stageNames.length;
    updateDonationStatus(donation.id, nextIndex);
  };

  // Route map coordinates
  const pickupCoords = donation.coords || [12.9716, 77.5946];
  const dropCoords = [12.9654, 77.5921];

  const mapItems = [
    {
      id: `${donation.id}-pickup`,
      markerType: 'food',
      title: `Pickup: ${donation.providerName}`,
      subtitle: donation.foodType,
      coords: pickupCoords,
      location: donation.location,
      quantity: donation.quantity,
      unit: donation.unit,
      urgency: donation.urgency
    },
    {
      id: `${donation.id}-dest`,
      markerType: 'ngo',
      title: `Destination: ${donation.destinationNgo || 'Helping Hands NGO'}`,
      subtitle: 'Drop-off Shelter',
      coords: dropCoords,
      location: '45 Sunshine Colony, Central District'
    }
  ];

  return (
    <DashboardLayout
      title={`Donation #${donation?.code || donation?.id}`}
      subtitle={`${donation?.quantity} ${donation?.unit} • ${donation?.providerName}`}
      action={
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            icon={Play}
            onClick={handleAdvanceStage}
            title="Advance delivery stage to simulate workflow"
          >
            Advance Stage (Simulate)
          </Button>
          <Link to="/donor/dashboard">
            <Button variant="ghost" size="sm" icon={ArrowLeft}>
              Back
            </Button>
          </Link>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left 7 cols: Interactive Timeline & Route Map */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Header Card */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-soft">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-100 text-brand-700 flex items-center justify-center font-black">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-stone-400">#{donation.code || donation.id}</span>
                    <StatusBadge status={donation.status} size="sm" />
                  </div>
                  <h2 className="text-lg font-bold text-surface-dark mt-0.5">
                    {donation.foodType}
                  </h2>
                </div>
              </div>

              <div className="text-right sm:text-right">
                <span className="text-xs text-stone-500">Current Phase</span>
                <p className="text-sm font-extrabold text-brand-700">
                  Step {currentStageIndex + 1} of 5: {stageNames[currentStageIndex]}
                </p>
              </div>
            </div>

            {/* Timeline component */}
            <div className="pt-6">
              <Timeline
                stages={donation.timeline || []}
                currentStageIndex={currentStageIndex}
                onStageClick={(idx) => updateDonationStatus(donation.id, idx)}
              />
            </div>
          </div>

          {/* Route Overview Map */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-soft space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-brand-600" />
                <h3 className="font-bold text-surface-dark text-sm">
                  Live Dispatch Route &amp; Corridor
                </h3>
              </div>
              <Link to="/explore">
                <Button variant="outline" size="sm">
                  View Route
                </Button>
              </Link>
            </div>

            <MapView
              items={mapItems}
              center={pickupCoords}
              zoom={14}
              className="h-[260px] w-full rounded-2xl overflow-hidden border border-stone-200"
            />
          </div>
        </div>

        {/* Right 5 cols: Volunteer Card, Origin, Destination Details */}
        <div className="lg:col-span-5 space-y-6">
          {/* Assigned Volunteer Card */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-soft space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Assigned Courier
            </span>

            {donation.assignedVolunteer ? (
              <div className="flex items-center gap-4">
                <img
                  src={donation.assignedVolunteer.avatar}
                  alt={donation.assignedVolunteer.name}
                  className="w-14 h-14 rounded-2xl object-cover border border-stone-200 shadow-xs"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-surface-dark truncate">
                      {donation.assignedVolunteer.name}
                    </h4>
                    <span className="text-xs font-bold text-amber-600">★ {donation.assignedVolunteer.rating}</span>
                  </div>
                  <p className="text-xs text-brand-700 font-medium truncate">
                    {donation.assignedVolunteer.vehicle}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    {donation.assignedVolunteer.phone}
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-center space-y-2">
                <Clock className="w-6 h-6 text-amber-600 mx-auto animate-spin" />
                <p className="text-xs font-bold text-amber-900">Awaiting Volunteer Acceptance</p>
                <p className="text-[11px] text-amber-700">
                  Notification broadcasted to nearby verified couriers.
                </p>
              </div>
            )}

            {donation.assignedVolunteer && (
              <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  icon={Phone}
                  className="flex-1"
                  onClick={() => alert(`Calling courier at ${donation.assignedVolunteer.phone}...`)}
                >
                  Call Courier
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="flex-1"
                  onClick={() => alert('Message sent to courier.')}
                >
                  Message
                </Button>
              </div>
            )}
          </div>

          {/* Origin & Destination Information */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-soft space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Trip Details
            </span>

            {/* Origin */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold text-stone-400 uppercase">Pickup Location</p>
                <p className="text-sm font-bold text-surface-dark truncate">{donation.providerName}</p>
                <p className="text-xs text-stone-500">{donation.location}</p>
                <p className="text-xs text-stone-400 mt-0.5">{donation.contactPerson}</p>
              </div>
            </div>

            <div className="border-t border-stone-100" />

            {/* Destination */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-bold text-stone-400 uppercase">Destination</p>
                <p className="text-sm font-bold text-surface-dark truncate">
                  {donation.destinationNgo || 'Helping Hands NGO'}
                </p>
                <p className="text-xs text-stone-500">45 Sunshine Colony, Central District</p>
                <p className="text-xs text-stone-400 mt-0.5">David Miller (+1 555-4321)</p>
              </div>
            </div>

            <div className="border-t border-stone-100" />

            {/* Distance & Food Specs */}
            <div className="p-3.5 rounded-2xl bg-stone-50 text-xs space-y-1.5 text-stone-600">
              <div className="flex justify-between">
                <span>Distance:</span>
                <span className="font-bold text-surface-dark">{donation.distance || '2.8 km'}</span>
              </div>
              <div className="flex justify-between">
                <span>Food Quantity:</span>
                <span className="font-bold text-surface-dark">{donation.quantity} {donation.unit}</span>
              </div>
              <div className="flex justify-between">
                <span>Safety Seal Check:</span>
                <span className="font-bold text-emerald-700 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DonationTrackingPage;
