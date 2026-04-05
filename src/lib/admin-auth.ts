import { createClient } from "@/utils/supabase/server";

export { getAdminEmails, isAdminEmail } from "@/lib/admin-email";

export async function getSessionUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
