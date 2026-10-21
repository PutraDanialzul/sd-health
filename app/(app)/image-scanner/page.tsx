"use client";

import { useState } from "react";
import {
  AlertCircle,
  Camera,
  CheckCircle,
  Upload,
} from "lucide-react";

export default function ImageScannerPage() {
  const [analyzed, setAnalyzed] = useState(false);

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold">
          Image Scanner
        </h1>

        <p className="mt-2 text-slate-500">
          Upload images for AI-assisted preliminary
          assessment.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 p-10">
          <Camera
            size={48}
            className="text-[#005BAC]"
          />

          <h2 className="mt-4 text-lg font-semibold">
            Upload Medical Image
          </h2>

          <p className="mt-2 text-center text-sm text-slate-500">
            Supported examples: skin conditions,
            visible rashes, redness, irritation,
            or other supported healthcare images.
          </p>

          <button
            onClick={() => setAnalyzed(true)}
            className="mt-6 flex items-center gap-2 rounded-2xl bg-[#005BAC] px-6 py-3 font-semibold text-white"
          >
            <Upload size={18} />
            Upload Image
          </button>
        </div>
      </section>

      {analyzed && (
        <>
          <section className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold">
              AI Analysis Result
            </h2>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-blue-50 p-4">
                <p className="text-sm text-slate-500">
                  Detected Condition
                </p>

                <p className="mt-1 font-semibold">
                  Mild Dermatitis
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-4">
                <p className="text-sm text-slate-500">
                  Confidence Score
                </p>

                <p className="mt-1 font-semibold">
                  78%
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle
                    size={18}
                    className="text-green-600"
                  />

                  <p className="font-medium text-green-700">
                    Recommendation
                  </p>
                </div>

                <p className="mt-2 text-sm text-green-700">
                  Monitor the affected area and
                  consult a healthcare professional
                  if symptoms worsen or persist.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex gap-3">
              <AlertCircle
                size={20}
                className="shrink-0 text-amber-600"
              />

              <p className="text-sm text-amber-700">
                This assessment is generated for
                demonstration purposes only and
                should not be considered a medical
                diagnosis.
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}