# date-me 🔓

A playful, mobile-first microsite for telling someone they've advanced to the
**second date** — and letting them book the time in a couple of taps.

Built with **React + TypeScript + Vite**, animated with **Framer Motion**, and
celebrated with **canvas-confetti**. No backend required: it runs as a static
site you can host anywhere.

## What's inside

- **Hero** — "You've unlocked Level 2 with {you}" with a friendly invite.
- **Progress tracker** — first date ✓, Level 2 ★ (active), what's next. The fill
  animates on load so the advancement feels real.
- **Booking card** — one big call-to-action that expands into a touch-friendly
  calendar, time-slot picker, name field, contact-method picker, and an optional
  note.
- **Confirmation** — confetti + a heart seal, a summary of the chosen slot, an
  **Add to calendar** (.ics) download, and a **Let {you} know** button that opens
  a pre-filled email so the booking actually reaches you.
- Accessible (semantic markup, ARIA labels, visible focus, `prefers-reduced-motion`
  support) and responsive down to small phones.

## Make it yours

Open [`src/config.ts`](src/config.ts) — it's the only file you need to touch:

```ts
export const config = {
  yourName: "Alex",          // your name
  herName: "",               // optional — personalises the copy
  level: 2,                  // which "level" this unlocks
  notifyEmail: "you@example.com", // where the booking email is sent
  timeSlots: ["6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"],
  bookingWindowDays: 30,     // how far ahead she can book
  contactMethods: ["Text", "Call", "Instagram", "WhatsApp"],
};
```

## Run it locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build
```

## Deploy

It's a static site — the `dist/` folder is all you need.

- **Netlify** — connect the repo; `netlify.toml` already sets the build command
  and publish directory.
- **Vercel** — import the repo; framework preset "Vite" works out of the box.
- **GitHub Pages** — run `npm run build` and publish `dist/` (asset paths are
  relative, so it works under a project subpath).

Share the deployed link and let Level 2 begin. ♥
