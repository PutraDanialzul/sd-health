"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Camera,
  History,
  Home,
  Menu,
  MessageSquare,
  Settings,
  Shield,
  Stethoscope,
  User,
  X,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Check",
    href: "/symptom-checker",
    icon: Stethoscope,
  },
  {
    name: "AI",
    href: "/chatbot",
    icon: MessageSquare,
  },
  {
    name: "Book",
    href: "/appointments",
    icon: Calendar,
  },
];

const moreItems = [
  {
    name: "Cover",
    href: "/insurance",
    icon: Shield,
  },
  {
    name: "Scan",
    href: "/image-scanner",
    icon: Camera,
  },
  {
    name: "History",
    href: "/history",
    icon: History,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 lg:grid lg:grid-cols-[280px_1fr]">
      {/* Desktop Sidebar */}
      <aside className="hidden border-r border-slate-200 bg-white lg:flex lg:flex-col">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-[#005BAC]">
            SD Health
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Healthcare Companion
          </p>
        </div>

        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            {[...navItems, ...moreItems].map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-4 rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-blue-50 hover:text-[#005BAC]"
                  >
                    <Icon size={20} />

                    <span className="font-medium">
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4">
          <div className="rounded-3xl bg-green-50 p-5">
            <p className="text-sm text-slate-500">
              Insurance Status
            </p>

            <p className="mt-2 font-semibold text-green-700">
              Active Coverage
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
          <div className="flex items-center justify-between px-5 py-4 lg:px-8">
            <div>
              <h2 className="text-lg font-semibold">
                Welcome Back 👋
              </h2>

              <p className="text-sm text-slate-500">
                Your health at a glance
              </p>
            </div>

            <Link
              href="/profile"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#005BAC] font-semibold text-white"
            >
              P
            </Link>
          </div>
        </header>
{/* Insurance Partners */}
<div className="border-b border-slate-200 bg-white">
  <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-5 py-3 text-sm font-medium text-slate-500">
    <a
      href="https://www.aia.com.my"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#005BAC]"
    >
      AIA
    </a>

    <a
      href="https://www.prudential.com.my"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#005BAC]"
    >
      Prudential
    </a>

    <a
      href="https://www.greateasternlife.com/my"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#005BAC]"
    >
      Great Eastern
    </a>

    <a
      href="https://www.etiqa.com.my"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#005BAC]"
    >
      Etiqa
    </a>
  </div>
</div>
        <main className="flex-1 p-5 pb-24 lg:p-8">
          {children}
        </main>
      </div>

      {/* Mobile More Menu */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/30"
            onClick={() => setOpen(false)}
          />

          <div className="fixed bottom-20 left-4 right-4 z-50 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">
                More Options
              </h3>

              <button onClick={() => setOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {moreItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
                  >
                    <Icon size={18} />

                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white lg:hidden">
        <div className="grid grid-cols-5">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-1 py-3"
              >
                <Icon
                  size={20}
                  className="text-slate-600"
                />

                <span className="text-[11px] font-medium text-slate-600">
                  {item.name}
                </span>
              </Link>
            );
          })}

          <button
            onClick={() => setOpen(true)}
            className="flex flex-col items-center gap-1 py-3"
          >
            <Menu
              size={20}
              className="text-slate-600"
            />

            <span className="text-[11px] font-medium text-slate-600">
              More
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}