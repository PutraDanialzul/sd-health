"use client";

import { useState } from "react";
import {
  AlertCircle,
  Search,
  Sparkles,
  Stethoscope,
  Activity,
  Shield,
} from "lucide-react";

export default function SymptomCheckerPage() {
  const [symptoms, setSymptoms] = useState("");
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="overflow-hidden rounded-[32px] bg-gradient-to-br from-[#005BAC] to-[#00A3E0] p-8 text-white md:p-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
            <Sparkles size={16} />
            AI Diagnostic Assistant
          </div>

          <h1 className="mt-5 text-4xl font-bold">
            Symptom Checker
          </h1>

          <p className="mt-4 text-blue-50">
            Describe your symptoms and receive
            AI-assisted preliminary guidance to help
            understand potential health concerns.
          </p>
        </div>
      </section>

      {/* Input Card */}
      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#005BAC]">
            <Stethoscope size={24} />
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Describe Your Symptoms
            </h2>

            <p className="text-sm text-slate-500">
              Provide as much detail as possible for
              a better assessment.
            </p>
          </div>
        </div>

        <textarea
          value={symptoms}
          onChange={(e) =>
            setSymptoms(e.target.value)
          }
          placeholder="Example: Fever, headache, sore throat, body aches for the past 2 days..."
          className="min-h-[180px] w-full rounded-3xl border border-slate-300 p-5 outline-none transition focus:border-[#005BAC]"
        />

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => setShowResult(true)}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#005BAC] px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-[#004b8c]"
          >
            <Search size={18} />
            Analyze Symptoms
          </button>

          <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-600">
            <Shield size={16} />
            Secure & Private Assessment
          </div>
        </div>
      </section>

      {/* Results */}
      {showResult && (
        <>
          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#005BAC]">
                <Activity size={22} />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  Preliminary Assessment
                </h2>

                <p className="text-sm text-slate-500">
                  AI-generated health guidance
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5">
                <p className="text-sm text-slate-500">
                  Possible Condition
                </p>

                <p className="mt-2 text-xl font-semibold text-slate-900">
                  Common Cold
                </p>
              </div>

              <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5">
                <p className="text-sm text-slate-500">
                  Confidence Score
                </p>

                <p className="mt-2 text-xl font-semibold text-[#005BAC]">
                  82%
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-semibold text-green-700">
                Recommended Action
              </h3>

              <p className="mt-3 text-green-800">
                Rest, stay hydrated, and monitor
                symptoms. Consider consulting a
                healthcare professional if symptoms
                worsen, persist, or new symptoms
                develop.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <AlertCircle
                size={20}
                className="mt-0.5 shrink-0 text-amber-600"
              />

              <div>
                <p className="font-medium text-amber-800">
                  Medical Disclaimer
                </p>

                <p className="mt-1 text-sm text-amber-700">
                  This assessment is AI-generated and
                  should not be considered a medical
                  diagnosis. Always seek professional
                  medical advice for healthcare
                  concerns.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}