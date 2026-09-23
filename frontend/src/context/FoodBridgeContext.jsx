import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialDonations, mockNgos, mockVolunteers, mockUsers, initialNotifications } from '../data/mockData';
import confetti from 'canvas-confetti';

const FoodBridgeContext = createContext(null);

export const FoodBridgeProvider = ({ children }) => {
  // Active role: 'provider' | 'volunteer' | 'ngo' | 'admin'
  const [role, setRole] = useState(() => {
    return localStorage.getItem('foodbridge_role') || 'provider';
  });

  const [donations, setDonations] = useState(() => {
    const saved = localStorage.getItem('foodbridge_donations');
    return saved ? JSON.parse(saved) : initialDonations;
  });

  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('foodbridge_users');
    return saved ? JSON.parse(saved) : mockUsers;
  });

  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem('foodbridge_notifications');
    return saved ? JSON.parse(saved) : initialNotifications;
  });

  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('foodbridge_role', role);
  }, [role]);

  useEffect(() => {
    localStorage.setItem('foodbridge_donations', JSON.stringify(donations));
  }, [donations]);

  useEffect(() => {
    localStorage.setItem('foodbridge_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('foodbridge_notifications', JSON.stringify(notifications));
  }, [notifications]);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  const currentUser = users[role] || users.provider;

  const updateCurrentUser = (updatedFields) => {
    setUsers(prev => ({
      ...prev,
      [role]: {
        ...prev[role],
        ...updatedFields
      }
    }));
    showToast('Profile settings updated successfully!', 'success');
  };

  const addNotification = (notif) => {
    const newNotif = {
      id: `notif-${Date.now()}`,
      time: 'Just now',
      unread: true,
      ...notif
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const markNotificationAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const addDonation = (newDonation) => {
    const randomNum = Math.floor(100 + Math.random() * 900);
    const id = `DON-${randomNum}`;
    const code = `FB${1000 + randomNum}`;
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const donationRecord = {
      id,
      code,
      foodType: newDonation.foodType || 'Surplus Meal Packs',
      description: newDonation.description || 'Nutritious surplus meals prepared with care.',
      quantity: Number(newDonation.quantity) || 50,
      unit: newDonation.unit || 'Meals',
      isVeg: newDonation.isVeg !== undefined ? newDonation.isVeg : true,
      category: newDonation.isVeg ? 'Vegetarian' : 'Non-Vegetarian',
      preparedAt: newDonation.preparedAt || 'Just now',
      pickupBefore: newDonation.pickupBefore || 'In 3 hours',
      providerName: currentUser.organizationName || currentUser.name || 'ABC Hotel',
      providerType: 'Food Provider',
      location: newDonation.location || currentUser.location || 'Park Street, Kolkata',
      coords: [22.5726 + (Math.random() - 0.5) * 0.04, 88.3639 + (Math.random() - 0.5) * 0.04],
      distance: '1.2 km',
      status: 'Pending',
      urgency: newDonation.urgency || 'Urgent',
      imageUrl: newDonation.imageUrl || 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=60',
      assignedVolunteer: null,
      destinationNgo: newDonation.destinationNgo || 'Calcutta Rescue Outreach',
      createdAt: timeStr,
      weightKg: Math.round((Number(newDonation.quantity) || 50) * 0.4),
      servings: Number(newDonation.quantity) || 50,
      contactPerson: `${currentUser.contactPerson || currentUser.name} (${currentUser.phone})`,
      timeline: [
        { stage: 'Donation Created', time: timeStr, completed: true, details: `Listed by ${currentUser.name}` },
        { stage: 'Volunteer Assigned', time: null, completed: false, details: 'Awaiting volunteer pickup' },
        { stage: 'Food Picked Up', time: null, completed: false, details: 'Temperature & seal verified' },
        { stage: 'Out for Delivery', time: null, completed: false, details: 'En route to shelter' },
        { stage: 'Delivered to NGO', time: null, completed: false, details: 'Distribution completed' }
      ]
    };

    setDonations(prev => [donationRecord, ...prev]);

    // Add notification
    addNotification({
      icon: '🍱',
      title: 'New food donation nearby',
      description: `${donationRecord.quantity} ${donationRecord.unit} available at ${donationRecord.providerName}.`,
      link: `/volunteer`
    });

    // Confetti celebration
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }

    showToast('Donation created successfully.', 'success');
    return donationRecord;
  };

  const acceptDonation = (donationId) => {
    const volunteerUser = users.volunteer;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setDonations(prev => prev.map(item => {
      if (item.id === donationId) {
        const updatedTimeline = item.timeline.map((step, idx) => {
          if (idx === 1) {
            return {
              ...step,
              completed: true,
              time: now,
              details: `Accepted by ${volunteerUser.name} (${volunteerUser.vehicle || 'Eco Vehicle'})`
            };
          }
          return step;
        });

        return {
          ...item,
          status: 'Volunteer Assigned',
          assignedVolunteer: {
            id: volunteerUser.id,
            name: volunteerUser.name,
            phone: volunteerUser.phone,
            vehicle: volunteerUser.vehicle,
            rating: 4.9,
            avatar: volunteerUser.avatar
          },
          timeline: updatedTimeline
        };
      }
      return item;
    }));

    addNotification({
      icon: '👤',
      title: 'Donation accepted',
      description: `${volunteerUser.name} accepted request #${donationId}.`,
      link: `/track/${donationId}`
    });

    showToast('Request accepted.', 'success');
  };

  const updateDonationStatus = (donationId, nextStageIndex) => {
    const stageNames = [
      'Donation Created',
      'Volunteer Assigned',
      'Food Picked Up',
      'Out for Delivery',
      'Delivered to NGO'
    ];
    const statusMap = {
      0: 'Pending',
      1: 'Volunteer Assigned',
      2: 'Food Picked Up',
      3: 'Out for Delivery',
      4: 'Delivered'
    };

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setDonations(prev => prev.map(item => {
      if (item.id === donationId) {
        const updatedTimeline = item.timeline.map((step, idx) => {
          if (idx <= nextStageIndex) {
            return {
              ...step,
              completed: true,
              time: step.time || now
            };
          }
          return { ...step, completed: false };
        });

        const newStatus = statusMap[nextStageIndex] || item.status;
        return {
          ...item,
          status: newStatus,
          timeline: updatedTimeline
        };
      }
      return item;
    }));

    if (nextStageIndex === 2) {
      showToast('Food pickup confirmed.', 'success');
    } else if (nextStageIndex === 4) {
      showToast('Donation delivered.', 'success');
      addNotification({
        icon: '✅',
        title: 'Donation delivered',
        description: `Food for #${donationId} was delivered to the shelter.`,
        link: `/track/${donationId}`
      });
    } else {
      showToast(`Status updated to "${stageNames[nextStageIndex]}".`, 'info');
    }
  };

  const claimDonationNgo = (donationId) => {
    const ngoName = currentUser.organizationName || 'Helping Hands NGO';
    setDonations(prev => prev.map(item => {
      if (item.id === donationId) {
        return {
          ...item,
          destinationNgo: ngoName,
          urgency: 'Urgent'
        };
      }
      return item;
    }));
    showToast(`Successfully requested pickup for ${ngoName}!`, 'success');
  };

  const switchRole = (newRole) => {
    setRole(newRole);
    showToast(`Switched view to ${newRole.toUpperCase()} mode.`, 'info');
  };

  return (
    <FoodBridgeContext.Provider
      value={{
        role,
        setRole: switchRole,
        currentUser,
        updateCurrentUser,
        donations,
        addDonation,
        acceptDonation,
        updateDonationStatus,
        claimDonationNgo,
        ngos: mockNgos,
        volunteers: mockVolunteers,
        notifications,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        toast,
        setToast
      }}
    >
      {children}
    </FoodBridgeContext.Provider>
  );
};

export const useFoodBridge = () => {
  const context = useContext(FoodBridgeContext);
  if (!context) {
    throw new Error('useFoodBridge must be used within a FoodBridgeProvider');
  }
  return context;
};
