import React, { useState } from 'react';
import { Menu, Sparkles } from 'lucide-react';
import Sidebar from './Sidebar';
import NotificationDropdown from '../common/NotificationDropdown';
import BottomNav from '../common/BottomNav';
import { useFoodBridge } from '../../context/FoodBridgeContext';
import Toast from '../common/Toast';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children, title, subtitle, action }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { role, currentUser } = useFoodBridge();

  return (
    <div className="min-h-screen bg-surface-cream flex flex-col pb-16 md:pb-0">
      <div className="flex-1 flex">
        {/* Sidebar Navigation */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content Area */}
        <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
          {/* Top Header */}
          <header className="sticky top-0 z-30 bg-surface-cream/90 backdrop-blur-md border-b border-stone-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                aria-label="Open sidebar"
              >
                <Menu className="w-6 h-6" />
              </button>

              <div>
                <h1 className="text-lg sm:text-xl font-black text-surface-dark tracking-tight">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-xs text-stone-500 font-medium hidden sm:block">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {action && <div>{action}</div>}

              {/* Interactive Notification Dropdown */}
              <NotificationDropdown />

              {/* Profile pill */}
              <Link
                to="/profile"
                className="flex items-center gap-2 p-1 pl-2 bg-white border border-stone-200 rounded-xl shadow-soft-sm hover:border-brand-400 transition-colors"
              >
                <div className="text-right hidden sm:block">
                  <span className="block text-xs font-bold text-surface-dark truncate max-w-[120px]">
                    {currentUser.name}
                  </span>
                  <span className="block text-[10px] text-brand-700 capitalize font-medium">
                    {role}
                  </span>
                </div>
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-8 h-8 rounded-lg object-cover"
                />
              </Link>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
            {children}
          </main>
        </div>
      </div>

      <BottomNav />
      <Toast />
    </div>
  );
};

export default DashboardLayout;
