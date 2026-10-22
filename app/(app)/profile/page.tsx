import {
  Calendar,
  Droplet,
  Mail,
  Phone,
  User,
  Shield,
  HeartPulse,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="mt-2 text-slate-500">
          Personal healthcare information and medical overview.
        </p>
      </section>

      {/* Profile Hero */}
      <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#005BAC] to-[#00A3E0] p-8 text-white">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 text-3xl font-bold backdrop-blur">
            P
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Putra Danial
            </h2>

            <p className="mt-2 text-blue-100">
              SD Health Member
            </p>

            <div className="mt-4 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
              Premium Healthcare Coverage Active
            </div>
          </div>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="grid gap-4 md:grid-cols-3">
        <SummaryCard
          icon={<Droplet size={22} />}
          title="Blood Type"
          value="O+"
        />

        <SummaryCard
          icon={<Shield size={22} />}
          title="Allergies"
          value="None"
        />

        <SummaryCard
          icon={<HeartPulse size={22} />}
          title="Conditions"
          value="Healthy"
        />
      </section>

      {/* Details */}
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="mb-5 text-lg font-semibold">
            Personal Information
          </h2>

          <div className="space-y-4">
            <InfoRow
              icon={<User size={18} />}
              label="Age"
              value="19 Years Old"
            />

            <InfoRow
              icon={<Calendar size={18} />}
              label="Date of Birth"
              value="01 January 2007"
            />

            <InfoRow
              icon={<Mail size={18} />}
              label="Email"
              value="putra@example.com"
            />

            <InfoRow
              icon={<Phone size={18} />}
              label="Phone"
              value="+60 12-345 6789"
            />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="mb-5 text-lg font-semibold">
            Medical Information
          </h2>

          <div className="space-y-4">
            <InfoRow
              icon={<Droplet size={18} />}
              label="Blood Type"
              value="O+"
            />

            <InfoRow
              icon={<Droplet size={18} />}
              label="Allergies"
              value="None Reported"
            />

            <InfoRow
              icon={<Droplet size={18} />}
              label="Chronic Conditions"
              value="None Reported"
            />
          </div>
        </div>
      </section>

      {/* Health Status */}
      <section className="rounded-3xl border border-green-200 bg-green-50 p-6">
        <div className="flex items-center gap-3">
          <HeartPulse className="text-green-700" />

          <h2 className="font-semibold text-green-700">
            Health Status
          </h2>
        </div>

        <p className="mt-3 text-green-700">
          No active health concerns reported. Medical records indicate normal health status.
        </p>
      </section>
    </div>
  );
}

function SummaryCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-blue-100 bg-blue-50 p-5">
      <div className="text-[#005BAC]">
        {icon}
      </div>

      <p className="mt-4 text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-1 text-xl font-semibold">
        {value}
      </p>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
      <div className="text-[#005BAC]">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {label}
        </p>

        <p className="font-medium">
          {value}
        </p>
      </div>
    </div>
  );
}