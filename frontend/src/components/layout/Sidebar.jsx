import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  PlusCircle,
  MapPin,
  HeartHandshake,
  Truck,
  Shield,
  User,
  Settings,
  LogOut,
  Leaf,
  Layers,
  ChevronRight,
  Bell
} from 'lucide-react';
import { useFoodBridge } from '../../context/FoodBridgeContext';

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { role, currentUser, setRole } = useFoodBridge();

  const getNavLinks = () => {
    switch (role) {
      case 'provider':
        return [
          { label: 'Dashboard', icon: LayoutDashboard, path: '/donor/dashboard' },
          { label: 'Create Donation', icon: PlusCircle, path: '/donor/create-donation', highlight: true },
          { label: 'My Donations', icon: Layers, path: '/donor/donations' },
          { label: 'Explore Map', icon: MapPin, path: '/explore' },
          { label: 'Notifications', icon: Bell, path: '/notifications' },
          { label: 'Profile', icon: User, path: '/profile' },
          { label: 'Settings', icon: Settings, path: '/settings' },
        ];
      case 'volunteer':
        return [
          { label: 'Dashboard', icon: LayoutDashboard, path: '/volunteer/dashboard' },
          { label: 'Food Requests', icon: Truck, path: '/volunteer/requests' },
          { label: 'Live Tracking', icon: Layers, path: '/volunteer/tracking/DON-101' },
          { label: 'Explore Map', icon: MapPin, path: '/explore' },
          { label: 'Notifications', icon: Bell, path: '/notifications' },
          { label: 'Profile', icon: User, path: '/profile' },
          { label: 'Settings', icon: Settings, path: '/settings' },
        ];
      case 'ngo':
        return [
          { label: 'Dashboard', icon: LayoutDashboard, path: '/ngo/dashboard' },
          { label: 'Available Food', icon: HeartHandshake, path: '/ngo/donations' },
          { label: 'Explore Network', icon: MapPin, path: '/explore' },
          { label: 'Notifications', icon: Bell, path: '/notifications' },
          { label: 'Profile', icon: User, path: '/profile' },
          { label: 'Settings', icon: Settings, path: '/settings' },
        ];
      case 'admin':
        return [
          { label: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
          { label: 'Users', icon: User, path: '/admin/users' },
          { label: 'Donations', icon: Layers, path: '/admin/donations' },
          { label: 'NGOs', icon: HeartHandshake, path: '/admin/ngos' },
          { label: 'Volunteers', icon: Truck, path: '/admin/volunteers' },
          { label: 'Explore Map', icon: MapPin, path: '/explore' },
          { label: 'Profile', icon: User, path: '/profile' },
          { label: 'Settings', icon: Settings, path: '/settings' },
        ];
      default:
        return [
          { label: 'Dashboard', icon: LayoutDashboard, path: '/donor/dashboard' },
          { label: 'Explore Map', icon: MapPin, path: '/explore' },
          { label: 'Profile', icon: User, path: '/profile' },
        ];
    }
  };

  const links = getNavLinks();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-xs"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-white border-r border-stone-200/90 flex flex-col justify-between transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top Header & Brand */}
        <div>
          <div className="h-18 px-6 border-b border-stone-100 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center text-white shadow-soft">
                <Leaf className="w-5 h-5 fill-white/20" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-surface-dark">
                  Food<span className="text-brand-500">Bridge</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700">
                  {role === 'provider' ? 'Donor' : role} Portal
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5 overflow-y-auto max-h-[calc(100vh-250px)]">
            {links.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path ||
                (item.path.includes('/donor') && location.pathname.startsWith('/provider')) ||
                (item.path.includes('/volunteer') && location.pathname.startsWith('/volunteer'));

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    item.highlight && !isActive
                      ? 'bg-brand-50 text-brand-700 hover:bg-brand-100'
                      : isActive
                      ? 'bg-brand-500 text-white shadow-sm shadow-brand-500/30'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-surface-dark'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : item.highlight ? 'text-brand-600' : 'text-stone-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.highlight && !isActive && (
                    <span className="text-[10px] bg-brand-200 text-brand-800 px-1.5 py-0.5 rounded-md font-bold">
                      NEW
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Card & Role Switcher in Sidebar Footer */}
        <div className="p-4 border-t border-stone-100 space-y-3 bg-stone-50/50">
          <Link
            to="/profile"
            onClick={onClose}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-colors border border-transparent hover:border-stone-200"
          >
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-10 h-10 rounded-full object-cover border border-stone-200 shadow-sm"
            />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-surface-dark truncate">{currentUser.name}</p>
              <p className="text-[11px] text-stone-500 truncate capitalize">{role} Account</p>
            </div>
            <ChevronRight className="w-4 h-4 text-stone-400" />
          </Link>

          {/* Quick role switcher */}
          <div>
            <label className="block text-[10px] uppercase font-bold tracking-wider text-stone-500 mb-1">
              Switch Role Preview
            </label>
            <div className="grid grid-cols-2 gap-1 text-[11px]">
              {[
                { id: 'provider', name: 'Donor' },
                { id: 'volunteer', name: 'Volunteer' },
                { id: 'ngo', name: 'NGO' },
                { id: 'admin', name: 'Admin' }
              ].map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => {
                    setRole(r.id);
                    if (r.id === 'provider') navigate('/donor/dashboard');
                    else if (r.id === 'volunteer') navigate('/volunteer/dashboard');
                    else if (r.id === 'ngo') navigate('/ngo/dashboard');
                    else if (r.id === 'admin') navigate('/admin/dashboard');
                  }}
                  className={`py-1 px-2 rounded-lg text-center font-semibold transition-colors cursor-pointer ${
                    role === r.id
                      ? 'bg-brand-500 text-white'
                      : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 text-xs font-semibold text-stone-500 hover:text-rose-600 pt-1"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
