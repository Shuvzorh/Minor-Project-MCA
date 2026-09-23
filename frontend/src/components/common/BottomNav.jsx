import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MapPin, PlusCircle, Bell, User } from 'lucide-react';
import { useFoodBridge } from '../../context/FoodBridgeContext';

const BottomNav = () => {
  const location = useLocation();
  const { role, notifications } = useFoodBridge();
  const unreadCount = notifications.filter(n => n.unread).length;

  const getHomePath = () => {
    switch (role) {
      case 'provider': return '/donor/dashboard';
      case 'volunteer': return '/volunteer/dashboard';
      case 'ngo': return '/ngo/dashboard';
      case 'admin': return '/admin/dashboard';
      default: return '/';
    }
  };

  const navItems = [
    { label: 'Home', path: getHomePath(), icon: Home },
    { label: 'Explore', path: '/explore', icon: MapPin },
    { label: 'Donate', path: '/donor/create-donation', icon: PlusCircle, isPrimary: true },
    { label: 'Alerts', path: '/notifications', icon: Bell, badge: unreadCount },
    { label: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/90 py-1.5 px-4 flex items-center justify-around md:hidden shadow-lg">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path || (item.path.startsWith('/donor') && location.pathname.startsWith('/donor'));

        if (item.isPrimary) {
          return (
            <Link
              key={item.label}
              to={item.path}
              className="flex flex-col items-center -mt-5"
            >
              <div className="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/30 active:scale-95 transition-transform">
                <Icon className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="text-[10px] font-bold text-brand-700 mt-1">{item.label}</span>
            </Link>
          );
        }

        return (
          <Link
            key={item.label}
            to={item.path}
            className={`flex flex-col items-center py-1 px-3 relative transition-colors ${
              isActive ? 'text-brand-600 font-bold' : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            <div className="relative">
              <Icon className="w-5 h-5" />
              {item.badge > 0 && (
                <span className="absolute -top-1 -right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white" />
              )}
            </div>
            <span className="text-[10px] mt-0.5">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
