import React, { useState, useRef, useEffect } from 'react';
import { Bell, Check, ExternalLink } from 'lucide-react';
import { useFoodBridge } from '../../context/FoodBridgeContext';
import { Link } from 'react-router-dom';

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { notifications, markNotificationAsRead, markAllNotificationsAsRead } = useFoodBridge();

  const unreadCount = notifications.filter(n => n.unread).length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-xl bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50 shadow-soft-sm relative transition-all"
        aria-label="Notifications"
      >
        <Bell className="w-4 h-4" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-white" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-stone-200 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="p-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/70">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-surface-dark">Notifications</h4>
              {unreadCount > 0 && (
                <span className="text-[10px] font-bold bg-brand-100 text-brand-800 px-2 py-0.5 rounded-full">
                  {unreadCount} new
                </span>
              )}
            </div>
            {unreadCount > 0 && (
              <button
                type="button"
                onClick={markAllNotificationsAsRead}
                className="text-xs text-brand-600 hover:text-brand-700 font-semibold"
              >
                Mark all read
              </button>
            )}
          </div>

          <div className="max-h-80 overflow-y-auto divide-y divide-stone-100">
            {notifications.length > 0 ? (
              notifications.map((n) => (
                <div
                  key={n.id}
                  onClick={() => {
                    markNotificationAsRead(n.id);
                    setIsOpen(false);
                  }}
                  className={`p-3.5 hover:bg-stone-50 transition-colors flex items-start gap-3 cursor-pointer ${
                    n.unread ? 'bg-brand-50/30' : ''
                  }`}
                >
                  <span className="text-xl shrink-0 mt-0.5">{n.icon || '🔔'}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <p className={`text-xs font-bold truncate ${n.unread ? 'text-brand-900' : 'text-stone-800'}`}>
                        {n.title}
                      </p>
                      <span className="text-[10px] text-stone-400 shrink-0">{n.time}</span>
                    </div>
                    <p className="text-xs text-stone-600 mt-0.5 leading-snug line-clamp-2">
                      {n.description}
                    </p>
                    {n.link && (
                      <Link
                        to={n.link}
                        className="text-[11px] font-semibold text-brand-600 hover:underline mt-1 inline-flex items-center gap-1"
                      >
                        <span>View details</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                  {n.unread && (
                    <span className="w-2 h-2 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                  )}
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-xs text-stone-500">
                No notifications right now.
              </div>
            )}
          </div>

          <div className="p-2.5 bg-stone-50/50 border-t border-stone-100 text-center">
            <Link
              to="/notifications"
              onClick={() => setIsOpen(false)}
              className="text-xs font-bold text-brand-600 hover:text-brand-700"
            >
              See all activity
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
