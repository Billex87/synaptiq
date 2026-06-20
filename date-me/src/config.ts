/**
 * Everything you'd want to personalize lives here.
 * Change these values and the whole site updates — no other edits needed.
 */
export const config = {
  /** The name of the person doing the inviting (you). */
  yourName: "Billy",

  /** Optional: her name. Leave "" to keep the copy generic. */
  herName: "",

  /** Which level/phase this unlock represents. */
  level: 2,

  /**
   * Where the booking details are sent when she taps "Let {yourName} know".
   * Put your own email here. Leave "" to hide that button entirely.
   */
  notifyEmail: "mynameisbillex@gmail.com",

  /** Time slots offered for each day she can pick. */
  timeSlots: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"],

  /** How many days into the future she can book. */
  bookingWindowDays: 30,

  /** Ways she can choose to be reached. First one is selected by default. */
  contactMethods: ["Text", "Call", "Instagram", "WhatsApp"] as const,
} as const;

export type ContactMethod = (typeof config.contactMethods)[number];
