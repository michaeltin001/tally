# Tally

**Tally is a real-time tournament scheduling dashboard designed for FIRST LEGO League (FLL) events. It integrates seamlessly with Google Sheets to provide live schedule updates, pit locations, and upcoming matches to teams and organizers. The application has the following features:**
* Connect directly to a Google Sheet to fetch and display live tournament schedules.
* View real-time "Happening Now" and "On Deck" match and judging sessions.
* Filter the schedule by specific teams.
* Centralized view of all team pit locations.
* Built-in Tournament Schedule Generator with customizable parameters (fields, judging areas, lunch breaks, etc.).
* Export generated schedules to XLSX, PDF, and PNG formats.
* Multiple schedule viewing modes (Grid and List views).
* Toggleable Light, Dark, and System visual themes.

Tally was originally developed as a side project on the [Riverside STEM Foundation website](https://github.com/michaeltin001/rsf-website). The project has since been decoupled to function as a standalone utility. This allows for dedicated hosting and independent version control. The initial commit of this repository introduces a complete application with minimal changes from the original project. This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

<!-- Format: https://img.shields.io/badge/<TEXT>-<BACKGROUND_COLOR>?style=for-the-badge&logo=<LOGO_NAME>&logoColor=<LOGO_COLOR> -->

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/react-000000?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript&logoColor=407ACC)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-000000?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC)
![Headless UI](https://img.shields.io/badge/Headless_UI-000000?style=for-the-badge&logo=headlessui&logoColor=66E3FF)
![Framer](https://img.shields.io/badge/Framer-000000?style=for-the-badge&logo=framer&logoColor=0055FF)
![Lucide](https://img.shields.io/badge/Lucide-000000?style=for-the-badge&logo=lucide&logoColor=F56565)
![Node.js](https://img.shields.io/badge/Node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=5FA04E)
![npm](https://img.shields.io/badge/npm-000000?style=for-the-badge&logo=npm&logoColor=CB3837)
![ESLint](https://img.shields.io/badge/ESLint-000000?style=for-the-badge&logo=eslint&logoColor=4B3263)
![TOML](https://img.shields.io/badge/TOML-000000?style=for-the-badge&logo=toml&logoColor=9C4121)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-000000?style=for-the-badge&logo=github-actions&logoColor=2088FF)

## Installation

1. Clone the repository and navigate to the project folder directory.

```bash
git clone https://github.com/michaeltin001/tally.git
cd tally
```

2. Start the development server.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Overview

Tally operates primarily as a single-page dashboard application that centralizes all tournament information.

- [Home](#home)
- [Settings](#settings)
- [Tournament Schedule Generator](#tournament-schedule-generator)

### Home

The main dashboard displays real-time updates and the complete tournament schedule once connected to a data source.

* **Status Header:** Displays the current time, tournament date, and any active delays affecting the schedule.
* **Happening Now:** Shows all active events (matches, judging sessions) that are currently underway based on the current time.
* **On Deck:** Highlights upcoming events that are scheduled to start shortly, ensuring teams know when to prepare.
* **Tournament Schedule:** A chronological list of all events for the day. Each entry displays the event title, team name, team number, pit location, specific event code, and time slot.
* **View Schedule:** Opens a modal to preview the full master schedule in either a Grid or List format.

### Settings

Accessed via the "Settings" button, this modal provides configuration options to tailor the dashboard to your needs.

* **Data Source:** Connect your live tournament Google Sheet by providing its ID. This is the primary way to populate the dashboard with data.
* **Filter Teams:** Select one or multiple specific teams to filter the entire dashboard. When filtered, the "Happening Now", "On Deck", and "Tournament Schedule" sections will only show events relevant to those selected teams.
* **Pit Information:** A centralized directory listing the pit locations for all participating teams.
* **Theme:** Switch the application's appearance between Light, Dark, or System default themes.

### Tournament Schedule Generator

If you are an organizer and don't yet have a schedule, Tally includes a built-in generator to help you create one from scratch.

* **Configuration:** Set tournament parameters including base match periods, judging duration multipliers, number of fields, judging areas, rounds, and specific schedule blocks (like lunch breaks or opening ceremonies).
* **Team List:** Input your participating teams directly into the generator.
* **Preview Modes:** View the resulting generated schedule in an intuitive Grid layout or a chronological List view before finalizing.
* **Exporting:** Download the finalized schedule as an Excel spreadsheet (XLSX), PDF document, or PNG image, which you can then upload to Google Sheets to act as your live data source.