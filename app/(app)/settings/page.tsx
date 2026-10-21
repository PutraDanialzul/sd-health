import {
  Bell,
  ChevronRight,
  Globe,
  Lock,
  Moon,
  Shield,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your preferences and account settings.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 font-semibold">
          Preferences
        </h2>

        <div className="space-y-3">
          <SettingItem
            icon={<Bell size={18} />}
            title="Notifications"
          />

          <SettingItem
            icon={<Globe size={18} />}
            title="Language"
          />

          <SettingItem
            icon={<Moon size={18} />}
            title="Appearance"
          />
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 font-semibold">
          Privacy & Security
        </h2>

        <div className="space-y-3">
          <SettingItem
            icon={<Lock size={18} />}
            title="Privacy Settings"
          />

          <SettingItem
            icon={<Shield size={18} />}
            title="Data Protection"
          />
        </div>
      </section>

      <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
        <h2 className="font-semibold text-red-700">
          Account
        </h2>

        <p className="mt-2 text-sm text-red-600">
          Sign Out
        </p>
      </section>
    </div>
  );
}

function SettingItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <button className="flex w-full items-center justify-between rounded-2xl bg-slate-50 p-4 text-left transition hover:bg-slate-100">
      <div className="flex items-center gap-3">
        <div className="text-[#005BAC]">
          {icon}
        </div>

        <span className="font-medium">
          {title}
        </span>
      </div>

      <ChevronRight size={18} />
    </button>
  );
}