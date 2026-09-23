import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Store,
  Users,
  HeartHandshake,
  CheckCircle2,
  Leaf,
  Mail,
  Lock,
  User,
  Phone,
  MapPin,
  Car,
  ArrowRight,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { useFoodBridge } from '../context/FoodBridgeContext';
import { Input, Select } from '../components/common/FormComponents';
import Button from '../components/common/Button';
import Toast from '../components/common/Toast';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { setRole, updateCurrentUser } = useFoodBridge();

  const [step, setStep] = useState(1); // 1: Role Selection, 2: Basic Info, 3: Details & Confirmation
  const [selectedRole, setSelectedRole] = useState('provider'); // 'provider' | 'volunteer' | 'ngo'
  const [formData, setFormData] = useState({
    name: '',
    orgName: '',
    email: '',
    phone: '',
    password: '',
    location: '',
    vehicleType: 'Electric Cargo Scooter',
    capacity: '150 Meals'
  });

  const roleOptions = [
    {
      id: 'provider',
      title: 'Food Provider',
      subtitle: 'Hotel / Restaurant / Event Organizer',
      desc: 'Donate surplus edible food from weddings, banquets, and kitchens.',
      icon: Store,
    },
    {
      id: 'volunteer',
      title: 'Volunteer',
      subtitle: 'Help collect and deliver food',
      desc: 'Transport meals safely using bikes, scooters, cars, or vans.',
      icon: Users,
    },
    {
      id: 'ngo',
      title: 'NGO / Food Camp',
      subtitle: 'Receive and distribute food',
      desc: 'Distribute received hot food to shelters, children, and vulnerable families.',
      icon: HeartHandshake,
    },
  ];

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Complete Registration
      setRole(selectedRole);
      updateCurrentUser({
        name: formData.name || (selectedRole === 'provider' ? 'New Hotel Provider' : selectedRole === 'volunteer' ? 'New Volunteer' : 'New NGO Shelter'),
        organizationName: formData.orgName || formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location || 'Central District',
        vehicle: formData.vehicleType
      });

      if (selectedRole === 'provider') navigate('/donor/dashboard');
      else if (selectedRole === 'volunteer') navigate('/volunteer/dashboard');
      else navigate('/ngo/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-surface-cream flex flex-col justify-between">
      {/* Top Navbar Header */}
      <header className="px-6 py-4 border-b border-stone-200/80 bg-white/80 backdrop-blur-md flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-brand-500 flex items-center justify-center text-white shadow-soft">
            <Leaf className="w-4 h-4" />
          </div>
          <span className="font-black text-lg text-surface-dark">
            Food<span className="text-brand-500">Bridge</span>
          </span>
        </Link>
        <span className="text-xs text-stone-500 font-medium">
          Already registered?{' '}
          <Link to="/login" className="font-bold text-brand-600 hover:underline">
            Log in
          </Link>
        </span>
      </header>

      {/* Main Split-Screen Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Col: Step Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-soft">
          {/* Progress Indicators: 01 Basic Info, 02 Details, 03 Complete */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-stone-100">
            {[
              { num: '01', title: 'Select Role' },
              { num: '02', title: 'Basic Info' },
              { num: '03', title: 'Verification' }
            ].map((s, idx) => {
              const currentStepNum = idx + 1;
              const isCompleted = step > currentStepNum;
              const isCurrent = step === currentStepNum;

              return (
                <div key={s.num} className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                    isCompleted
                      ? 'bg-brand-500 text-white'
                      : isCurrent
                      ? 'bg-brand-100 text-brand-800 ring-2 ring-brand-500'
                      : 'bg-stone-100 text-stone-400'
                  }`}>
                    {isCompleted ? '✓' : s.num}
                  </span>
                  <span className={`text-xs font-semibold hidden sm:inline ${
                    isCurrent ? 'text-surface-dark font-bold' : 'text-stone-400'
                  }`}>
                    {s.title}
                  </span>
                </div>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Role Selection Cards */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-surface-dark tracking-tight">
                    Join FoodBridge
                  </h1>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">
                    Create an account as:
                  </p>
                </div>

                <div className="space-y-3">
                  {roleOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = selectedRole === opt.id;

                    return (
                      <div
                        key={opt.id}
                        onClick={() => setSelectedRole(opt.id)}
                        className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer select-none flex items-start justify-between gap-4 ${
                          isSelected
                            ? 'border-brand-500 bg-[#E8F5E9] shadow-soft'
                            : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50/50'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-brand-500 text-white shadow-sm' : 'bg-stone-100 text-stone-600'
                          }`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-surface-dark">{opt.title}</h3>
                            <p className="text-xs font-semibold text-brand-700">{opt.subtitle}</p>
                            <p className="text-xs text-stone-600 mt-0.5">{opt.desc}</p>
                          </div>
                        </div>

                        {isSelected && (
                          <div className="p-1 rounded-full bg-brand-500 text-white shrink-0 mt-1">
                            <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 border-t border-stone-100 flex justify-end">
                  <Button
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right"
                    onClick={() => setStep(2)}
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Basic Info Form */}
            {step === 2 && (
              <motion.form
                key="step2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onSubmit={handleNext}
                className="space-y-4"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-surface-dark">
                    Contact &amp; Organization Details
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Entering profile information for {selectedRole.toUpperCase()}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <Input
                    label="Full Name / Representative"
                    icon={User}
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />

                  <Input
                    label={selectedRole === 'provider' ? 'Hotel / Restaurant Name' : selectedRole === 'ngo' ? 'NGO / Shelter Name' : 'Volunteer Handle'}
                    icon={Store}
                    placeholder={selectedRole === 'provider' ? 'e.g. ABC Hotel' : selectedRole === 'ngo' ? 'e.g. Helping Hands NGO' : 'e.g. Rapid Courier'}
                    value={formData.orgName}
                    onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Email Address"
                    type="email"
                    icon={Mail}
                    placeholder="you@organization.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />

                  <Input
                    label="Phone Number"
                    type="tel"
                    icon={Phone}
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <Input
                  label="Physical Address / Primary Hub"
                  icon={MapPin}
                  placeholder="Street, District, City"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                />

                <Input
                  label="Password"
                  type="password"
                  icon={Lock}
                  placeholder="Set account password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <Button variant="ghost" size="md" icon={ArrowLeft} onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="submit" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                    Next
                  </Button>
                </div>
              </motion.form>
            )}

            {/* Step 3: Verification & Review */}
            {step === 3 && (
              <motion.form
                key="step3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onSubmit={handleNext}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-surface-dark">
                    Verification &amp; Final Review
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Almost there! Confirm your preferences to complete setup.
                  </p>
                </div>

                {selectedRole === 'volunteer' && (
                  <Select
                    label="Primary Transportation Mode"
                    options={[
                      { value: 'Cargo Scooter (Insulated Box)', label: 'Cargo Scooter (Insulated Box)' },
                      { value: 'Electric Van (Temp Controlled)', label: 'Electric Van (Temp Controlled)' },
                      { value: 'Car / SUV', label: 'Car / SUV' },
                      { value: 'Bicycle with Thermal Pannier', label: 'Bicycle with Thermal Pannier' }
                    ]}
                    value={formData.vehicleType}
                    onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                  />
                )}

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Selected Role:</span>
                    <span className="font-bold text-surface-dark capitalize">{selectedRole}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Organization:</span>
                    <span className="font-bold text-surface-dark">{formData.orgName || formData.name || 'FoodBridge Partner'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Contact:</span>
                    <span className="font-bold text-stone-700">{formData.email || 'partner@foodbridge.org'}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200 text-xs text-brand-900 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>
                    By completing registration, you agree to FoodBridge temperature safety, immediate dispatch, and zero food wastage standards.
                  </span>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <Button variant="ghost" size="md" icon={ArrowLeft} onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button type="submit" variant="primary" size="lg" icon={CheckCircle2}>
                    Complete &amp; Launch Portal
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Right Col: Split-Screen Visual with Quote */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 relative h-[560px]">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=80"
              alt="FoodBridge community nourishment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 text-white">
              <div className="w-10 h-10 rounded-xl bg-brand-500/80 backdrop-blur-sm flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <blockquote className="text-lg font-bold leading-snug">
                "Together we can reduce food waste and feed more people."
              </blockquote>
              <p className="text-xs text-white/80 mt-2 font-medium">
                Food Today, Better Tomorrow &bull; FoodBridge Community
              </p>
            </div>
          </div>
        </div>
      </div>

      <Toast />
    </div>
  );
};

export default RegisterPage;
