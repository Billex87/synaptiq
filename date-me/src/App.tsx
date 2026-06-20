import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { config } from "./config";
import type { Booking } from "./types";
import ProgressTracker from "./components/ProgressTracker";
import BookingCard from "./components/BookingCard";
import Confirmation from "./components/Confirmation";

export default function App() {
  const [booking, setBooking] = useState<Booking | null>(null);

  const greeting = config.herName ? `${config.herName}, you've` : "You've";

  return (
    <div className="page">
      <div className="aurora" aria-hidden="true" />

      <main className="shell">
        <motion.header
          className="hero"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="hero__badge">
            <span className="hero__lock" aria-hidden="true">🔓</span>
            Level {config.level} unlocked
          </span>
          <h1 className="hero__title">
            {greeting} unlocked{" "}
            <span className="hero__highlight">Level {config.level}</span> with{" "}
            {config.yourName}.
          </h1>
          <p className="hero__lede">
            The first date was a yes from me. Round two is yours to schedule —
            pick a moment and I'll be there.
          </p>
        </motion.header>

        <ProgressTracker />

        <AnimatePresence mode="wait">
          {booking ? (
            <Confirmation key="confirmation" booking={booking} />
          ) : (
            <motion.div
              key="booking"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <BookingCard onConfirm={setBooking} />
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="footer">
          <span className="footer__heart" aria-hidden="true">♥</span>
          Made just for you by {config.yourName}
        </footer>
      </main>
    </div>
  );
}
