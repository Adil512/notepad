import { createClient } from "@/utils/supabase/server";

export { getAdminEmails, isAdminEmail } from "@/lib/admin-email";

export async function getSessionUser() {
  const supabase = await createClient();
  if (!supabase) return null;
  const { data } = await supabase.auth.getUser();
  return data.user;
}
