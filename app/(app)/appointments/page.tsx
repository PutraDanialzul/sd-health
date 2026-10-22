"use client";

import { useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  UserRound,
  CheckCircle2,
} from "lucide-react";

export default function AppointmentsPage() {
  const [booked, setBooked] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold">
          Appointments
        </h1>

        <p className="mt-2 text-slate-500">
          Schedule and manage your healthcare consultations.
        </p>
      </section>

      {/* Upcoming Appointment */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#005BAC] via-[#0067C0] to-[#0078D4] p-6 text-white shadow-sm">
        <p className="text-sm text-blue-100">
          Upcoming Appointment
        </p>

        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Dr. Farah Ahmad
            </h2>

            <p className="mt-1 text-blue-100">
              General Practitioner
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center gap-2">
                <CalendarDays size={16} />

                <span className="text-sm">
                  25 October 2026
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center gap-2">
                <Clock size={16} />

                <span className="text-sm">
                  10:00 AM
                </span>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center gap-2">
                <MapPin size={16} />

                <span className="text-sm">
                  SDMC
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Book New Appointment
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Choose your preferred doctor, date and time.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Doctor
            </label>

            <select className="w-full rounded-2xl border border-slate-300 bg-white p-3 focus:border-[#005BAC] focus:outline-none">
              <option>Dr. Farah Ahmad</option>
              <option>Dr. Michael Tan</option>
              <option>Dr. Lim Wei Hong</option>
            </select>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Date
              </label>

              <input
                type="date"
                className="w-full rounded-2xl border border-slate-300 bg-white p-3 focus:border-[#005BAC] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Time
              </label>

              <select className="w-full rounded-2xl border border-slate-300 bg-white p-3 focus:border-[#005BAC] focus:outline-none">
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>02:00 PM</option>
                <option>03:00 PM</option>
              </select>
            </div>
          </div>

          <button
            onClick={() => setBooked(true)}
            className="w-full rounded-2xl bg-[#005BAC] py-3 font-semibold text-white transition hover:bg-[#004b8c]"
          >
            Book Appointment
          </button>
        </div>
      </section>

      {/* Confirmation */}
      {booked && (
        <section className="rounded-3xl border border-green-200 bg-green-50 p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2
              size={22}
              className="mt-0.5 shrink-0 text-green-600"
            />

            <div>
              <h2 className="font-semibold text-green-700">
                Appointment Confirmed
              </h2>

              <p className="mt-2 text-sm text-green-700">
                Your appointment has been successfully booked.
                A confirmation will be sent to your registered
                account with the appointment details.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}