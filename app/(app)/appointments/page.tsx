"use client";

import { useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  UserRound,
} from "lucide-react";

export default function AppointmentsPage() {
  const [booked, setBooked] = useState(false);

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">
          Appointments
        </h1>

        <p className="mt-2 text-slate-500">
          Schedule and manage your healthcare
          consultations.
        </p>
      </section>

      {/* Upcoming Appointment */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold">
          Upcoming Appointment
        </h2>

        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-3">
            <UserRound
              size={18}
              className="text-[#005BAC]"
            />
            <span>Dr. Farah Ahmad</span>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays
              size={18}
              className="text-[#005BAC]"
            />
            <span>25 October 2026</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock
              size={18}
              className="text-[#005BAC]"
            />
            <span>10:00 AM</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin
              size={18}
              className="text-[#005BAC]"
            />
            <span>
              Sime Darby Medical Centre
            </span>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold">
          Book New Appointment
        </h2>

        <div className="mt-5 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Doctor
            </label>

            <select className="w-full rounded-2xl border border-slate-300 p-3">
              <option>
                Dr. Farah Ahmad
              </option>

              <option>
                Dr. Michael Tan
              </option>

              <option>
                Dr. Lim Wei Hong
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Date
            </label>

            <input
              type="date"
              className="w-full rounded-2xl border border-slate-300 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Time
            </label>

            <select className="w-full rounded-2xl border border-slate-300 p-3">
              <option>09:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>02:00 PM</option>
              <option>03:00 PM</option>
            </select>
          </div>

          <button
            onClick={() => setBooked(true)}
            className="w-full rounded-2xl bg-[#005BAC] py-3 font-semibold text-white"
          >
            Book Appointment
          </button>
        </div>
      </section>

      {booked && (
        <section className="rounded-3xl border border-green-200 bg-green-50 p-6">
          <h2 className="font-semibold text-green-700">
            Appointment Confirmed
          </h2>

          <p className="mt-2 text-sm text-green-700">
            Your appointment has been successfully
            booked. A confirmation will be sent to
            your registered account.
          </p>
        </section>
      )}
    </div>
  );
}