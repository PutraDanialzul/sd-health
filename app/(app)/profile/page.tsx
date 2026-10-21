import {
  Calendar,
  Droplet,
  Mail,
  Phone,
  User,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="mt-2 text-slate-500">
          Personal healthcare information.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#005BAC] text-2xl font-bold text-white">
            P
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Putra Danial
            </h2>

            <p className="text-slate-500">
              SD Health Member
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="mb-5 font-semibold">
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
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="mb-5 font-semibold">
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
      </section>

      <section className="rounded-3xl border border-green-200 bg-green-50 p-6">
        <h2 className="font-semibold text-green-700">
          Health Status
        </h2>

        <p className="mt-2 text-green-700">
          No active health concerns reported.
        </p>
      </section>
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