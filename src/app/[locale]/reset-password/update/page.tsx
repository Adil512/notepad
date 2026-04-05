"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useLocale } from "@/components/locale-context";
import { localizedPath } from "@/lib/i18n";

export default function UpdatePasswordPage() {
  const locale = useLocale();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (!supabase) {
      setError("Password update is not configured for this deployment.");
      setLoading(false);
      return;
    }
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push(localizedPath(locale, "/login"));
    router.refresh();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 px-4 py-12">
      <div className="w-full max-w-md bg-background border border-border shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-semibold text-foreground mb-2">
          Set new password
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          Enter a new password for your account.
        </p>
        {!supabase && (
          <div className="bg-amber-500/10 text-amber-950 dark:text-amber-100 text-sm p-3 rounded-md mb-4 border border-amber-500/25">
            This action requires Supabase environment variables on the server.
          </div>
        )}
        {error && (
          <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md mb-4 border border-destructive/20">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
            className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={loading || !supabase}
            className="w-full py-2.5 px-4 bg-primary text-primary-foreground rounded-md font-medium disabled:opacity-70 flex items-center justify-center"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Update password"
            )}
          </button>
        </form>
        <Link
          href={localizedPath(locale, "/login")}
          className="text-sm text-primary mt-4 inline-block hover:underline"
        >
          Back to login
        </Link>
      </div>
    </div>
  );
}
