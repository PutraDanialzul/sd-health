import Link from "next/link";
import {
  CalendarDays,
  Camera,
  ChevronRight,
  MessageSquare,
  Shield,
  Stethoscope,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="rounded-[32px] bg-gradient-to-br from-[#005BAC] via-[#0077CC] to-[#00A3E0] p-8 text-white md:p-10">
        <p className="font-medium text-blue-100">
          Welcome to SD Health
        </p>

        <h1 className="mt-3 text-3xl font-bold md:text-4xl">
          Healthcare Made Simpler
        </h1>

        <p className="mt-4 max-w-2xl text-blue-50">
          Access healthcare guidance, appointments,
          insurance information and AI-assisted support
          from one platform.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <div className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
            AI Powered
          </div>

          <div className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
            Insurance Integrated
          </div>

          <div className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
            24/7 Support
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            value="24/7"
            label="AI Support"
          />

          <StatCard
            value="100+"
            label="Providers"
          />

          <StatCard
            value="95%"
            label="Coverage Access"
          />

          <StatCard
            value="4"
            label="Core Services"
          />
        </div>
      </section>

      {/* Services */}
      <section>
        <h2 className="mb-5 text-xl font-semibold">
          Health Services
        </h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <ServiceCard
            title="Symptom Checker"
            description="AI health assessment"
            icon={<Stethoscope size={24} />}
            href="/symptom-checker"
            color="blue"
          />

          <ServiceCard
            title="AI Assistant"
            description="Healthcare guidance"
            icon={<MessageSquare size={24} />}
            href="/chatbot"
            color="purple"
          />

          <ServiceCard
            title="Image Scanner"
            description="Medical image analysis"
            icon={<Camera size={24} />}
            href="/image-scanner"
            color="cyan"
          />

          <ServiceCard
            title="Appointments"
            description="Book consultations"
            icon={<CalendarDays size={24} />}
            href="/appointments"
            color="amber"
          />
        </div>
      </section>

      {/* Information Cards */}
      <section className="grid gap-5 lg:grid-cols-2">
        <Link
          href="/appointments"
          className="rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 transition hover:shadow-lg"
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-semibold text-slate-900">
                Upcoming Appointment
              </h2>

              <div className="mt-4">
                <p className="text-lg font-semibold">
                  Dr. Farah Ahmad
                </p>

                <p className="text-sm text-slate-500">
                  General Practitioner
                </p>

                <div className="mt-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-[#005BAC]">
                  25 October 2026 • 10:00 AM
                </div>
              </div>
            </div>

            <ChevronRight className="text-slate-400" />
          </div>
        </Link>

        <Link
          href="/insurance"
          className="rounded-[28px] border border-green-200 bg-gradient-to-br from-green-50 to-white p-6 transition hover:shadow-lg"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-green-700">
                Insurance Status
              </p>

              <h3 className="mt-2 text-xl font-semibold text-green-800">
                Active Coverage
              </h3>

              <p className="mt-2 text-green-700">
                Sime Darby Healthcare Plan
              </p>

              <div className="mt-4 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                Coverage Active
              </div>
            </div>

            <Shield
              size={28}
              className="text-green-700"
            />
          </div>
        </Link>
      </section>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  href,
  color,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: "blue" | "purple" | "cyan" | "amber";
}) {
  const styles = {
    blue: {
      card: "border-blue-100 bg-gradient-to-br from-blue-50 to-white",
      icon: "bg-blue-100 text-[#005BAC]",
    },
    purple: {
      card: "border-purple-100 bg-gradient-to-br from-purple-50 to-white",
      icon: "bg-purple-100 text-purple-700",
    },
    cyan: {
      card: "border-cyan-100 bg-gradient-to-br from-cyan-50 to-white",
      icon: "bg-cyan-100 text-cyan-700",
    },
    amber: {
      card: "border-amber-100 bg-gradient-to-br from-amber-50 to-white",
      icon: "bg-amber-100 text-amber-700",
    },
  };

  return (
    <Link
      href={href}
      className={`rounded-[28px] border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${styles[color].card}`}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${styles[color].icon}`}
      >
        {icon}
      </div>

      <h3 className="mt-5 font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>
    </Link>
  );
}

function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 text-center shadow-sm">
      <p className="text-3xl font-bold text-[#005BAC]">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-500">
        {label}
      </p>
    </div>
  );
}