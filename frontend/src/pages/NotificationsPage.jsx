import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Check, Trash2, ArrowRight } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { useFoodBridge } from '../context/FoodBridgeContext';
import Button from '../components/common/Button';

const NotificationsPage = () => {
  const { notifications, markNotificationAsRead, markAllNotificationsAsRead } = useFoodBridge();

  return (
    <DashboardLayout
      title="Notifications &amp; Activity Feed"
      subtitle="Stay updated on food rescue dispatches, courier assignments, and deliveries"
      action={
        <Button
          variant="outline"
          size="sm"
          icon={Check}
          onClick={markAllNotificationsAsRead}
        >
          Mark All As Read
        </Button>
      }
    >
      <div className="max-w-3xl mx-auto space-y-4">
        {notifications.length > 0 ? (
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-soft divide-y divide-stone-100">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                onClick={() => markNotificationAsRead(notif.id)}
                className={`py-4 px-3 rounded-2xl flex items-start justify-between gap-4 transition-colors cursor-pointer ${
                  notif.unread ? 'bg-brand-50/40 hover:bg-brand-50/70' : 'hover:bg-stone-50'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <span className="text-2xl mt-0.5">{notif.icon || '🔔'}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className={`text-sm font-bold ${notif.unread ? 'text-brand-950' : 'text-surface-dark'}`}>
                        {notif.title}
                      </h4>
                      {notif.unread && (
                        <span className="text-[10px] font-extrabold bg-brand-500 text-white px-2 py-0.2 rounded-full">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                      {notif.description}
                    </p>
                    <span className="text-[11px] text-stone-400 mt-1.5 block">
                      {notif.time}
                    </span>
                  </div>
                </div>

                {notif.link && (
                  <Link to={notif.link} className="shrink-0 pt-1">
                    <Button variant="ghost" size="sm" icon={ArrowRight} iconPosition="right">
                      View
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 shadow-soft">
            <Bell className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="font-bold text-surface-dark">No Notifications</h3>
            <p className="text-xs text-stone-500 mt-1">You are all caught up on all surplus alerts.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default NotificationsPage;
