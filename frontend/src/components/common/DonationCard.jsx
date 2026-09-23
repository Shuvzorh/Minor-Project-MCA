import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Utensils, AlertTriangle, ArrowRight, CheckCircle, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';
import Button from './Button';

const DonationCard = ({
  donation,
  onAccept,
  onClaim,
  onViewDetails,
  showActions = true,
  role = 'volunteer' // 'volunteer' | 'provider' | 'ngo' | 'general'
}) => {
  const {
    id,
    foodType,
    description,
    quantity,
    unit,
    isVeg,
    preparedAt,
    pickupBefore,
    providerName,
    location,
    distance,
    status,
    urgency,
    imageUrl,
    assignedVolunteer
  } = donation;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-200 flex flex-col justify-between group"
    >
      <div>
        {/* Card Header & Thumbnail */}
        <div className="relative h-44 w-full overflow-hidden bg-stone-100">
          <img
            src={imageUrl}
            alt={foodType}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Badges on top */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
            {urgency === 'Urgent' && <StatusBadge status="urgent" size="sm" />}
            <StatusBadge status={isVeg ? 'veg' : 'non-veg'} size="sm" />
          </div>

          <div className="absolute top-3 right-3">
            <StatusBadge status={status} size="sm" />
          </div>

          {/* Quantity banner */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
            <div>
              <span className="text-xl font-black drop-shadow-sm">{quantity} {unit}</span>
              <span className="text-xs ml-1.5 opacity-90 font-medium">Available</span>
            </div>
            {distance && (
              <span className="inline-flex items-center gap-1 text-xs bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-white/90">
                <Navigation className="w-3 h-3 text-emerald-400" />
                {distance}
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3.5">
          <div>
            <h3 className="text-lg font-bold text-surface-dark group-hover:text-brand-600 transition-colors line-clamp-1">
              {foodType}
            </h3>
            <p className="text-xs text-stone-500 font-medium mt-0.5 flex items-center gap-1.5">
              <span className="font-semibold text-stone-700">{providerName}</span>
            </p>
          </div>

          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
            {description}
          </p>

          <div className="pt-2 border-t border-stone-100 space-y-2 text-xs text-stone-600">
            <div className="flex items-center gap-2 text-stone-600">
              <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span className="truncate">{location}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Pickup before {pickupBefore}</span>
              </div>
              <span className="text-[11px] text-stone-400 font-mono">#{id}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      {showActions && (
        <div className="p-4 pt-0 bg-white">
          <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
            {role === 'volunteer' && (
              <>
                <Link to={`/track/${id}`} className="flex-1">
                  <Button variant="ghost" size="sm" className="w-full text-stone-600 hover:text-stone-900">
                    View Details
                  </Button>
                </Link>
                {status === 'Pending' ? (
                  <Button
                    variant="primary"
                    size="sm"
                    className="flex-1"
                    onClick={() => onAccept && onAccept(id)}
                  >
                    Accept Request
                  </Button>
                ) : (
                  <Link to={`/track/${id}`} className="flex-1">
                    <Button variant="secondary" size="sm" className="w-full text-brand-700">
                      Track Route
                    </Button>
                  </Link>
                )}
              </>
            )}

            {role === 'provider' && (
              <div className="w-full flex items-center justify-between">
                <Link to={`/track/${id}`} className="w-full">
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    <span>Live Tracking Timeline</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            )}

            {role === 'ngo' && (
              <>
                <Link to={`/track/${id}`} className="flex-1">
                  <Button variant="ghost" size="sm" className="w-full">
                    Inspect
                  </Button>
                </Link>
                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1"
                  onClick={() => onClaim ? onClaim(id) : onAccept && onAccept(id)}
                >
                  Request Surplus
                </Button>
              </>
            )}

            {role === 'general' && (
              <Link to={`/track/${id}`} className="w-full">
                <Button variant="secondary" size="sm" className="w-full justify-between">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default DonationCard;
