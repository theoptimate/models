import { CalendarDay, Ride } from "./types";

export function getCalendarDays(year: number, month: number, rides: Ride[]): CalendarDay[] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startDayOfWeek = firstDay.getDay();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days: CalendarDay[] = [];

  // Previous month padding
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const date = new Date(year, month - 1, prevMonthLastDay - i);
    days.push({ date, isCurrentMonth: false, isToday: false, rides: [] });
  }

  // Current month days
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const date = new Date(year, month, day);
    const dateStr = formatDateISO(date);
    const dayRides = rides.filter((r) => r.date === dateStr);
    days.push({
      date,
      isCurrentMonth: true,
      isToday: date.getTime() === today.getTime(),
      rides: dayRides,
    });
  }

  // Next month padding to fill 6 rows
  const remaining = 42 - days.length;
  for (let i = 1; i <= remaining; i++) {
    const date = new Date(year, month + 1, i);
    days.push({ date, isCurrentMonth: false, isToday: false, rides: [] });
  }

  return days;
}

export function formatDateISO(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function getMonthName(month: number): string {
  return new Date(2000, month).toLocaleString("en-US", { month: "long" });
}

export const CLUB_COLORS: Record<string, string> = {
  "Portland Bicycling Club": "bg-green-500",
  "Vancouver Bicycling Club": "bg-blue-500",
  "Salem Bicycle Club": "bg-orange-500",
  Community: "bg-purple-500",
};

export const CLUB_COLORS_LIGHT: Record<string, string> = {
  "Portland Bicycling Club": "bg-green-100 text-green-800 border-green-300",
  "Vancouver Bicycling Club": "bg-blue-100 text-blue-800 border-blue-300",
  "Salem Bicycle Club": "bg-orange-100 text-orange-800 border-orange-300",
  Community: "bg-purple-100 text-purple-800 border-purple-300",
};

export const CATEGORY_LABELS: Record<string, string> = {
  "group-ride": "Group Ride",
  event: "Event",
};
