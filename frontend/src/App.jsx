import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FoodBridgeProvider } from './context/FoodBridgeContext';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ExplorePage from './pages/ExplorePage';

// Dashboards
import ProviderDashboard from './pages/ProviderDashboard';
import CreateDonationPage from './pages/CreateDonationPage';
import VolunteerDashboard from './pages/VolunteerDashboard';
import DonationTrackingPage from './pages/DonationTrackingPage';
import NgoDashboard from './pages/NgoDashboard';
import AdminDashboard from './pages/AdminDashboard';

// Common
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import NotificationsPage from './pages/NotificationsPage';

function App() {
  return (
    <FoodBridgeProvider>
      <Router>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/explore" element={<ExplorePage />} />

          {/* DONOR / FOOD PROVIDER ROUTES */}
          <Route path="/donor/dashboard" element={<ProviderDashboard />} />
          <Route path="/donor/create-donation" element={<CreateDonationPage />} />
          <Route path="/donor/donations" element={<ProviderDashboard />} />
          <Route path="/donor/donation/:id" element={<DonationTrackingPage />} />

          {/* Backward compatibility aliases */}
          <Route path="/provider" element={<ProviderDashboard />} />
          <Route path="/provider/create" element={<CreateDonationPage />} />
          <Route path="/create-donation" element={<CreateDonationPage />} />

          {/* VOLUNTEER ROUTES */}
          <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
          <Route path="/volunteer/requests" element={<VolunteerDashboard />} />
          <Route path="/volunteer/request/:id" element={<DonationTrackingPage />} />
          <Route path="/volunteer/tracking/:id" element={<DonationTrackingPage />} />
          <Route path="/volunteer" element={<VolunteerDashboard />} />
          <Route path="/track/:id" element={<DonationTrackingPage />} />
          <Route path="/track" element={<DonationTrackingPage />} />

          {/* NGO ROUTES */}
          <Route path="/ngo/dashboard" element={<NgoDashboard />} />
          <Route path="/ngo/donations" element={<NgoDashboard />} />
          <Route path="/ngo/donation/:id" element={<DonationTrackingPage />} />
          <Route path="/ngo" element={<NgoDashboard />} />

          {/* ADMIN ROUTES */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminDashboard />} />
          <Route path="/admin/donations" element={<AdminDashboard />} />
          <Route path="/admin/ngos" element={<AdminDashboard />} />
          <Route path="/admin/volunteers" element={<AdminDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />

          {/* COMMON ROUTES */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />

          {/* Catch all redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </FoodBridgeProvider>
  );
}

export default App;
