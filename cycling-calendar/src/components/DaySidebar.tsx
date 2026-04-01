"use client";

import { CalendarDay } from "../lib/types";
import RideDetail from "./RideDetail";

interface DaySidebarProps {
  day: CalendarDay | null;
  onClose: () => void;
}

export default function DaySidebar({ day, onClose }: DaySidebarProps) {
  if (!day) return null;

  const dateLabel = day.date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">{dateLabel}</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none cursor-pointer"
          aria-label="Close"
        >
          &times;
        </button>
      </div>

      {day.rides.length === 0 ? (
        <p className="text-sm text-gray-400 italic">No rides scheduled for this day.</p>
      ) : (
        <div className="space-y-3">
          {day.rides.map((ride) => (
            <RideDetail key={ride.id} ride={ride} />
          ))}
        </div>
      )}
    </div>
  );
}
