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
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <h1 className="text-2xl font-bold text-[#005BAC]">
              SD Health
            </h1>

            <p className="text-sm text-slate-500">
              AI Healthcare Companion
            </p>
          </div>

          <Link
            href="/dashboard"
            className="rounded-2xl bg-[#005BAC] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#004b8c]"
          >
            Launch Demo
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 py-10 md:py-14">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#005BAC] to-[#00A3E0] px-8 py-14 text-white md:px-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-xs font-medium">
              Sime Darby Healthcare Innovation
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Smarter Healthcare,
              <br />
              Powered by AI
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-50 md:text-lg">
              AI-powered symptom assessment,
              appointment booking, healthcare guidance,
              insurance support and medical image analysis
              in one platform.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-[#005BAC]"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#features"
                className="inline-flex items-center rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-5 py-16"
      >
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Core Features
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Essential healthcare tools designed to improve
            accessibility and convenience.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard
            icon={<Stethoscope size={28} />}
            title="AI Symptom Checker"
            description="Receive preliminary health guidance based on reported symptoms."
          />

          <FeatureCard
            icon={<Brain size={28} />}
            title="AI Health Assistant"
            description="Ask health-related questions and receive helpful information."
          />

          <FeatureCard
            icon={<CalendarDays size={28} />}
            title="Appointment Booking"
            description="Find available consultation slots and schedule appointments."
          />

          <FeatureCard
            icon={<Camera size={28} />}
            title="Image Scanner"
            description="Upload supported healthcare images for AI-assisted assessment."
          />

          <FeatureCard
            icon={<Shield size={28} />}
            title="Insurance Coverage"
            description="Access healthcare benefits and participating providers."
          />
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
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
            label="Assessment Accuracy"
          />

          <StatCard
            value="Secure"
            label="Health Data"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 text-center">
          <h2 className="text-3xl font-bold">
            Experience SD Health Today
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-500">
            Explore the healthcare platform prototype
            and discover how AI can support smarter
            healthcare decisions.
          </p>

          <Link
            href="/dashboard"
            className="mt-6 inline-flex rounded-2xl bg-[#005BAC] px-7 py-3 font-semibold text-white"
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
    <div className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-[#005BAC]">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-500">
        {description}
      </p>
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
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <p className="text-3xl font-bold text-[#005BAC]">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-500">
        {label}
      </p>
    </div>
  );
}