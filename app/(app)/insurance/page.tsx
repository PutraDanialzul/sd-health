import {
  Building2,
  CheckCircle,
  CreditCard,
  Shield,
} from "lucide-react";

export default function InsurancePage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-slate-900">
          Insurance Coverage
        </h1>

        <p className="mt-2 text-slate-500">
          View your healthcare benefits, participating
          providers, and coverage information.
        </p>
      </section>

      {/* Coverage Status */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 p-6 text-white shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-green-100">
              Coverage Status
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Active Coverage
            </h2>

            <p className="mt-2 text-green-100">
              Sime Darby Corporate Healthcare Plan
            </p>

            <div className="mt-5 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
              Coverage Valid Until 31 December 2026
            </div>
          </div>

          <div className="rounded-2xl bg-white/15 p-3">
            <Shield size={32} />
          </div>
        </div>
      </section>

      {/* Coverage Summary */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-semibold">
          Coverage Summary
        </h2>

        <div className="space-y-3">
          <CoverageItem
            title="General Consultation"
            covered="Covered"
          />

          <CoverageItem
            title="Specialist Consultation"
            covered="Covered"
          />

          <CoverageItem
            title="Diagnostic Imaging"
            covered="Covered"
          />

          <CoverageItem
            title="Dental Benefits"
            covered="Partial Coverage"
          />
        </div>
      </section>

      {/* Insurance Details */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-2">
            <CreditCard
              className="text-[#005BAC]"
              size={20}
            />
          </div>

          <h2 className="font-semibold">
            Insurance Information
          </h2>
        </div>

        <div className="mt-5 space-y-3">
          <InfoRow
            label="Member ID"
            value="SD-2026-102938"
          />

          <InfoRow
            label="Plan Type"
            value="Corporate Healthcare"
          />

          <InfoRow
            label="Coverage End Date"
            value="31 December 2026"
          />
        </div>
      </section>

      {/* Providers */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-2">
            <Building2
              className="text-[#005BAC]"
              size={20}
            />
          </div>

          <h2 className="font-semibold">
            Participating Healthcare Providers
          </h2>
        </div>

        <div className="space-y-3">
          <ProviderCard
            name="Sime Darby Medical Centre"
            location="Subang Jaya"
          />

          <ProviderCard
            name="SJMC Specialist Centre"
            location="Selangor"
          />

          <ProviderCard
            name="Health Plus Clinic"
            location="Kuala Lumpur"
          />
        </div>
      </section>
    </div>
  );
}

function CoverageItem({
  title,
  covered,
}: {
  title: string;
  covered: string;
}) {
  const partial = covered === "Partial Coverage";

  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <span className="font-medium">
        {title}
      </span>

      <div
        className={`flex items-center gap-2 ${
          partial
            ? "text-amber-600"
            : "text-green-600"
        }`}
      >
        <CheckCircle size={18} />

        <span className="font-medium">
          {covered}
        </span>
      </div>
    </div>
  );
}

function ProviderCard({
  name,
  location,
}: {
  name: string;
  location: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:bg-slate-100">
      <p className="font-medium text-slate-900">
        {name}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {location}
      </p>
    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-medium text-slate-900">
        {value}
      </span>
    </div>
  );
}