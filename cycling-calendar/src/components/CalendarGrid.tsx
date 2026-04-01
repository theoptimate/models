"use client";

import { CalendarDay } from "../lib/types";
import { CLUB_COLORS } from "../lib/utils";

interface CalendarGridProps {
  days: CalendarDay[];
  onSelectDay: (day: CalendarDay) => void;
  selectedDate: string | null;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarGrid({ days, onSelectDay, selectedDate }: CalendarGridProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
        {WEEKDAYS.map((d) => (
          <div key={d} className="py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar cells */}
      <div className="grid grid-cols-7">
        {days.map((day, i) => {
          const dateStr = day.date.toISOString().split("T")[0];
          const isSelected = selectedDate === dateStr;

          return (
            <button
              key={i}
              onClick={() => onSelectDay(day)}
              className={`
                relative min-h-[100px] p-2 border-b border-r border-gray-100 text-left
                transition-colors duration-150 hover:bg-blue-50 cursor-pointer
                ${!day.isCurrentMonth ? "bg-gray-50" : "bg-white"}
                ${isSelected ? "ring-2 ring-inset ring-blue-500 bg-blue-50" : ""}
              `}
            >
              <span
                className={`
                  text-sm font-medium
                  ${day.isToday ? "bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center" : ""}
                  ${!day.isCurrentMonth ? "text-gray-300" : "text-gray-700"}
                `}
              >
                {day.date.getDate()}
              </span>

              {/* Ride indicators */}
              {day.rides.length > 0 && (
                <div className="mt-1 space-y-0.5">
                  {day.rides.slice(0, 3).map((ride) => (
                    <div key={ride.id} className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${CLUB_COLORS[ride.club]}`} />
                      <span className="text-[10px] text-gray-600 truncate leading-tight">
                        {ride.category === "event" ? ride.title : ride.time}
                      </span>
                    </div>
                  ))}
                  {day.rides.length > 3 && (
                    <span className="text-[10px] text-gray-400">+{day.rides.length - 3} more</span>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
