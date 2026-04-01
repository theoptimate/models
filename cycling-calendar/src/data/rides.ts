import { Ride } from "../lib/types";

// Helper to generate dates for a specific day-of-week in a given month
function getDatesForDayOfWeek(year: number, month: number, dayOfWeek: number): string[] {
  const dates: string[] = [];
  const d = new Date(year, month, 1);
  while (d.getDay() !== dayOfWeek) d.setDate(d.getDate() + 1);
  while (d.getMonth() === month) {
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    dates.push(`${year}-${m}-${day}`);
    d.setDate(d.getDate() + 7);
  }
  return dates;
}

// Generate recurring rides for a given month/year
export function generateRidesForMonth(year: number, month: number): Ride[] {
  const rides: Ride[] = [];
  let id = 0;

  // ── Portland Bicycling Club ──────────────────────────────────
  // Tuesday evening rides
  for (const date of getDatesForDayOfWeek(year, month, 2)) {
    rides.push({
      id: `pbc-tue-${id++}`,
      title: "Tuesday Evening Social Ride",
      club: "Portland Bicycling Club",
      category: "group-ride",
      date,
      time: "5:30 PM",
      distance: "20-25 miles",
      pace: "Moderate",
      startLocation: "Sellwood Park, Portland",
      description:
        "A friendly no-drop social ride through Southeast Portland neighborhoods. All levels welcome.",
      url: "https://portlandbicyclingclub.com",
      recurring: true,
    });
  }

  // Thursday hill rides
  for (const date of getDatesForDayOfWeek(year, month, 4)) {
    rides.push({
      id: `pbc-thu-${id++}`,
      title: "Thursday Hills Training Ride",
      club: "Portland Bicycling Club",
      category: "group-ride",
      date,
      time: "6:00 PM",
      distance: "30 miles",
      pace: "Brisk",
      startLocation: "Council Crest Park, Portland",
      description:
        "Challenging hill ride through the West Hills. Includes climbs on Germantown, Skyline, and Cornell.",
      url: "https://portlandbicyclingclub.com",
      recurring: true,
    });
  }

  // Saturday morning rides
  for (const date of getDatesForDayOfWeek(year, month, 6)) {
    rides.push({
      id: `pbc-sat-${id++}`,
      title: "Saturday Morning Club Ride",
      club: "Portland Bicycling Club",
      category: "group-ride",
      date,
      time: "8:30 AM",
      distance: "40-60 miles",
      pace: "Moderate",
      startLocation: "Oaks Park, Portland",
      description:
        "The signature PBC weekend ride. Routes vary weekly and explore the scenic roads around Portland.",
      url: "https://portlandbicyclingclub.com",
      recurring: true,
    });
  }

  // Sunday brunch rides
  for (const date of getDatesForDayOfWeek(year, month, 0)) {
    rides.push({
      id: `pbc-sun-${id++}`,
      title: "Sunday Brunch Ride",
      club: "Portland Bicycling Club",
      category: "group-ride",
      date,
      time: "9:00 AM",
      distance: "25-35 miles",
      pace: "Easy",
      startLocation: "Colonel Summers Park, Portland",
      description:
        "Relaxed ride ending at a local brunch spot. Perfect for newer riders or those wanting a chill Sunday spin.",
      url: "https://portlandbicyclingclub.com",
      recurring: true,
    });
  }

  // ── Vancouver Bicycling Club ─────────────────────────────────
  // Wednesday evening rides
  for (const date of getDatesForDayOfWeek(year, month, 3)) {
    rides.push({
      id: `vbc-wed-${id++}`,
      title: "Wednesday Evening Ride",
      club: "Vancouver Bicycling Club",
      category: "group-ride",
      date,
      time: "5:30 PM",
      distance: "20-30 miles",
      pace: "Moderate",
      startLocation: "Esther Short Park, Vancouver WA",
      description:
        "Weekly evening ride through Clark County. Routes rotate between urban greenways and rural roads.",
      url: "https://vancouverbicycleclub.com",
      recurring: true,
    });
  }

  // Saturday rides
  for (const date of getDatesForDayOfWeek(year, month, 6)) {
    rides.push({
      id: `vbc-sat-${id++}`,
      title: "Saturday Explorer Ride",
      club: "Vancouver Bicycling Club",
      category: "group-ride",
      date,
      time: "9:00 AM",
      distance: "35-50 miles",
      pace: "Moderate",
      startLocation: "Marine Park, Vancouver WA",
      description:
        "Explore the roads and trails of Clark County and beyond. Routes include Larch Mountain, Lewis River, and Ridgefield loops.",
      url: "https://vancouverbicycleclub.com",
      recurring: true,
    });
  }

  // Sunday recovery rides
  for (const date of getDatesForDayOfWeek(year, month, 0)) {
    rides.push({
      id: `vbc-sun-${id++}`,
      title: "Sunday Coffee Spin",
      club: "Vancouver Bicycling Club",
      category: "group-ride",
      date,
      time: "8:00 AM",
      distance: "15-20 miles",
      pace: "Easy",
      startLocation: "Columbia Springs, Vancouver WA",
      description:
        "Easy-paced ride along the Waterfront Trail and through Fort Vancouver. Ends at a local coffee shop.",
      url: "https://vancouverbicycleclub.com",
      recurring: true,
    });
  }

  // ── Salem Bicycle Club ───────────────────────────────────────
  // Tuesday rides
  for (const date of getDatesForDayOfWeek(year, month, 2)) {
    rides.push({
      id: `sbc-tue-${id++}`,
      title: "Tuesday Twilight Ride",
      club: "Salem Bicycle Club",
      category: "group-ride",
      date,
      time: "5:45 PM",
      distance: "18-22 miles",
      pace: "Moderate",
      startLocation: "Bush's Pasture Park, Salem",
      description:
        "An after-work ride through South Salem and into the Eola Hills. Regroup at the top of each climb.",
      url: "https://salembicycleclub.org",
      recurring: true,
    });
  }

  // Saturday rides
  for (const date of getDatesForDayOfWeek(year, month, 6)) {
    rides.push({
      id: `sbc-sat-${id++}`,
      title: "Saturday Valley Ride",
      club: "Salem Bicycle Club",
      category: "group-ride",
      date,
      time: "8:00 AM",
      distance: "40-55 miles",
      pace: "Moderate",
      startLocation: "Riverfront Park, Salem",
      description:
        "A longer ride exploring the Willamette Valley. Routes visit covered bridges, vineyards, and small towns.",
      url: "https://salembicycleclub.org",
      recurring: true,
    });
  }

  // Sunday family rides
  for (const date of getDatesForDayOfWeek(year, month, 0)) {
    rides.push({
      id: `sbc-sun-${id++}`,
      title: "Sunday Family Fun Ride",
      club: "Salem Bicycle Club",
      category: "group-ride",
      date,
      time: "10:00 AM",
      distance: "10-15 miles",
      pace: "Easy",
      startLocation: "Minto-Brown Island Park, Salem",
      description:
        "A family-friendly ride on paved paths. Kids and beginners welcome. Helmets required.",
      url: "https://salembicycleclub.org",
      recurring: true,
    });
  }

  return rides;
}

// ── Special Events & Multi-day Rides ─────────────────────────
export const specialEvents: Ride[] = [
  // STP - Seattle to Portland
  {
    id: "event-stp",
    title: "Seattle to Portland (STP)",
    club: "Community",
    category: "event",
    date: "2026-07-11",
    time: "5:00 AM",
    distance: "204 miles (1 or 2 day)",
    pace: "Moderate",
    startLocation: "University of Washington, Seattle",
    description:
      "The iconic Seattle to Portland Bicycle Classic. One of the largest recreational rides in the Northwest. Choose 1-day or 2-day option.",
    url: "https://www.cascade.org/rides-and-events/seattle-portland",
  },
  // Reach the Beach
  {
    id: "event-rtb",
    title: "Reach the Beach",
    club: "Community",
    category: "event",
    date: "2026-05-16",
    time: "7:00 AM",
    distance: "60-100 miles",
    pace: "Moderate",
    startLocation: "Portland, OR",
    description:
      "Ride from Portland to Pacific City on the Oregon Coast. Multiple route options from 60 to 100 miles through the Coast Range.",
    url: "https://reachthebeach.org",
  },
  // Portland Century
  {
    id: "event-pdx-century",
    title: "Portland Century",
    club: "Portland Bicycling Club",
    category: "event",
    date: "2026-06-14",
    time: "7:00 AM",
    distance: "35/62/100 miles",
    pace: "Moderate",
    startLocation: "Portland Community College, Rock Creek",
    description:
      "PBC's annual century ride through Washington County wine country. Options for 35, 62, or 100 miles with full SAG support and rest stops.",
    url: "https://portlandbicyclingclub.com",
  },
  // Harvest Century
  {
    id: "event-harvest",
    title: "Harvest Century",
    club: "Salem Bicycle Club",
    category: "event",
    date: "2026-09-12",
    time: "7:30 AM",
    distance: "25/50/62/100 miles",
    pace: "Moderate",
    startLocation: "Chemeketa Community College, Salem",
    description:
      "Salem Bicycle Club's signature fall century ride through the Willamette Valley during harvest season. Stunning scenery and well-stocked rest stops.",
    url: "https://salembicycleclub.org",
  },
  // Worst Day of the Year Ride
  {
    id: "event-worst-day",
    title: "Worst Day of the Year Ride",
    club: "Community",
    category: "event",
    date: "2026-02-08",
    time: "9:00 AM",
    distance: "15/30/50 miles",
    pace: "Easy",
    startLocation: "Lucky Labrador Brewing, Portland",
    description:
      "Embrace the February rain! Costume-friendly ride that celebrates riding in the worst weather. Post-ride party with food and beer.",
  },
  // Bridge Pedal
  {
    id: "event-bridge-pedal",
    title: "Providence Bridge Pedal",
    club: "Community",
    category: "event",
    date: "2026-08-09",
    time: "6:30 AM",
    distance: "12-36 miles",
    pace: "Easy",
    startLocation: "Lloyd Center, Portland",
    description:
      "Portland's signature ride across the city's famous bridges, including exclusive access to freeway bridges normally closed to cyclists.",
    url: "https://www.providence.org/bridgepedal",
  },
  // Tour de Fronds
  {
    id: "event-tour-de-fronds",
    title: "Tour de Fronds",
    club: "Community",
    category: "event",
    date: "2026-06-27",
    time: "8:00 AM",
    distance: "30/45/65/100 miles",
    pace: "Moderate",
    startLocation: "Oakridge, OR",
    description:
      "A gorgeous ride through the Cascade foothills near Oakridge. Known for towering fir trees, covered bridges, and challenging climbs.",
  },
  // Cycle Oregon
  {
    id: "event-cycle-oregon",
    title: "Cycle Oregon Classic",
    club: "Community",
    category: "event",
    date: "2026-09-05",
    time: "7:00 AM",
    distance: "~400 miles over 7 days",
    pace: "Moderate",
    startLocation: "TBD (varies annually)",
    description:
      "Oregon's premier week-long supported bicycle tour. Explore a different region of Oregon each year with full camping support, meals, and entertainment.",
    url: "https://cycleoregon.com",
  },
  // Gran Fondo Ashland
  {
    id: "event-gran-fondo",
    title: "Ashland Gran Fondo",
    club: "Community",
    category: "event",
    date: "2026-05-30",
    time: "7:00 AM",
    distance: "50/80/106 miles",
    pace: "Brisk",
    startLocation: "Lithia Park, Ashland",
    description:
      "A challenging timed gran fondo through the mountains of Southern Oregon with stunning views of Mt. Shasta and the Rogue Valley.",
  },
  // Pioneer Century
  {
    id: "event-pioneer",
    title: "Pioneer Century",
    club: "Vancouver Bicycling Club",
    category: "event",
    date: "2026-06-06",
    time: "7:30 AM",
    distance: "38/65/100 miles",
    pace: "Moderate",
    startLocation: "Battle Ground Community Center, WA",
    description:
      "Vancouver Bicycle Club's annual century ride through the scenic rural roads of northern Clark County and Cowlitz County.",
    url: "https://vancouverbicycleclub.com",
  },
];

export function getAllRidesForMonth(year: number, month: number): Ride[] {
  const recurring = generateRidesForMonth(year, month);
  const monthStr = String(month + 1).padStart(2, "0");
  const prefix = `${year}-${monthStr}`;
  const events = specialEvents.filter((e) => e.date.startsWith(prefix));
  return [...recurring, ...events].sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
}
