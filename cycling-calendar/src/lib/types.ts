export type RideClub =
  | "Portland Bicycling Club"
  | "Vancouver Bicycling Club"
  | "Salem Bicycle Club"
  | "Community";

export type RideCategory = "group-ride" | "event";

export type RidePace = "Easy" | "Moderate" | "Brisk" | "Strenuous";

export interface Ride {
  id: string;
  title: string;
  club: RideClub;
  category: RideCategory;
  date: string; // ISO date string YYYY-MM-DD
  time: string; // e.g. "8:00 AM"
  distance?: string; // e.g. "35 miles"
  pace?: RidePace;
  startLocation: string;
  description: string;
  url?: string;
  recurring?: boolean;
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  rides: Ride[];
}
