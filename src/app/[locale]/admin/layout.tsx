import { redirect } from "next/navigation";
import { getSessionUser, isAdminEmail } from "@/lib/admin-auth";
import { localizedPath } from "@/lib/i18n";
import { AdminShell } from "@/components/admin/AdminShell";

export default async function AdminSectionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const user = await getSessionUser();
  if (!user) {
    redirect(localizedPath(locale, "/login"));
  }
  if (!isAdminEmail(user.email)) {
    redirect(localizedPath(locale, "/"));
  }

  return (
    <AdminShell locale={locale} userEmail={user.email ?? ""}>
      {children}
    </AdminShell>
  );
}
