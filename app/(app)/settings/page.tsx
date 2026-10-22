import {
  Bell,
  ChevronRight,
  Globe,
  Lock,
  Moon,
  Shield,
  User,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-medium text-[#005BAC]">
          Preferences
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Settings
        </h1>

        <p className="mt-3 max-w-2xl text-slate-500">
          Manage your account preferences, privacy options,
          and healthcare application settings.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-[#005BAC] to-[#00A3E0] p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
            <User size={24} />
          </div>

          <div>
            <p className="text-blue-100">
              Current Account
            </p>

            <h2 className="text-xl font-semibold">
              SD Health Member
            </h2>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-semibold">
          Preferences
        </h2>

        <div className="space-y-3">
          <SettingItem
            icon={<Bell size={18} />}
            title="Notifications"
            description="Manage alerts and reminders"
          />

          <SettingItem
            icon={<Globe size={18} />}
            title="Language"
            description="Choose your preferred language"
          />

          <SettingItem
            icon={<Moon size={18} />}
            title="Appearance"
            description="Personalize display settings"
          />
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-semibold">
          Privacy & Security
        </h2>

        <div className="space-y-3">
          <SettingItem
            icon={<Lock size={18} />}
            title="Privacy Settings"
            description="Control account privacy options"
          />

          <SettingItem
            icon={<Shield size={18} />}
            title="Data Protection"
            description="Review healthcare data security"
          />
        </div>
      </section>

      <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
        <h2 className="font-semibold text-red-700">
          Account
        </h2>

        <p className="mt-2 text-sm text-red-600">
          Sign out from this device and securely end
          your current session.
        </p>

        <button className="mt-5 rounded-2xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700">
          Sign Out
        </button>
      </section>
    </div>
  );
}

function SettingItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <button className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:border-[#005BAC]/20 hover:bg-blue-50">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-[#005BAC]">
          {icon}
        </div>

        <div>
          <p className="font-medium text-slate-900">
            {title}
          </p>

          <p className="text-sm text-slate-500">
            {description}
          </p>
        </div>
      </div>

      <ChevronRight
        size={18}
        className="text-slate-400"
      />
    </button>
  );
}