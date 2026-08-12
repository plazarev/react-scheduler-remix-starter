# DHTMLX React Scheduler with Remix (React Router v7)
 
A quick-start demo of **DHTMLX React Scheduler** integrated into a **Remix** application using **React Router v7**. Built with React 19, TypeScript, and Tailwind CSS — includes Docker support for containerized deployment.
 
**Related tutorial**: [React Scheduler + Remix integration guide](https://docs.dhtmlx.com/scheduler/integrations/react/remix/)

## What is DHTMLX React Scheduler with Remix Starter
 
This starter shows how to embed DHTMLX React Scheduler inside a Remix (React Router v7) application. The key challenge with Remix is its server-side rendering model: DHTMLX Scheduler is a browser-only component, so the demo shows how to handle SSR safely by isolating the Scheduler into a dedicated component that renders only on the client.
 
The Scheduler is configured through React props passed from the route, keeping the integration clean and the component reusable. Data is loaded from a static seed file, giving you a working calendar with day, week, and month views, drag-and-drop event management, and TypeScript types throughout.
 
The repo also includes a Dockerfile, making it straightforward to containerize and deploy the app.
 
## When to Use
 
- Use this demo when building a Remix or React Router v7 application that needs a full-featured event scheduling UI.
- Use this when you need a starting point that already handles the SSR/client-only rendering boundary for DHTMLX Scheduler in Remix.
- Use this as a reference for wiring DHTMLX Scheduler configuration through React props in a route-driven architecture.
- Use this when you want a containerized scheduler app with Docker support included from the start.

## Quick Start
 
```bash
git clone https://github.com/DHTMLX/react-scheduler-remix-starter
cd react-scheduler-remix-starter
npm install
npm run dev
```
 
Open [http://localhost:5173](http://localhost:5173) in your browser.
 
### Production build
 
```bash
npm run build
npm start
```
 
### Docker
 
```bash
docker build -t dhx-scheduler-remix .
docker run -p 3000:3000 dhx-scheduler-remix
```
 
## Architecture
 
```
├── app/
│   ├── routes/
│   │   └── home.tsx          # Main route — loads data, passes config to Scheduler
│   ├── root.tsx              # Root layout and global styles
│   ├── routes.ts             # React Router route configuration
│   └── app.css               # Global styles and Tailwind configuration
├── components/
│   └── Scheduler/
│       └── Scheduler.tsx     # Client-only Scheduler component wrapper
├── data/
│   └── demoData.ts           # Seed events dataset
├── Dockerfile                # Container configuration
├── react-router.config.ts    # React Router / Remix configuration
└── vite.config.ts            # Vite build configuration
```
 
The route (`home.tsx`) owns the data and config. It passes events and view settings as props to `Scheduler.tsx`, which handles the DHTMLX Scheduler initialization as a client-side-only component. This keeps Remix's SSR layer clean and free of browser API calls.
 
## Key Patterns
 
- **Client-only Scheduler wrapper** — `Scheduler.tsx` is isolated as a client component to avoid SSR errors from Scheduler's DOM-dependent initialization. This is the critical pattern for using DHTMLX Scheduler in any SSR framework.
- **Props-driven configuration** — Scheduler views, events, and options are passed as React props from the route, making the component reusable and testable without touching Scheduler internals directly.
- **Route-as-data-owner** — event data lives in `home.tsx` (the route), following Remix conventions. Swapping the static seed for a `loader` function that fetches from a real API requires minimal changes.
- **Dockerfile included** — the repo ships a production-ready Dockerfile, so containerizing for deployment does not require additional setup.

## Features
 
| Feature | Details |
|---|---|
| Scheduler views | Day, week, and month views |
| Drag-and-drop | Interactive event rescheduling |
| SSR-safe integration | Client-only component wrapper for Remix compatibility |
| Props-driven config | Scheduler configured through React props from the route |
| TypeScript | Full type coverage for events and Scheduler config |
| Tailwind CSS | Utility-first styling for layout and custom UI |
| Docker | Dockerfile included for containerized deployment |
| React 19 | Built on the latest React release |
| React Router v7 | Uses current Remix / React Router architecture |
 
## Production Notes
 
This demo is a starter, not a production-ready application. Before going to production:
 
- **Replace static data** — `demoData.ts` is a seed file. Replace it with a Remix `loader` function that fetches events from a real API or database.
- **Add error boundaries** — Remix supports route-level error boundaries; add them around the Scheduler route for graceful failure handling.
- **Session and auth** — no authentication is included. Add Remix session management if the scheduler data is user-specific.
- **Scheduler license** — DHTMLX React Scheduler requires a valid commercial license for production use (see License section below).

## Related Resources
 
- [DHTMLX React Scheduler product page](https://dhtmlx.com/docs/products/dhtmlxScheduler-for-React/)
- [DHTMLX Scheduler product page](https://dhtmlx.com/docs/products/dhtmlxScheduler/)
- [DHTMLX Scheduler documentation](https://docs.dhtmlx.com/scheduler/)
- [DHTMLX Scheduler React integration guide](https://docs.dhtmlx.com/scheduler/react.html)
- [React Router v7 documentation](https://reactrouter.com/home)
- [DHTMLX blog](https://dhtmlx.com/blog/)
- [Community forum](https://forum.dhtmlx.com/)
- [Report an issue](https://github.com/DHTMLX/react-scheduler-remix-starter/issues)

## License
 
The source code in this repository is released under the **MIT License**.
 
**Commercial License**
Required for proprietary or commercial applications. Includes access to PRO features, dedicated technical support, and long-term maintenance.
[Learn more →](https://dhtmlx.com/docs/products/dhtmlxScheduler-for-React/#licensing)

**Try before you buy**
A free evaluation of DHTMLX React Gantt is available — no credit card required.
[Start your evaluation →](https://dhtmlx.com/docs/products/dhtmlxScheduler-for-React/download.shtml)
