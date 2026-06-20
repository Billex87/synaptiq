import type { ContactMethod } from "./config";

export interface Booking {
  date: Date;
  time: string;
  name: string;
  contactMethod: ContactMethod;
  contactValue: string;
  note: string;
}
