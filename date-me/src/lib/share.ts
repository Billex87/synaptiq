import { config } from "../config";
import type { Booking } from "../types";
import { formatLongDate } from "./date";

/** Parse a "7:30 PM" label into 24h hours/minutes. */
function parseTime(time: string): { hours: number; minutes: number } {
  const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return { hours: 19, minutes: 0 };
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const meridiem = match[3].toUpperCase();
  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;
  return { hours, minutes };
}

function toICSDate(d: Date): string {
  return d
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
}

/** Produce a downloadable .ics blob URL for the chosen slot (2-hour block). */
export function buildCalendarFile(booking: Booking): string {
  const { hours, minutes } = parseTime(booking.time);
  const start = new Date(booking.date);
  start.setHours(hours, minutes, 0, 0);
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//date-me//EN",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@date-me`,
    `DTSTAMP:${toICSDate(new Date())}`,
    `DTSTART:${toICSDate(start)}`,
    `DTEND:${toICSDate(end)}`,
    `SUMMARY:Date with ${config.yourName} 💫`,
    `DESCRIPTION:Level ${config.level} unlocked. Looking forward to it!`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar" });
  return URL.createObjectURL(blob);
}

/** Build a mailto: link that pre-fills the booking details for you. */
export function buildNotifyLink(booking: Booking): string {
  const subject = `Date booked: ${formatLongDate(booking.date)} at ${booking.time}`;
  const body = [
    `${booking.name} just booked Level ${config.level}! 🎉`,
    "",
    `When: ${formatLongDate(booking.date)} at ${booking.time}`,
    `Reach me via: ${booking.contactMethod}${
      booking.contactValue ? ` (${booking.contactValue})` : ""
    }`,
    booking.note ? `Note: ${booking.note}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${config.notifyEmail}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
