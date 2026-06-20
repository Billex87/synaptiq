import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { config, type ContactMethod } from "../config";
import type { Booking } from "../types";
import { addDays, formatLongDate, startOfDay } from "../lib/date";
import Calendar from "./Calendar";

interface BookingCardProps {
  onConfirm: (booking: Booking) => void;
}

const contactPlaceholders: Record<ContactMethod, string> = {
  Text: "Your phone number",
  Call: "Your phone number",
  Instagram: "Your @ handle",
  WhatsApp: "Your WhatsApp number",
};

export default function BookingCard({ onConfirm }: BookingCardProps) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState<ContactMethod>(
    config.contactMethods[0],
  );
  const [contactValue, setContactValue] = useState("");
  const [note, setNote] = useState("");

  const maxDate = addDays(startOfDay(new Date()), config.bookingWindowDays);
  const ready = Boolean(date && time && name.trim() && contactValue.trim());

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ready || !date) return;
    onConfirm({
      date,
      time,
      name: name.trim(),
      contactMethod,
      contactValue: contactValue.trim(),
      note: note.trim(),
    });
  }

  return (
    <div className="card booking">
      {!open ? (
        <motion.button
          type="button"
          className="cta"
          onClick={() => setOpen(true)}
          whileTap={{ scale: 0.97 }}
          aria-expanded={false}
          aria-controls="booking-form"
        >
          <span className="cta__glow" aria-hidden="true" />
          Book our date
          <span className="cta__arrow" aria-hidden="true">→</span>
        </motion.button>
      ) : (
        <AnimatePresence>
          <motion.form
            id="booking-form"
            className="booking__form"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onSubmit={handleSubmit}
          >
            <fieldset className="booking__step">
              <legend className="booking__label">1. Pick a day</legend>
              <Calendar
                selected={date}
                onSelect={(d) => {
                  setDate(d);
                  setTime("");
                }}
                maxDate={maxDate}
              />
            </fieldset>

            <AnimatePresence>
              {date && (
                <motion.fieldset
                  className="booking__step"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <legend className="booking__label">
                    2. Pick a time — {formatLongDate(date)}
                  </legend>
                  <div className="slots" role="group" aria-label="Available times">
                    {config.timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        className={`slot ${time === slot ? "slot--selected" : ""}`}
                        aria-pressed={time === slot}
                        onClick={() => setTime(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </motion.fieldset>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {date && time && (
                <motion.fieldset
                  className="booking__step"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <legend className="booking__label">3. Your details</legend>

                  <label className="field">
                    <span className="field__label">Your name</span>
                    <input
                      className="field__input"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="What should I call you?"
                      autoComplete="given-name"
                      required
                    />
                  </label>

                  <div className="field">
                    <span className="field__label">Best way to reach you</span>
                    <div
                      className="segmented"
                      role="radiogroup"
                      aria-label="Preferred contact method"
                    >
                      {config.contactMethods.map((method) => (
                        <button
                          key={method}
                          type="button"
                          role="radio"
                          aria-checked={contactMethod === method}
                          className={`segmented__option ${
                            contactMethod === method ? "segmented__option--active" : ""
                          }`}
                          onClick={() => setContactMethod(method)}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="field">
                    <span className="field__label">{contactMethod} details</span>
                    <input
                      className="field__input"
                      type="text"
                      value={contactValue}
                      onChange={(e) => setContactValue(e.target.value)}
                      placeholder={contactPlaceholders[contactMethod]}
                      inputMode={
                        contactMethod === "Instagram" ? "text" : "tel"
                      }
                      required
                    />
                  </label>

                  <label className="field">
                    <span className="field__label">
                      A note (optional) — anywhere you'd love to go?
                    </span>
                    <textarea
                      className="field__input field__textarea"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Surprise me, or drop an idea…"
                      rows={3}
                    />
                  </label>
                </motion.fieldset>
              )}
            </AnimatePresence>

            <button type="submit" className="cta cta--confirm" disabled={!ready}>
              {ready ? "Lock it in 🔒" : "Pick a day & time to continue"}
            </button>
          </motion.form>
        </AnimatePresence>
      )}
    </div>
  );
}
