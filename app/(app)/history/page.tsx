import {
  Calendar,
  Camera,
  ChevronRight,
  MessageSquare,
  Stethoscope,
} from "lucide-react";

export default function HistoryPage() {
  const history = [
    {
      title: "Flu Symptoms Assessment",
      date: "21 October 2026",
      type: "Symptom Checker",
      icon: <Stethoscope size={20} />,
      iconBg: "bg-blue-100",
      iconColor: "text-[#005BAC]",
      badge: "bg-blue-100 text-blue-700",
    },
    {
      title: "Headache Consultation",
      date: "18 October 2026",
      type: "AI Assistant",
      icon: <MessageSquare size={20} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700",
      badge: "bg-purple-100 text-purple-700",
    },
    {
      title: "Skin Rash Analysis",
      date: "15 October 2026",
      type: "Image Scanner",
      icon: <Camera size={20} />,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700",
      badge: "bg-amber-100 text-amber-700",
    },
    {
      title: "Appointment Booking",
      date: "14 October 2026",
      type: "Appointment",
      icon: <Calendar size={20} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-700",
      badge: "bg-green-100 text-green-700",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="rounded-3xl bg-gradient-to-r from-[#005BAC] to-[#00A3E0] p-6 text-white">
        <h1 className="text-3xl font-bold">
          Health History
        </h1>

        <p className="mt-3 max-w-2xl text-blue-50">
          View past healthcare activities, consultations,
          assessments and appointments in one place.
        </p>
      </section>

      {/* Summary */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-5">
          <p className="text-sm text-slate-500">
            Total Activities
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#005BAC]">
            {history.length}
          </h2>
        </div>

        <div className="rounded-3xl border border-purple-200 bg-purple-50 p-5">
          <p className="text-sm text-slate-500">
            Latest Activity
          </p>

          <h2 className="mt-2 font-semibold text-purple-700">
            21 Oct 2026
          </h2>
        </div>

        <div className="rounded-3xl border border-green-200 bg-green-50 p-5">
          <p className="text-sm text-slate-500">
            Status
          </p>

          <h2 className="mt-2 font-semibold text-green-700">
            Up to Date
          </h2>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative">
        <div className="absolute bottom-0 left-6 top-6 w-px bg-slate-200" />

        <div className="space-y-5">
          {history.map((item, index) => (
            <div
              key={index}
              className="relative pl-16"
            >
              {/* Timeline Node */}
              <div
                className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-white shadow-sm ${item.iconBg} ${item.iconColor}`}
              >
                {item.icon}
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${item.badge}`}
                      >
                        {item.type}
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-slate-500">
                      {item.date}
                    </p>
                  </div>

                  <ChevronRight
                    size={18}
                    className="text-slate-400"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}