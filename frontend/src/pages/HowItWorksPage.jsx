import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Building2,
  Truck,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Sparkles,
  Award,
  Clock
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Button from '../components/common/Button';
import BottomNav from '../components/common/BottomNav';

const HowItWorksPage = () => {
  const steps = [
    {
      step: '01',
      title: 'Donate Food',
      subtitle: 'List your surplus food with important details.',
      desc: 'Hotels, banquet halls, restaurants, and catering teams enter food quantity, dietary category, preparation time, and photo in under 60 seconds.',
      icon: Building2,
      highlights: ['Veg / Non-Veg options', 'Safe packaging check', 'Set pickup deadline']
    },
    {
      step: '02',
      title: 'Volunteer Connects',
      subtitle: 'A nearby volunteer picks it up.',
      desc: 'Verified couriers within a 5 km radius receive real-time push alerts. They claim the mission, pick up using insulated containers, and begin live route navigation.',
      icon: Truck,
      highlights: ['GPS-guided dispatch', 'Thermal insulation', 'Direct phone contact']
    },
    {
      step: '03',
      title: 'Delivered to NGO',
      subtitle: 'Food reaches people who need it.',
      desc: 'Certified shelters, food camps, and children homes receive the warm meals, confirm digital handover, and distribute immediately to vulnerable communities.',
      icon: HeartHandshake,
      highlights: ['Digital receipt confirmation', 'Zero landfill waste', 'Direct community nourishment']
    }
  ];

  return (
    <div className="min-h-screen bg-surface-cream flex flex-col pb-16 md:pb-0">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          <span>Surplus Rescue Workflow</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-surface-dark tracking-tight">
          How FoodBridge Works
        </h1>
        <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
          From banquet table to community dinner table in under 45 minutes. Learn how our connected network turns surplus into sustenance.
        </p>
      </section>

      {/* 3 Step Deep Dive */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-12">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          const isReversed = idx % 2 === 1;

          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-soft`}
            >
              <div className={`lg:col-span-7 space-y-4 ${isReversed ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-brand-500 font-mono">
                    {item.step}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Milestone {idx + 1}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-surface-dark">
                  {item.title}
                </h2>
                <p className="text-sm font-semibold text-brand-700">
                  "{item.subtitle}"
                </p>
                <p className="text-sm text-stone-600 leading-relaxed font-normal">
                  {item.desc}
                </p>

                <div className="pt-3 flex flex-wrap gap-2">
                  {item.highlights.map((hl) => (
                    <span
                      key={hl}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 bg-stone-50 border border-stone-200 rounded-xl text-stone-700"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                      {hl}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`lg:col-span-5 flex justify-center ${isReversed ? 'lg:order-1' : ''}`}>
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-brand-50/80 border-2 border-brand-100 flex flex-col items-center justify-center p-6 text-center shadow-inner group hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 rounded-2xl bg-brand-500 text-white flex items-center justify-center shadow-soft mb-3">
                    <Icon className="w-10 h-10 stroke-[2.2]" />
                  </div>
                  <span className="text-xs font-bold text-brand-900">{item.title}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Impact Section */}
      <section className="bg-white py-16 border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-brand-600 uppercase tracking-widest">
              Verified Transparency
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-surface-dark">
              Safe, Tracked, and Certified at Every Stop
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              FoodBridge follows strict food hygiene criteria in compliance with local safety regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 text-left space-y-2">
              <ShieldCheck className="w-6 h-6 text-brand-600" />
              <h4 className="font-bold text-sm text-surface-dark">Hygiene Inspection</h4>
              <p className="text-xs text-stone-600">
                Volunteers inspect thermal packaging and safety seals before accepting transit.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 text-left space-y-2">
              <Clock className="w-6 h-6 text-brand-600" />
              <h4 className="font-bold text-sm text-surface-dark">45-Min Express Window</h4>
              <p className="text-xs text-stone-600">
                Hot cooked meals are picked up and delivered within safe temperature holding times.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 text-left space-y-2">
              <Award className="w-6 h-6 text-brand-600" />
              <h4 className="font-bold text-sm text-surface-dark">End-to-End Handshake</h4>
              <p className="text-xs text-stone-600">
                Recipient shelters digitally verify meal receipt, ensuring zero leakage or diversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Call To Action */}
      <section className="bg-brand-50 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-5">
          <h3 className="text-2xl sm:text-3xl font-black text-brand-950">
            Have extra food? Don't waste it.
          </h3>
          <p className="text-xs sm:text-sm text-brand-800">
            Join hundreds of hotels, event caterers, and bakeries feeding local families daily.
          </p>
          <div className="pt-2">
            <Link to="/donor/create-donation">
              <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                Donate Food
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default HowItWorksPage;
