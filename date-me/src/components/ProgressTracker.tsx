import { motion } from "framer-motion";

interface Step {
  label: string;
  state: "done" | "active" | "upcoming";
}

const steps: Step[] = [
  { label: "First date", state: "done" },
  { label: "Level 2", state: "active" },
  { label: "What's next", state: "upcoming" },
];

/**
 * Three-stop progress rail. The fill animates to the active step on mount so
 * she sees the "advancement" happen.
 */
export default function ProgressTracker() {
  const activeIndex = steps.findIndex((s) => s.state === "active");
  const fillPct = (activeIndex / (steps.length - 1)) * 100;

  return (
    <div className="progress" aria-label="Dating progress: Level 2 of 3, in progress">
      <div className="progress__rail">
        <motion.div
          className="progress__fill"
          initial={{ width: "0%" }}
          animate={{ width: `${fillPct}%` }}
          transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
        />
        <div className="progress__dots">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              className={`progress__dot progress__dot--${step.state}`}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.25, type: "spring", stiffness: 300 }}
            >
              <span aria-hidden="true">
                {step.state === "done" ? "✓" : step.state === "active" ? "★" : ""}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="progress__labels">
        {steps.map((step) => (
          <span
            key={step.label}
            className={`progress__label progress__label--${step.state}`}
          >
            {step.label}
          </span>
        ))}
      </div>
    </div>
  );
}
