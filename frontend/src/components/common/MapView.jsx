import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';

// Helper component to center map when selected item changes
function MapRecenter({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center && center[0] && center[1]) {
      map.flyTo(center, zoom || 14, { duration: 1.2 });
    }
  }, [center, zoom, map]);
  return null;
}

// Create custom SVG/HTML divIcon for each category
// Spec requirement:
// Green = NGO (#2E7D32)
// Orange = Food Available (#F59E0B / #ea580c)
// Purple = Food Camp (#9333ea)
// Blue = Volunteer (#2563eb)
const createCustomIcon = (type) => {
  let bgColor = '#F59E0B'; // Orange default (Food Available)
  let iconSvg = '';

  if (type === 'food') {
    bgColor = '#EA580C'; // Orange
    iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"/><path d="M6 2v20"/><path d="M15 11v11"/></svg>`;
  } else if (type === 'ngo') {
    bgColor = '#2E7D32'; // Green
    iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;
  } else if (type === 'camp') {
    bgColor = '#9333EA'; // Purple
    iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 20 10 4 1 20h18Z"/><path d="m5 16 5-8 5 8"/></svg>`;
  } else if (type === 'volunteer') {
    bgColor = '#2563EB'; // Blue
    iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="13" x="1" y="6" rx="2"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="12.5" cy="18.5" r="2.5"/></svg>`;
  }

  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `
      <div style="
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        box-shadow: 0 4px 14px rgba(0,0,0,0.35);
        border: 2.5px solid white;
        background: ${bgColor};
        cursor: pointer;
        transition: transform 0.2s ease;
      ">
        ${iconSvg}
      </div>
    `,
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -22]
  });
};

const MapView = ({
  center = [22.5726, 88.3639],
  zoom = 12,
  items = [],
  selectedCoords = null,
  onSelectItem,
  className = 'h-[500px] w-full rounded-2xl overflow-hidden shadow-soft border border-stone-200'
}) => {
  return (
    <div className={className}>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {selectedCoords && <MapRecenter center={selectedCoords} zoom={15} />}

        {items.map((item) => {
          if (!item.coords || !item.coords[0] || !item.coords[1]) return null;

          const markerIcon = createCustomIcon(item.markerType);

          return (
            <Marker
              key={`${item.markerType}-${item.id}`}
              position={item.coords}
              icon={markerIcon}
              eventHandlers={{
                click: () => onSelectItem && onSelectItem(item)
              }}
            >
              <Popup className="custom-leaflet-popup">
                <div className="p-1.5 min-w-[210px] text-surface-dark space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      item.markerType === 'ngo' ? 'bg-brand-50 text-brand-700' :
                      item.markerType === 'food' ? 'bg-orange-50 text-orange-700' :
                      item.markerType === 'camp' ? 'bg-purple-50 text-purple-700' :
                      'bg-blue-50 text-blue-700'
                    }`}>
                      {item.markerType === 'ngo' ? 'NGO Shelter' : item.markerType === 'food' ? 'Food Available' : item.markerType === 'camp' ? 'Food Camp' : 'Volunteer'}
                    </span>
                    {item.urgency && <StatusBadge status={item.urgency} size="sm" />}
                  </div>

                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title || item.name}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  )}

                  <div>
                    <h4 className="font-bold text-sm leading-snug">{item.title || item.name}</h4>
                    <p className="text-xs text-stone-600 mt-0.5">{item.subtitle || item.foodType || item.category}</p>
                  </div>

                  <div className="text-xs text-stone-500">
                    <p className="truncate">{item.location || item.address}</p>
                    {item.quantity && (
                      <p className="font-bold text-brand-600 mt-1">{item.quantity} {item.unit} Available</p>
                    )}
                  </div>

                  {item.markerType === 'food' && (
                    <Link
                      to={`/donor/donation/${item.id}`}
                      className="block text-center text-xs font-semibold py-1.5 px-3 bg-brand-500 hover:bg-brand-600 text-white rounded-lg transition-colors mt-2"
                    >
                      View Request &amp; Track
                    </Link>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapView;
