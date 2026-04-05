"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { FileText, Loader2, ArrowLeft } from "lucide-react";
import { useLocale } from "@/components/locale-context";
import { localizedPath, defaultLocale } from "@/lib/i18n";

export default function ResetPasswordPage() {
  const locale = useLocale();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const resetLocale = locale || defaultLocale;
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${location.origin}/${resetLocale}/reset-password/update`,
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(
        "If an account exists, a password reset link was sent to your email."
      );
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 px-4 py-12">
      <div className="w-full max-w-md bg-background border border-border shadow-xl rounded-2xl p-8">
        <Link
          href={localizedPath(locale, "/login")}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to login
        </Link>

        <div className="flex flex-col items-center mb-8">
          <div className="bg-primary/10 p-2 rounded-xl mb-6">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Reset Password
          </h1>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Enter your email and we&apos;ll send you a recovery link
          </p>
        </div>

        {error && (
          <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md mb-6 text-center border border-destructive/20 font-medium">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm p-3 rounded-md mb-6 text-center border border-emerald-500/20 font-medium">
            {success}
          </div>
        )}

        <form onSubmit={handleReset} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="name@example.com"
            />
          </div>

          <button
            type="submit"
            disabled={loading || success !== null}
            className="w-full py-2.5 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md shadow transition-colors flex items-center justify-center mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Send Recovery Link"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
