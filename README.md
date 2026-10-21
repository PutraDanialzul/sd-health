# SD Health

SD Health is a healthcare companion web application built with Next.js and TypeScript. It is designed as a demo platform for AI-assisted health guidance, appointment booking, symptom checking, insurance information, and image-based assessment workflows.

## Overview

The application presents a modern healthcare dashboard with a clean, mobile-friendly interface. Users can explore services such as:

- Symptom checker
- AI health assistant
- Appointment scheduling
- Image scanner
- Insurance coverage status
- Personal health history and profile management

The project is structured as a Next.js App Router application with a dashboard-centric layout and a set of user-facing healthcare modules.

## Features

### Symptom Checker
A guided symptom assessment page where users can describe symptoms and receive a preliminary assessment, recommendation, and caution notice.

### AI Assistant
A dedicated chatbot-style section for health-related questions and guidance.

### Appointment Booking
A booking and scheduling experience for viewing upcoming appointments and healthcare services.

### Image Scanner
An image-based assessment workflow for healthcare-related visual checks.

### Insurance Coverage
Status cards and coverage information for active insurance support.

### Dashboard
A summary landing page that provides quick access to core healthcare services and upcoming appointment details.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Lucide React icons

## Project Structure

```bash
sd-health/
├── app/
│   ├── (app)/
│   │   ├── appointments/
│   │   ├── chatbot/
│   │   ├── dashboard/
│   │   ├── history/
│   │   ├── image-scanner/
│   │   ├── insurance/
│   │   ├── profile/
│   │   ├── settings/
│   │   ├── symptom-checker/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── .gitignore
├── LICENSE
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

### Production build

```bash
npm run build
npm run start
```

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint checks
npm run lint:fix # Auto-fix ESLint issues
```

## Notes

This repository appears to be a frontend prototype/demo for a healthcare platform rather than a full production medical system. It focuses on user experience, navigation, and healthcare service flows rather than backend integration or real medical data processing.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
