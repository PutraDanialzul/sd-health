"use client";

import { useState } from "react";
import { AlertCircle, Search, Stethoscope } from "lucide-react";

export default function SymptomCheckerPage() {
  const [symptoms, setSymptoms] = useState("");
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold">
          Symptom Checker
        </h1>

        <p className="mt-2 text-slate-500">
          Describe your symptoms for AI-assisted guidance.
        </p>
      </section>

      {/* Input Card */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center gap-3">
          <Stethoscope
            className="text-[#005BAC]"
            size={24}
          />

          <h2 className="font-semibold">
            Describe Your Symptoms
          </h2>
        </div>

        <textarea
          value={symptoms}
          onChange={(e) =>
            setSymptoms(e.target.value)
          }
          placeholder="Example: Fever, headache, sore throat..."
          className="min-h-[150px] w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-[#005BAC]"
        />

        <button
          onClick={() => setShowResult(true)}
          className="mt-4 flex items-center gap-2 rounded-2xl bg-[#005BAC] px-6 py-3 font-semibold text-white"
        >
          <Search size={18} />
          Analyze Symptoms
        </button>
      </section>

      {/* Result */}
      {showResult && (
        <section className="rounded-3xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold">
            Preliminary Assessment
          </h2>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-blue-50 p-4">
              <p className="text-sm text-slate-500">
                Possible Condition
              </p>

              <p className="mt-1 font-semibold">
                Common Cold
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-4">
              <p className="text-sm text-slate-500">
                Confidence
              </p>

              <p className="mt-1 font-semibold">
                82%
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-4">
              <p className="text-sm text-slate-500">
                Recommendation
              </p>

              <p className="mt-1 font-medium">
                Rest, stay hydrated, and monitor
                symptoms. Consult a healthcare
                professional if symptoms worsen.
              </p>
            </div>
          </div>

          <div className="mt-5 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <AlertCircle
              size={20}
              className="shrink-0 text-amber-600"
            />

            <p className="text-sm text-amber-700">
              This is not a medical diagnosis.
              Consult a healthcare professional
              for medical advice.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}