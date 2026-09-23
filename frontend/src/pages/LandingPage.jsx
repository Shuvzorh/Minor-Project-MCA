import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  HeartHandshake,
  Truck,
  Building2,
  Clock,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Leaf
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Button from '../components/common/Button';
import BottomNav from '../components/common/BottomNav';
import DonationCard from '../components/common/DonationCard';
import { useFoodBridge } from '../context/FoodBridgeContext';
import Toast from '../components/common/Toast';

const LandingPage = () => {
  const navigate = useNavigate();
  const { donations, setRole } = useFoodBridge();

  const impactStats = [
    { value: '12,450+', label: 'Meals Saved', sub: 'Prevented from landfills' },
    { value: '320+', label: 'Donations', sub: 'From verified hospitality partners' },
    { value: '85+', label: 'Active Volunteers', sub: 'On-demand rapid couriers' },
    { value: '24+', label: 'Partner NGOs', sub: 'Verified shelters & food camps' },
  ];

  const howItWorksSteps = [
    {
      step: '01',
      title: 'Donate Food',
      desc: 'List your surplus food with important details. Hotels, banquet halls, and restaurants notify the platform in under 60 seconds.',
      icon: Building2,
      roleName: 'Step 01 — Food Providers'
    },
    {
      step: '02',
      title: 'Volunteer Connects',
      desc: 'A nearby volunteer picks it up. Couriers receive instant GPS alerts and collect food using insulated containers.',
      icon: Truck,
      roleName: 'Step 02 — Volunteers'
    },
    {
      step: '03',
      title: 'Delivered to NGO',
      desc: 'Food reaches people who need it. Certified shelters and food camps distribute warm meals with zero delay.',
      icon: HeartHandshake,
      roleName: 'Step 03 — NGOs & Camps'
    }
  ];

  return (
    <div className="min-h-screen bg-surface-cream text-surface-dark flex flex-col selection:bg-brand-100 pb-16 md:pb-0">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Soft green leaf background shapes */}
        <div className="absolute -top-24 right-0 w-96 h-96 bg-brand-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Small Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-800 text-xs font-bold tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>A SMALL STEP. A BIG IMPACT.</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-surface-dark tracking-tight leading-[1.12]">
                Good Food Deserves a <span className="text-brand-500 underline decoration-brand-200 underline-offset-8">Second Chance</span>.
              </h1>

              {/* Description & Tagline */}
              <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Connect surplus food from hotels, restaurants, weddings and events with nearby volunteers and NGOs — before good food goes to waste.
              </p>

              <div className="text-xs font-bold uppercase tracking-widest text-brand-700">
                Food Today, Better Tomorrow.
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link to="/donor/create-donation">
                  <Button
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                    onClick={() => setRole('provider')}
                    className="w-full sm:w-auto"
                  >
                    🌱 Donate Food
                  </Button>
                </Link>

                <Link to="/explore">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Find Nearby NGOs
                  </Button>
                </Link>
              </div>

              {/* Trust markers */}
              <div className="pt-6 border-t border-stone-200/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-stone-500 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-600" />
                  <span>100% Certified NGOs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-600" />
                  <span>Fast 45-Min Rescue Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-600" />
                  <span>Food Hygiene Compliant</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Right Visual Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&auto=format&fit=crop&q=80"
                    alt="Volunteers sharing fresh meals"
                    className="w-full h-96 lg:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Live Badge Card 1 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-stone-100 max-w-[240px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-surface-dark">Surplus En Route</p>
                      <p className="text-[11px] text-stone-500">150 meals to Shelter</p>
                    </div>
                  </div>
                  <div className="mt-2 text-[10px] text-brand-600 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping" />
                    <span>Live GPS Active</span>
                  </div>
                </motion.div>

                {/* Floating Live Badge Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-2.5"
                >
                  <span className="text-2xl font-black text-brand-600">0%</span>
                  <div className="text-left">
                    <p className="text-xs font-bold text-surface-dark">Food Waste</p>
                    <p className="text-[10px] text-stone-500">Zero Edible Waste Goal</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Counter Banner */}
      <section id="impact" className="bg-white border-y border-stone-200/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-stone-100">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="pt-4 lg:pt-0 first:pt-0"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-500 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-surface-dark mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-stone-400 mt-0.5">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step "How It Works" Section */}
      <section id="how-it-works" className="py-20 bg-surface-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              Three Simple Steps
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-surface-dark tracking-tight">
              How FoodBridge Works
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              A seamless bridge turning edible event surplus into warm dinners for shelters within the hour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {howItWorksSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-white rounded-3xl p-8 border border-stone-200 shadow-soft hover:shadow-soft-lg transition-all duration-200 flex flex-col justify-between relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black text-stone-200 group-hover:text-brand-300 transition-colors">
                        {item.step}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-all shadow-xs">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-brand-600 uppercase tracking-wider">
                      {item.roleName}
                    </span>
                    <h3 className="text-xl font-extrabold text-surface-dark mt-1 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center text-xs font-bold text-brand-600 gap-1 group-hover:translate-x-1 transition-transform">
                    <Link to="/how-it-works" className="flex items-center gap-1">
                      <span>Learn more</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Live Surplus Section */}
      <section className="py-16 bg-white border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                Live Community Feed
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-surface-dark tracking-tight mt-1">
                Recent Food Available For Rescue
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Real-time surplus listings ready for immediate volunteer pickup.
              </p>
            </div>
            <Link to="/explore">
              <Button variant="outline" size="sm" icon={ArrowRight} iconPosition="right">
                View All on Interactive Map
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donations.slice(0, 3).map((donation) => (
              <DonationCard
                key={donation.id}
                donation={donation}
                role="general"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Impact Quote */}
      <section className="py-20 bg-brand-50/50 border-t border-brand-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex p-3 rounded-full bg-brand-100 text-brand-600">
            <Leaf className="w-6 h-6 fill-current" />
          </div>
          <blockquote className="text-xl sm:text-2xl font-bold text-surface-dark leading-snug">
            "Before FoodBridge, our hotel used to discard up to 50 kg of untouched banquet food after weekend weddings. Now, within 40 minutes, local volunteers deliver it straight to children's shelters. It is the most gratifying feeling for our chefs."
          </blockquote>
          <div className="pt-2">
            <p className="text-sm font-extrabold text-brand-900">Executive Chef Laurent Dubois</p>
            <p className="text-xs text-stone-500">The Oberoi Grand Hotel &amp; Banquets</p>
          </div>
        </div>
      </section>

      {/* End Call to Action Banner matching spec */}
      <section className="py-16 bg-surface-dark text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Have extra food? Don't waste it.
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto">
            Whether you are a hotel manager, a student with a scooter, or a local shelter director, you can save meals today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/donor/create-donation">
              <Button variant="primary" size="lg">
                Donate Food
              </Button>
            </Link>
            <Link to="/explore">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Find Nearby NGOs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer with Tagline */}
      <footer className="bg-stone-900 text-stone-400 text-xs py-10 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-brand-500 flex items-center justify-center text-white">
              <Leaf className="w-3.5 h-3.5 fill-white/30" />
            </div>
            <span className="font-bold text-white text-sm">FoodBridge</span>
            <span className="text-stone-500 ml-2 font-medium">Food Today, Better Tomorrow.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
            <Link to="/explore" className="hover:text-white transition-colors">Explore Map</Link>
            <Link to="/login" className="hover:text-white transition-colors">Login</Link>
            <Link to="/register" className="hover:text-white transition-colors">Register</Link>
          </div>
        </div>
      </footer>

      <BottomNav />
      <Toast />
    </div>
  );
};

export default LandingPage;
