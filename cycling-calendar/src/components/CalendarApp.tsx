"use client";

import { useState, useMemo } from "react";
import { CalendarDay } from "../lib/types";
import { getCalendarDays, getMonthName, formatDateISO } from "../lib/utils";
import { getAllRidesForMonth } from "../data/rides";
import CalendarGrid from "./CalendarGrid";
import DaySidebar from "./DaySidebar";
import ClubLegend from "./ClubLegend";
import UpcomingEvents from "./UpcomingEvents";

const ALL_CLUBS = new Set([
  "Portland Bicycling Club",
  "Vancouver Bicycling Club",
  "Salem Bicycle Club",
  "Community",
]);

export default function CalendarApp() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);
  const [activeClubs, setActiveClubs] = useState<Set<string>>(new Set(ALL_CLUBS));

  const allRides = useMemo(() => getAllRidesForMonth(year, month), [year, month]);

  const filteredRides = useMemo(
    () => allRides.filter((r) => activeClubs.has(r.club)),
    [allRides, activeClubs]
  );

  const calendarDays = useMemo(
    () => getCalendarDays(year, month, filteredRides),
    [year, month, filteredRides]
  );

  const totalRidesThisMonth = allRides.length;

  function handlePrevMonth() {
    setSelectedDay(null);
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  function handleNextMonth() {
    setSelectedDay(null);
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }

  function handleToday() {
    setSelectedDay(null);
    setYear(today.getFullYear());
    setMonth(today.getMonth());
  }

  function handleToggleClub(club: string) {
    setActiveClubs((prev) => {
      const next = new Set(prev);
      if (next.has(club)) {
        next.delete(club);
      } else {
        next.add(club);
      }
      return next;
    });
  }

  function handleSelectDay(day: CalendarDay) {
    const dateStr = formatDateISO(day.date);
    if (selectedDay && formatDateISO(selectedDay.date) === dateStr) {
      setSelectedDay(null);
    } else {
      setSelectedDay(day);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="2" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="22" />
                <line x1="2" y1="12" x2="5" y2="12" />
                <line x1="19" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">PNW Cycling Calendar</h1>
              <p className="text-sm text-gray-500">
                Group rides & events from Portland, Vancouver, and Salem cycling clubs
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Month Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrevMonth}
              className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-600 cursor-pointer"
              aria-label="Previous month"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-gray-900 min-w-[220px] text-center">
              {getMonthName(month)} {year}
            </h2>
            <button
              onClick={handleNextMonth}
              className="p-2 rounded-lg hover:bg-gray-200 transition-colors text-gray-600 cursor-pointer"
              aria-label="Next month"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={handleToday}
              className="ml-2 px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors text-gray-600 cursor-pointer"
            >
              Today
            </button>
          </div>

          <div className="text-sm text-gray-500">
            <span className="font-semibold text-gray-700">{totalRidesThisMonth}</span> rides this month
          </div>
        </div>

        {/* Club Filter */}
        <div className="mb-5">
          <ClubLegend activeClubs={activeClubs} onToggle={handleToggleClub} />
        </div>

        {/* Calendar + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={selectedDay ? "lg:col-span-2" : "lg:col-span-3"}>
            <CalendarGrid
              days={calendarDays}
              onSelectDay={handleSelectDay}
              selectedDate={selectedDay ? formatDateISO(selectedDay.date) : null}
            />
          </div>

          {selectedDay && (
            <div className="lg:col-span-1 space-y-6">
              <DaySidebar day={selectedDay} onClose={() => setSelectedDay(null)} />
            </div>
          )}
        </div>

        {/* Upcoming Events */}
        <div className="mt-8">
          <UpcomingEvents />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-gray-400 text-center">
            PNW Cycling Calendar &middot; Aggregating group rides from Portland Bicycling Club, Vancouver Bicycling
            Club, Salem Bicycle Club, and community events. Ride data is illustrative &mdash; always confirm details
            with the organizing club.
          </p>
        </div>
      </footer>
    </div>
  );
}
