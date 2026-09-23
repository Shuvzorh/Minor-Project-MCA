import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Mail, Lock, ArrowRight, Sparkles, Building2, Truck, HeartHandshake, Shield } from 'lucide-react';
import { useFoodBridge } from '../context/FoodBridgeContext';
import { Input } from '../components/common/FormComponents';
import Button from '../components/common/Button';
import Toast from '../components/common/Toast';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setRole, showToast } = useFoodBridge();

  const [email, setEmail] = useState('manager@abchotel.com');
  const [password, setPassword] = useState('••••••••••');
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/provider');
  };

  const handleQuickRoleLogin = (selectedRole, destination) => {
    setRole(selectedRole);
    navigate(destination);
  };

  return (
    <div className="min-h-screen bg-surface-cream flex flex-col justify-center items-center p-4 sm:p-6 relative">
      {/* Background ambient blurs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-brand-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Top back to home */}
      <div className="absolute top-6 left-6">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-brand-600 transition-colors">
          <div className="w-8 h-8 rounded-xl bg-brand-500 flex items-center justify-center text-white shadow-soft">
            <Leaf className="w-4 h-4" />
          </div>
          <span>FoodBridge</span>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-md bg-white rounded-3xl border border-stone-200/90 shadow-soft-lg p-6 sm:p-8 relative z-10"
      >
        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 mx-auto flex items-center justify-center border border-brand-100 shadow-soft-sm">
            <Leaf className="w-6 h-6 fill-brand-100 stroke-[2.2]" />
          </div>
          <h2 className="text-2xl font-black text-surface-dark tracking-tight">
            Welcome Back 👋
          </h2>
          <p className="text-xs text-stone-500">
            Sign in to manage surplus food rescues and deliveries.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            icon={Mail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@organization.com"
            required
          />

          <div className="space-y-1">
            <Input
              label="Password"
              type="password"
              icon={Lock}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 text-stone-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-stone-300"
              />
              <span>Remember me</span>
            </label>

            <a
              href="#forgot"
              onClick={(e) => { e.preventDefault(); alert('Password reset simulation link sent to your registered email.'); }}
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              Forgot password?
            </a>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full mt-2"
          >
            Sign In
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-stone-200" />
          </div>
          <span className="relative bg-white px-3 text-[11px] font-bold uppercase tracking-wider text-stone-400">
            OR
          </span>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleQuickRoleLogin('provider', '/provider')}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-xs font-bold text-stone-700 transition-colors shadow-soft-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>Google</span>
          </button>

          <button
            type="button"
            onClick={() => handleQuickRoleLogin('provider', '/provider')}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 hover:bg-stone-50 text-xs font-bold text-stone-700 transition-colors shadow-soft-sm"
          >
            <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Facebook</span>
          </button>
        </div>

        {/* Quick Demo Test Access */}
        <div className="mt-6 pt-5 border-t border-stone-100 bg-brand-50/40 -mx-6 -mb-6 p-6 rounded-b-3xl">
          <p className="text-[11px] font-bold text-brand-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            1-Click Demo Logins:
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              type="button"
              onClick={() => handleQuickRoleLogin('provider', '/provider')}
              className="p-2 bg-white hover:bg-brand-50 border border-brand-200 rounded-xl text-left font-semibold text-brand-900 transition-colors flex items-center gap-2 shadow-xs"
            >
              <Building2 className="w-4 h-4 text-brand-600 shrink-0" />
              <span className="truncate">Hotel Provider</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickRoleLogin('volunteer', '/volunteer')}
              className="p-2 bg-white hover:bg-brand-50 border border-brand-200 rounded-xl text-left font-semibold text-brand-900 transition-colors flex items-center gap-2 shadow-xs"
            >
              <Truck className="w-4 h-4 text-brand-600 shrink-0" />
              <span className="truncate">Volunteer</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickRoleLogin('ngo', '/ngo')}
              className="p-2 bg-white hover:bg-brand-50 border border-brand-200 rounded-xl text-left font-semibold text-brand-900 transition-colors flex items-center gap-2 shadow-xs"
            >
              <HeartHandshake className="w-4 h-4 text-brand-600 shrink-0" />
              <span className="truncate">NGO / Shelter</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickRoleLogin('admin', '/admin')}
              className="p-2 bg-white hover:bg-brand-50 border border-brand-200 rounded-xl text-left font-semibold text-brand-900 transition-colors flex items-center gap-2 shadow-xs"
            >
              <Shield className="w-4 h-4 text-brand-600 shrink-0" />
              <span className="truncate">City Admin</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Footer link */}
      <p className="mt-6 text-xs text-stone-500 relative z-10">
        Don't have an account?{' '}
        <Link to="/register" className="font-bold text-brand-600 hover:text-brand-700 underline">
          Sign up
        </Link>
      </p>

      <Toast />
    </div>
  );
};

export default LoginPage;
