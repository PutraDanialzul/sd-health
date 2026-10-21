import Link from "next/link";
import {
  ArrowRight,
  Brain,
  CalendarDays,
  Camera,
  Shield,
  Stethoscope,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <h1 className="text-2xl font-bold text-[#005BAC]">
              SD Health
            </h1>

            <p className="text-sm text-slate-500">
              Healthcare Companion
            </p>
          </div>

          <Link
            href="/dashboard"
            className="rounded-2xl bg-[#005BAC] px-5 py-3 text-sm font-semibold text-white shadow-sm"
          >
            Demo
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-5 pt-8">
        <div className="rounded-[32px] bg-gradient-to-br from-[#005BAC] to-[#00A3E0] p-8 text-white">
          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-xs font-medium">
            Sime Darby Healthcare Innovation
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight">
            Smarter
            <br />
            Healthcare
          </h1>

          <p className="mt-4 text-base leading-relaxed text-blue-50">
            AI-powered healthcare guidance,
            appointment booking, image analysis
            and insurance support.
          </p>

          <Link
            href="/dashboard"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-[#005BAC]"
          >
            Get Started

            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-10">
        <h2 className="mb-5 text-2xl font-bold">
          Core Features
        </h2>

        <div className="space-y-4">
          <FeatureCard
            icon={<Stethoscope size={24} />}
            title="Symptom Checker"
            description="Receive AI-assisted symptom guidance."
          />

          <FeatureCard
            icon={<Brain size={24} />}
            title="AI Health Assistant"
            description="Ask health-related questions instantly."
          />

          <FeatureCard
            icon={<CalendarDays size={24} />}
            title="Appointment Booking"
            description="Book consultations quickly and easily."
          />

          <FeatureCard
            icon={<Camera size={24} />}
            title="Image Scanner"
            description="Upload images for AI-assisted assessment."
          />

          <FeatureCard
            icon={<Shield size={24} />}
            title="Insurance Coverage"
            description="Access your healthcare benefits information."
          />
        </div>
      </section>

      {/* Stats */}
      <section className="px-5 pb-10">
        <div className="grid grid-cols-2 gap-4">
          <StatCard
            value="24/7"
            label="AI Support"
          />

          <StatCard
            value="100+"
            label="Providers"
          />

          <StatCard
            value="Fast"
            label="Assessment"
          />

          <StatCard
            value="Smart"
            label="Healthcare"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-10">
        <div className="rounded-[32px] bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold">
            Experience SD Health
          </h2>

          <p className="mt-3 text-slate-500">
            Explore the healthcare platform demo.
          </p>

          <Link
            href="/dashboard"
            className="mt-6 inline-block rounded-2xl bg-[#005BAC] px-6 py-3 font-semibold text-white"
          >
            Launch Demo
          </Link>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#005BAC]">
          {icon}
        </div>

        <div>
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </div>
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
    <div className="rounded-3xl bg-white p-6 text-center shadow-sm">
      <p className="text-3xl font-bold text-[#005BAC]">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-500">
        {label}
      </p>
    </div>
  );
}