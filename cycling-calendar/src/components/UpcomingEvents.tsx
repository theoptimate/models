"use client";

import { specialEvents } from "../data/rides";
import { CLUB_COLORS } from "../lib/utils";

export default function UpcomingEvents() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = specialEvents
    .filter((e) => new Date(e.date + "T00:00:00") >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 6);

  if (upcoming.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Upcoming Events</h2>
      <div className="space-y-3">
        {upcoming.map((event) => {
          const eventDate = new Date(event.date + "T00:00:00");
          const dateLabel = eventDate.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });

          return (
            <div key={event.id} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-12 text-center">
                <div className="text-xs font-semibold text-gray-500 uppercase">
                  {eventDate.toLocaleDateString("en-US", { month: "short" })}
                </div>
                <div className="text-lg font-bold text-gray-900">{eventDate.getDate()}</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${CLUB_COLORS[event.club]}`} />
                  <h3 className="text-sm font-semibold text-gray-900 truncate">{event.title}</h3>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{event.distance} &middot; {event.startLocation}</p>
                {event.url && (
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline"
                  >
                    Details
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
