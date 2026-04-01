"use client";

import { CLUB_COLORS } from "../lib/utils";

interface ClubLegendProps {
  activeClubs: Set<string>;
  onToggle: (club: string) => void;
}

const CLUBS = ["Portland Bicycling Club", "Vancouver Bicycling Club", "Salem Bicycle Club", "Community"];

export default function ClubLegend({ activeClubs, onToggle }: ClubLegendProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {CLUBS.map((club) => {
        const active = activeClubs.has(club);
        return (
          <button
            key={club}
            onClick={() => onToggle(club)}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
              border transition-all duration-150 cursor-pointer
              ${active ? "border-gray-300 bg-white text-gray-800 shadow-sm" : "border-gray-200 bg-gray-100 text-gray-400"}
            `}
          >
            <span className={`w-2.5 h-2.5 rounded-full ${CLUB_COLORS[club]} ${!active ? "opacity-30" : ""}`} />
            {club}
          </button>
        );
      })}
    </div>
  );
}
