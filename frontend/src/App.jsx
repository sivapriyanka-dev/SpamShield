import { useState } from "react";
import axios from "axios";
import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Sparkles,
} from "lucide-react";

export default function SpamShield() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePredict = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setError("");
    setResult("");

    try {
      const response = await axios.post("/predict/", { message });
      setResult(response.data.prediction);
    } catch (err) {
      setError("Unable to connect to detection service");
    } finally {
      setLoading(false);
    }
  };

  const spam = result.toLowerCase().includes("spam");

  return (
    <div className="min-h-screen bg-slate-100 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden grid md:grid-cols-2">
        <div className="p-10 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-white/15 backdrop-blur-sm">
              <Shield size={30} />
            </div>
            <h1 className="text-4xl font-bold">SpamShield</h1>
          </div>

          <p className="text-lg text-blue-100 leading-relaxed mb-8">
            Detect spam, phishing, and suspicious SMS messages instantly using
            machine learning.
          </p>

          <div className="space-y-4 text-blue-50">
            <div className="flex items-center gap-3">
              <Sparkles size={18} />
              <span>Fast real-time analysis</span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles size={18} />
              <span>ML-powered classification</span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles size={18} />
              <span>Simple and secure prediction API</span>
            </div>
          </div>
        </div>

        <div className="p-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Analyze Message
          </h2>
          <p className="text-slate-500 mb-6">
            Paste any suspicious SMS message below to check whether it looks
            like spam.
          </p>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Example: Congratulations! You won a free iPhone. Click now!"
            className="w-full h-56 rounded-2xl border border-slate-300 p-5 text-lg resize-none focus:outline-none focus:ring-4 focus:ring-blue-200"
          />

          <div className="flex gap-3 mt-5">
            <button
              onClick={handlePredict}
              disabled={loading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 rounded-2xl transition flex items-center justify-center gap-2 shadow-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Analyzing...
                </>
              ) : (
                <>
                  <Shield size={20} />
                  Predict Threat
                </>
              )}
            </button>

            <button
              onClick={() => {
                setMessage("");
                setResult("");
                setError("");
              }}
              className="px-6 rounded-2xl border border-slate-300 hover:bg-slate-100 transition"
            >
              Clear
            </button>
          </div>

          {result && (
            <div
              className={`mt-6 p-5 rounded-2xl flex items-center gap-3 font-semibold text-lg ${
                spam
                  ? "bg-red-50 text-red-700 border border-red-200"
                  : "bg-green-50 text-green-700 border border-green-200"
              }`}
            >
              {spam ? <AlertTriangle /> : <CheckCircle2 />}
              {result}
            </div>
          )}

          {error && (
            <div className="mt-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 font-medium">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
