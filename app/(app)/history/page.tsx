import {
  Calendar,
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
    },
    {
      title: "Headache Consultation",
      date: "18 October 2026",
      type: "AI Assistant",
      icon: <MessageSquare size={20} />,
    },
    {
      title: "Skin Rash Analysis",
      date: "15 October 2026",
      type: "Image Scanner",
      icon: <Stethoscope size={20} />,
    },
    {
      title: "Appointment Booking",
      date: "14 October 2026",
      type: "Appointment",
      icon: <Calendar size={20} />,
    },
  ];

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">
          Health History
        </h1>

        <p className="mt-2 text-slate-500">
          Review previous healthcare interactions.
        </p>
      </section>

      <section className="space-y-4">
        {history.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#005BAC]">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.type}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {item.date}
                  </p>
                </div>
              </div>

              <ChevronRight
                size={18}
                className="text-slate-400"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}