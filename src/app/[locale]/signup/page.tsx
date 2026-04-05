"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FileText, Loader2 } from "lucide-react";
import { useLocale } from "@/components/locale-context";
import { localizedPath } from "@/lib/i18n";

export default function SignupPage() {
  const locale = useLocale();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const home = localizedPath(locale, "/");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    if (!supabase) {
      setError("Sign-up is not configured for this deployment.");
      setLoading(false);
      return;
    }

    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      if (data.session) {
        router.push(home);
        router.refresh();
      } else {
        setSuccess(
          "Registration successful! Please check your email to confirm your account."
        );
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 px-4 py-12">
      <div className="w-full max-w-md bg-background border border-border shadow-xl rounded-2xl p-8">
        <div className="flex flex-col items-center mb-8">
          <Link href={home} className="flex items-center gap-2 mb-6 group">
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <span className="font-display font-bold text-3xl tracking-tight">
              Notepad
            </span>
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Start saving your notes securely in the cloud
          </p>
        </div>

        {!supabase && (
          <div className="bg-amber-500/10 text-amber-950 dark:text-amber-100 text-sm p-3 rounded-md mb-6 border border-amber-500/25">
            Sign-up requires Supabase environment variables on the server.
          </div>
        )}

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

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Full Name</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="John Doe"
            />
          </div>
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
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Password{" "}
              <span className="text-muted-foreground font-normal">
                (min 6 characters)
              </span>
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading || success !== null || !supabase}
            className="w-full py-2.5 px-4 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md shadow transition-colors flex items-center justify-center mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-muted-foreground">Already have an account? </span>
          <Link
            href={localizedPath(locale, "/login")}
            className="text-primary font-medium hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
