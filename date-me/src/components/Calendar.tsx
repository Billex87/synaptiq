import { useMemo, useState } from "react";
import {
  addDays,
  buildMonthGrid,
  isSameDay,
  monthLabel,
  startOfDay,
  weekdayLabels,
} from "../lib/date";

interface CalendarProps {
  selected: Date | null;
  onSelect: (date: Date) => void;
  /** Latest date that can be picked. */
  maxDate: Date;
}

/**
 * A compact, touch-first month picker. Past days and days beyond the booking
 * window are disabled. No external dependency so it stays fully styleable.
 */
export default function Calendar({ selected, onSelect, maxDate }: CalendarProps) {
  const today = startOfDay(new Date());
  const [view, setView] = useState(() => ({
    year: today.getFullYear(),
    month: today.getMonth(),
  }));

  const grid = useMemo(
    () => buildMonthGrid(view.year, view.month),
    [view.year, view.month],
  );

  const canGoPrev =
    view.year > today.getFullYear() ||
    (view.year === today.getFullYear() && view.month > today.getMonth());

  const lastViewable = startOfDay(maxDate);
  const canGoNext =
    view.year < lastViewable.getFullYear() ||
    (view.year === lastViewable.getFullYear() &&
      view.month < lastViewable.getMonth());

  function shiftMonth(delta: number) {
    setView((v) => {
      const d = new Date(v.year, v.month + delta, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  }

  return (
    <div className="calendar" role="group" aria-label="Choose a date">
      <div className="calendar__head">
        <button
          type="button"
          className="calendar__nav"
          onClick={() => shiftMonth(-1)}
          disabled={!canGoPrev}
          aria-label="Previous month"
        >
          ‹
        </button>
        <span className="calendar__title" aria-live="polite">
          {monthLabel(view.year, view.month)}
        </span>
        <button
          type="button"
          className="calendar__nav"
          onClick={() => shiftMonth(1)}
          disabled={!canGoNext}
          aria-label="Next month"
        >
          ›
        </button>
      </div>

      <div className="calendar__weekdays" aria-hidden="true">
        {weekdayLabels.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>

      <div className="calendar__grid">
        {grid.map((day) => {
          const inMonth = day.getMonth() === view.month;
          const isPast = day < today;
          const isFuture = day > lastViewable;
          const disabled = isPast || isFuture;
          const isSelected = selected ? isSameDay(day, selected) : false;
          const isToday = isSameDay(day, today);

          return (
            <button
              key={day.toISOString()}
              type="button"
              className={[
                "calendar__day",
                !inMonth && "calendar__day--muted",
                isSelected && "calendar__day--selected",
                isToday && !isSelected && "calendar__day--today",
              ]
                .filter(Boolean)
                .join(" ")}
              disabled={disabled}
              aria-pressed={isSelected}
              aria-label={day.toDateString()}
              onClick={() => onSelect(addDays(startOfDay(day), 0))}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
