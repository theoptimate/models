"use client";

import { Ride } from "../lib/types";
import { CLUB_COLORS_LIGHT, CATEGORY_LABELS } from "../lib/utils";

interface RideDetailProps {
  ride: Ride;
}

export default function RideDetail({ ride }: RideDetailProps) {
  return (
    <div className={`p-4 rounded-lg border ${CLUB_COLORS_LIGHT[ride.club]}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm leading-snug">{ride.title}</h3>
          <p className="text-xs mt-0.5 opacity-75">{ride.club}</p>
        </div>
        <span
          className={`
            text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full flex-shrink-0
            ${ride.category === "event" ? "bg-yellow-200 text-yellow-800" : "bg-gray-200 text-gray-700"}
          `}
        >
          {CATEGORY_LABELS[ride.category]}
        </span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div>
          <span className="font-medium opacity-60 uppercase tracking-wider text-[10px]">Time</span>
          <p className="font-medium">{ride.time}</p>
        </div>
        {ride.distance && (
          <div>
            <span className="font-medium opacity-60 uppercase tracking-wider text-[10px]">Distance</span>
            <p className="font-medium">{ride.distance}</p>
          </div>
        )}
        {ride.pace && (
          <div>
            <span className="font-medium opacity-60 uppercase tracking-wider text-[10px]">Pace</span>
            <p className="font-medium">{ride.pace}</p>
          </div>
        )}
        <div className="col-span-2">
          <span className="font-medium opacity-60 uppercase tracking-wider text-[10px]">Start</span>
          <p className="font-medium">{ride.startLocation}</p>
        </div>
      </div>

      <p className="mt-3 text-xs leading-relaxed opacity-80">{ride.description}</p>

      {ride.url && (
        <a
          href={ride.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-xs font-medium underline hover:no-underline"
        >
          More info &rarr;
        </a>
      )}
    </div>
  );
}
