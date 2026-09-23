import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  MapPin,
  Utensils,
  HeartHandshake,
  Truck,
  Tent,
  ArrowRight,
  Filter,
  CheckCircle2,
  Navigation,
  Compass,
  Building2
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import MapView from '../components/common/MapView';
import FilterPill from '../components/common/FilterPill';
import SearchBar from '../components/common/SearchBar';
import StatusBadge from '../components/common/StatusBadge';
import Button from '../components/common/Button';
import BottomNav from '../components/common/BottomNav';
import { useFoodBridge } from '../context/FoodBridgeContext';
import { Link } from 'react-router-dom';

const ExplorePage = () => {
  const { donations, ngos, volunteers } = useFoodBridge();
  const [selectedFilter, setSelectedFilter] = useState('all'); // 'all' | 'food' | 'ngo' | 'camp' | 'volunteer'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [userLocationSimulated, setUserLocationSimulated] = useState(false);

  // Unify all map items
  const allMapItems = useMemo(() => {
    const foodItems = donations.map((d) => ({
      id: d.id,
      markerType: 'food',
      title: d.foodType,
      subtitle: `${d.quantity} ${d.unit} • ${d.providerName}`,
      coords: d.coords,
      location: d.location,
      distance: d.distance,
      urgency: d.urgency,
      status: d.status,
      quantity: d.quantity,
      unit: d.unit,
      imageUrl: d.imageUrl,
      raw: d
    }));

    const ngoItems = ngos.map((n) => ({
      id: n.id,
      markerType: n.category.includes('Camp') ? 'camp' : 'ngo',
      title: n.name,
      subtitle: n.category,
      coords: n.coords,
      location: n.address,
      distance: n.name.includes('Helping') ? '1.2 km away' : n.name.includes('Hope') ? '2.4 km away' : n.name.includes('Meals') ? '3.1 km away' : '4.0 km away',
      urgency: 'Normal',
      status: 'Open',
      imageUrl: n.image,
      verified: n.verified,
      category: n.category,
      raw: n
    }));

    const volunteerItems = volunteers.map((v) => ({
      id: v.id,
      markerType: 'volunteer',
      title: v.name,
      subtitle: `${v.vehicle} • ★ ${v.rating}`,
      coords: v.coords,
      location: v.location,
      distance: '1.5 km away',
      urgency: 'Normal',
      status: v.status,
      imageUrl: v.avatar,
      raw: v
    }));

    return [...foodItems, ...ngoItems, ...volunteerItems];
  }, [donations, ngos, volunteers]);

  // Filter items
  const filteredItems = useMemo(() => {
    return allMapItems.filter((item) => {
      if (selectedFilter === 'food' && item.markerType !== 'food') return false;
      if (selectedFilter === 'ngo' && item.markerType !== 'ngo') return false;
      if (selectedFilter === 'camp' && item.markerType !== 'camp') return false;
      if (selectedFilter === 'volunteer' && item.markerType !== 'volunteer') return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = item.title?.toLowerCase().includes(query);
        const matchSubtitle = item.subtitle?.toLowerCase().includes(query);
        const matchLocation = item.location?.toLowerCase().includes(query);
        if (!matchTitle && !matchSubtitle && !matchLocation) return false;
      }

      return true;
    });
  }, [allMapItems, selectedFilter, searchQuery]);

  const handleUseMyLocation = () => {
    setUserLocationSimulated(true);
    setSelectedItem({
      id: 'my-loc',
      title: 'Current Location (Kolkata)',
      coords: [22.5726, 88.3639],
      subtitle: 'Esplanade / Central Hub (Radius 5 km)'
    });
  };

  return (
    <div className="min-h-screen bg-surface-cream flex flex-col pb-16 md:pb-0">
      <Navbar />

      {/* Main Explore Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col">
        {/* Top Control Bar: Search & Filter Pills & Use My Location */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-soft mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search location, NGO, or food..."
              className="w-full sm:flex-1"
            />

            <Button
              variant={userLocationSimulated ? 'secondary' : 'outline'}
              size="md"
              icon={Compass}
              onClick={handleUseMyLocation}
              className="shrink-0 w-full sm:w-auto text-xs"
            >
              {userLocationSimulated ? 'Location Active' : 'Use My Location'}
            </Button>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <FilterPill
              label="All"
              active={selectedFilter === 'all'}
              count={allMapItems.length}
              onClick={() => setSelectedFilter('all')}
            />
            <FilterPill
              label="NGOs"
              icon={HeartHandshake}
              active={selectedFilter === 'ngo'}
              count={allMapItems.filter(i => i.markerType === 'ngo').length}
              onClick={() => setSelectedFilter('ngo')}
            />
            <FilterPill
              label="Food Available"
              icon={Utensils}
              active={selectedFilter === 'food'}
              count={allMapItems.filter(i => i.markerType === 'food').length}
              onClick={() => setSelectedFilter('food')}
            />
            <FilterPill
              label="Camps"
              icon={Tent}
              active={selectedFilter === 'camp'}
              count={allMapItems.filter(i => i.markerType === 'camp').length}
              onClick={() => setSelectedFilter('camp')}
            />
            <FilterPill
              label="Volunteers"
              icon={Truck}
              active={selectedFilter === 'volunteer'}
              count={allMapItems.filter(i => i.markerType === 'volunteer').length}
              onClick={() => setSelectedFilter('volunteer')}
            />
          </div>
        </div>

        {/* Desktop Split View: Left List + Right Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-[620px]">
          {/* Left: Scrollable Organization & Food Item List */}
          <div className="lg:col-span-5 flex flex-col space-y-3 h-[620px] overflow-y-auto pr-1">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                {filteredItems.length} Nearby Organizations &amp; Surplus
              </span>
              <span className="text-xs text-stone-400">Click to locate on map</span>
            </div>

            {filteredItems.map((item) => {
              const isSelected = selectedItem?.id === item.id;

              return (
                <motion.div
                  key={`${item.markerType}-${item.id}`}
                  onClick={() => setSelectedItem(item)}
                  whileHover={{ x: 2 }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer bg-white ${
                    isSelected
                      ? 'border-brand-500 ring-2 ring-brand-500/20 shadow-soft'
                      : 'border-stone-200 hover:border-stone-300 shadow-soft-sm'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-16 h-16 rounded-xl object-cover border border-stone-100 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
                          item.markerType === 'ngo'
                            ? 'bg-emerald-50 text-emerald-800'
                            : item.markerType === 'food'
                            ? 'bg-orange-50 text-orange-800'
                            : item.markerType === 'camp'
                            ? 'bg-purple-50 text-purple-800'
                            : 'bg-blue-50 text-blue-800'
                        }`}>
                          {item.markerType === 'ngo' ? 'NGO' : item.markerType === 'food' ? 'Food Available' : item.markerType === 'camp' ? 'Food Camp' : 'Volunteer'}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          {item.status || 'Open'}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-surface-dark truncate mt-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-stone-500 truncate">{item.subtitle}</p>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100 text-xs text-stone-500">
                        <span className="truncate flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </span>
                        <span className="font-semibold text-stone-700 shrink-0">{item.distance}</span>
                      </div>
                    </div>
                  </div>

                  {item.markerType === 'food' && (
                    <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-brand-700">{item.quantity} {item.unit} available</span>
                      <Link
                        to={`/donor/donation/${item.id}`}
                        className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right: Interactive Leaflet Map */}
          <div className="lg:col-span-7 h-[620px] rounded-3xl overflow-hidden shadow-soft border border-stone-200 relative bg-stone-100">
            <MapView
              items={filteredItems}
              center={[22.5726, 88.3639]}
              selectedCoords={selectedItem?.coords}
              onSelectItem={(item) => setSelectedItem(item)}
              className="h-full w-full"
            />

            {/* Map Legend Overlay in bottom left */}
            <div className="absolute bottom-4 left-4 z-[400] bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-lg border border-stone-200 text-xs flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#2E7D32] inline-block" />
                <span className="font-semibold text-stone-700">Green = NGO</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#EA580C] inline-block" />
                <span className="font-semibold text-stone-700">Orange = Food Available</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#9333EA] inline-block" />
                <span className="font-semibold text-stone-700">Purple = Food Camp</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#2563EB] inline-block" />
                <span className="font-semibold text-stone-700">Blue = Volunteer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default ExplorePage;
