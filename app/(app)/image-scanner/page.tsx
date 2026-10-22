"use client";

import { useState } from "react";
import {
  AlertCircle,
  Camera,
  CheckCircle,
  Shield,
  Upload,
} from "lucide-react";

export default function ImageScannerPage() {
  const [analyzed, setAnalyzed] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#005BAC]">
          <Camera size={16} />
          AI Imaging Assistant
        </div>

        <h1 className="mt-4 text-3xl font-bold">
          Medical Image Scanner
        </h1>

        <p className="mt-3 max-w-2xl text-slate-500">
          Upload healthcare images for AI-assisted
          preliminary analysis and recommendations.
        </p>
      </section>

      {/* Upload Card */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="rounded-3xl border-2 border-dashed border-blue-200 bg-blue-50/50 p-10 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
            <Camera
              size={40}
              className="text-[#005BAC]"
            />
          </div>

          <h2 className="mt-6 text-xl font-semibold">
            Upload Medical Image
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
            Supported examples include skin conditions,
            redness, irritation, rashes, and other
            approved healthcare images.
          </p>

          <button
            onClick={() => setAnalyzed(true)}
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#005BAC] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#004a8f]"
          >
            <Upload size={18} />
            Upload Image
          </button>
        </div>
      </section>

      {/* Process Overview */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-bold text-[#005BAC]">
            1
          </div>

          <h3 className="mt-4 font-semibold">
            Upload
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Submit a supported healthcare image.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-bold text-[#005BAC]">
            2
          </div>

          <h3 className="mt-4 font-semibold">
            Analyze
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            AI evaluates patterns and visual indicators.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-bold text-[#005BAC]">
            3
          </div>

          <h3 className="mt-4 font-semibold">
            Review
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Receive preliminary findings and guidance.
          </p>
        </div>
      </section>

      {/* Analysis Results */}
      {analyzed && (
        <>
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
                <CheckCircle
                  size={22}
                  className="text-green-600"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  Analysis Complete
                </h2>

                <p className="text-sm text-slate-500">
                  AI-assisted assessment generated
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm font-medium text-slate-500">
                  Detected Condition
                </p>

                <p className="mt-2 text-lg font-semibold text-slate-900">
                  Mild Dermatitis
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <p className="text-sm font-medium text-slate-500">
                  Confidence Score
                </p>

                <p className="mt-2 text-lg font-semibold text-[#005BAC]">
                  78%
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-5">
              <div className="flex items-center gap-2">
                <Shield
                  size={18}
                  className="text-green-600"
                />

                <p className="font-semibold text-green-700">
                  Recommendation
                </p>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-green-700">
                Monitor the affected area and consult a
                healthcare professional if symptoms
                worsen or persist. Maintain proper skin
                care and avoid irritants where possible.
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
            <div className="flex gap-3">
              <AlertCircle
                size={20}
                className="mt-0.5 shrink-0 text-amber-600"
              />

              <div>
                <p className="font-medium text-amber-800">
                  Medical Disclaimer
                </p>

                <p className="mt-1 text-sm leading-relaxed text-amber-700">
                  This assessment is generated for
                  demonstration purposes only and should
                  not be considered a medical diagnosis.
                  Always seek qualified healthcare advice
                  for medical concerns.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}