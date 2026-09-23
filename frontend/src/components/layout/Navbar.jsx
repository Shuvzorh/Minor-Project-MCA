import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Leaf, Menu, X, Sparkles } from 'lucide-react';
import { useFoodBridge } from '../../context/FoodBridgeContext';
import Button from '../common/Button';
import NotificationDropdown from '../common/NotificationDropdown';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { role, setRole } = useFoodBridge();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Impact', path: '/#impact' },
    { label: 'Explore Map', path: '/explore' },
  ];

  const getDashboardPath = () => {
    switch (role) {
      case 'provider': return '/donor/dashboard';
      case 'volunteer': return '/volunteer/dashboard';
      case 'ngo': return '/ngo/dashboard';
      case 'admin': return '/admin/dashboard';
      default: return '/donor/dashboard';
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-surface-cream/90 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo & Tagline */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-brand-500 flex items-center justify-center text-white shadow-soft group-hover:scale-105 transition-transform">
              <Leaf className="w-5 h-5 fill-white/20 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-surface-dark group-hover:text-brand-600 transition-colors">
                Food<span className="text-brand-500">Bridge</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-500 -mt-1">
                Food Today, Better Tomorrow.
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-brand-600 ${
                  location.pathname === link.path ? 'text-brand-600 font-bold' : 'text-stone-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Role Switcher & Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Demo Role Selector */}
            <div className="flex items-center bg-white border border-stone-200 rounded-xl p-1 shadow-soft-sm text-xs font-semibold">
              <span className="px-2 text-stone-500 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                Demo:
              </span>
              {(['provider', 'volunteer', 'ngo', 'admin']).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    setRole(r);
                    if (r === 'provider') navigate('/donor/dashboard');
                    else if (r === 'volunteer') navigate('/volunteer/dashboard');
                    else if (r === 'ngo') navigate('/ngo/dashboard');
                    else if (r === 'admin') navigate('/admin/dashboard');
                  }}
                  className={`px-2.5 py-1 rounded-lg capitalize transition-all cursor-pointer ${
                    role === r
                      ? 'bg-brand-500 text-white font-bold shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            {/* Notification Dropdown */}
            <NotificationDropdown />

            {!isAuthPage && (
              <>
                <Link to={getDashboardPath()}>
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" size="sm">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <NotificationDropdown />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-semibold text-stone-700 hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-stone-100">
            <p className="text-xs font-bold text-stone-600 mb-2">Switch Demo Role:</p>
            <div className="grid grid-cols-2 gap-1.5">
              {(['provider', 'volunteer', 'ngo', 'admin']).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    setRole(r);
                    setMobileMenuOpen(false);
                    if (r === 'provider') navigate('/donor/dashboard');
                    else if (r === 'volunteer') navigate('/volunteer/dashboard');
                    else if (r === 'ngo') navigate('/ngo/dashboard');
                    else if (r === 'admin') navigate('/admin/dashboard');
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize text-center ${
                    role === r ? 'bg-brand-500 text-white' : 'bg-stone-100 text-stone-700'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 flex flex-col gap-2">
            <Link to={getDashboardPath()} onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="md" className="w-full">
                Go to Dashboard
              </Button>
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" size="md" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="primary" size="md" className="w-full">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
