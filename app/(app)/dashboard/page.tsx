import Link from "next/link";
import {
  CalendarDays,
  Camera,
  MessageSquare,
  Shield,
  Stethoscope,
  ChevronRight,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-r from-[#005BAC] to-[#00A3E0] p-6 text-white">
        <p className="text-blue-100">
          Welcome to SD Health
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Healthcare Made Simpler
        </h1>

        <p className="mt-3 max-w-md text-blue-50">
          Access healthcare guidance, appointments,
          insurance information and AI-assisted support
          from one platform.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">
          Health Services
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <ServiceCard
            title="Symptom Checker"
            icon={<Stethoscope size={24} />}
            href="/symptom-checker"
          />

          <ServiceCard
            title="AI Assistant"
            icon={<MessageSquare size={24} />}
            href="/chatbot"
          />

          <ServiceCard
            title="Image Scanner"
            icon={<Camera size={24} />}
            href="/image-scanner"
          />

          <ServiceCard
            title="Appointments"
            icon={<CalendarDays size={24} />}
            href="/appointments"
          />
        </div>
      </section>

      <Link
        href="/appointments"
        className="block rounded-3xl border border-slate-200 bg-white p-6 transition hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">
              Upcoming Appointment
            </h2>

            <div className="mt-4">
              <p className="font-medium">
                Dr. Farah Ahmad
              </p>

              <p className="text-sm text-slate-500">
                General Practitioner
              </p>

              <p className="mt-3 text-sm">
                25 October 2026 • 10:00 AM
              </p>
            </div>
          </div>

          <ChevronRight />
        </div>
      </Link>

      <Link
        href="/insurance"
        className="block rounded-3xl border border-green-200 bg-green-50 p-6 transition hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">
              Insurance Status
            </p>

            <h3 className="mt-1 font-semibold text-green-700">
              Active Coverage
            </h3>
          </div>

          <Shield
            size={24}
            className="text-green-700"
          />
        </div>
      </Link>
    </div>
  );
}

function ServiceCard({
  title,
  icon,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#005BAC]">
        {icon}
      </div>

      <h3 className="mt-4 font-semibold">
        {title}
      </h3>
    </Link>
  );
}