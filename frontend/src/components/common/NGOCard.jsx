import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, HeartHandshake, CheckCircle, Users } from 'lucide-react';
import Button from './Button';

const NGOCard = ({ ngo, onContact }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-white rounded-2xl border border-stone-200 p-5 shadow-soft hover:shadow-soft-lg transition-all duration-200 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start gap-3.5">
          <img
            src={ngo.image}
            alt={ngo.name}
            className="w-14 h-14 rounded-xl object-cover border border-stone-100 shadow-sm shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="text-base font-bold text-surface-dark truncate">{ngo.name}</h3>
              {ngo.verified && (
                <CheckCircle className="w-4 h-4 text-brand-600 shrink-0" title="Verified NGO Partner" />
              )}
            </div>
            <p className="text-xs text-brand-700 font-medium">{ngo.category}</p>
            <div className="flex items-center gap-1 text-xs text-stone-500 mt-1">
              <MapPin className="w-3.5 h-3.5 shrink-0 text-stone-400" />
              <span className="truncate">{ngo.address}</span>
            </div>
          </div>
        </div>

        {/* Needs Banner */}
        <div className="mt-4 p-2.5 bg-brand-50/70 border border-brand-100 rounded-xl text-xs text-brand-900">
          <span className="font-semibold text-brand-800">Active Needs:</span> {ngo.activeNeeds}
        </div>

        {/* Impact stats */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
          <div className="p-2 bg-stone-50 rounded-lg">
            <span className="block font-bold text-stone-900">{ngo.mealsReceivedTotal.toLocaleString()}+</span>
            <span className="text-[11px] text-stone-500">Meals Received</span>
          </div>
          <div className="p-2 bg-stone-50 rounded-lg">
            <span className="block font-bold text-stone-900">{ngo.capacity}</span>
            <span className="text-[11px] text-stone-500">Resident Capacity</span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
        <span className="text-xs text-stone-500 flex items-center gap-1">
          <Users className="w-3.5 h-3.5 text-stone-400" />
          {ngo.contactPerson}
        </span>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onContact ? onContact(ngo) : alert(`Connecting with ${ngo.name} at ${ngo.phone}`)}
        >
          Connect
        </Button>
      </div>
    </motion.div>
  );
};

export default NGOCard;
