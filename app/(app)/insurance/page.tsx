import {
  Building2,
  CheckCircle,
  CreditCard,
  Shield,
} from "lucide-react";

export default function InsurancePage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">
          Insurance Coverage
        </h1>

        <p className="mt-2 text-slate-500">
          View your healthcare coverage and available
          benefits.
        </p>
      </section>

      <section className="rounded-3xl border border-green-200 bg-green-50 p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-slate-500">
              Coverage Status
            </p>

            <h2 className="mt-2 text-xl font-semibold text-green-700">
              Active Coverage
            </h2>

            <p className="mt-2 text-sm text-green-700">
              Sime Darby Corporate Healthcare Plan
            </p>
          </div>

          <Shield
            size={28}
            className="text-green-700"
          />
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="mb-5 text-lg font-semibold">
          Coverage Summary
        </h2>

        <div className="space-y-4">
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

      <section className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-3">
          <CreditCard className="text-[#005BAC]" />
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

      <section className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center gap-3">
          <Building2 className="text-[#005BAC]" />

          <h2 className="font-semibold">
            Participating Healthcare Providers
          </h2>
        </div>

        <div className="space-y-4">
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
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
      <span>{title}</span>

      <div className="flex items-center gap-2 text-green-600">
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
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="font-medium">
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
    <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-medium">
        {value}
      </span>
    </div>
  );
}