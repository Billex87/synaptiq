import { useEffect } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { config } from "../config";
import type { Booking } from "../types";
import { formatLongDate } from "../lib/date";
import { buildCalendarFile, buildNotifyLink } from "../lib/share";

interface ConfirmationProps {
  booking: Booking;
}

function celebrate() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = ["#2dd4bf", "#38bdf8", "#a5f3fc", "#ffffff"];
  const burst = (originX: number) =>
    confetti({
      particleCount: 60,
      spread: 70,
      startVelocity: 45,
      origin: { x: originX, y: 0.6 },
      colors,
      scalar: 0.9,
    });
  burst(0.2);
  burst(0.8);
  setTimeout(() => burst(0.5), 250);
}

export default function Confirmation({ booking }: ConfirmationProps) {
  useEffect(() => {
    celebrate();
  }, []);

  const calendarUrl = buildCalendarFile(booking);
  const notifyUrl = config.notifyEmail ? buildNotifyLink(booking) : null;

  return (
    <motion.div
      className="card confirmation"
      initial={{ opacity: 0, scale: 0.94, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      <motion.div
        className="confirmation__seal"
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 12 }}
        aria-hidden="true"
      >
        ♥
      </motion.div>

      <h2 className="confirmation__title">It's a date.</h2>
      <p className="confirmation__sub">
        {booking.name}, you're locked in with {config.yourName}.
      </p>

      <dl className="confirmation__details">
        <div>
          <dt>When</dt>
          <dd>
            {formatLongDate(booking.date)}
            <br />
            <strong>{booking.time}</strong>
          </dd>
        </div>
        <div>
          <dt>Reach you via</dt>
          <dd>
            {booking.contactMethod}
            <br />
            <strong>{booking.contactValue}</strong>
          </dd>
        </div>
        {booking.note && (
          <div className="confirmation__note">
            <dt>Your note</dt>
            <dd>“{booking.note}”</dd>
          </div>
        )}
      </dl>

      <div className="confirmation__actions">
        <a className="cta cta--confirm" href={calendarUrl} download="our-date.ics">
          Add to calendar
        </a>
        {notifyUrl && (
          <a className="ghost-btn" href={notifyUrl}>
            Let {config.yourName} know
          </a>
        )}
      </div>

      <p className="confirmation__footnote">
        See you then. Don't be late — Level 3 is on the line. 😉
      </p>
    </motion.div>
  );
}
