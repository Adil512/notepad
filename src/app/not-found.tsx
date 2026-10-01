import { Header } from "@/components/Header";
import { AdminFooterGate } from "@/components/AdminFooterGate";
import { LocaleProvider } from "@/components/locale-context";
import { NotFoundContent } from "@/components/NotFoundContent";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function NotFound() {
  return (
    <LocaleProvider locale="en">
      <div className="flex flex-col min-h-screen">
        <Header user={null} />
        <main className="flex-1 flex flex-col min-h-0">
          <NotFoundContent />
        </main>
        <AdminFooterGate locale="en" />
        <ScrollToTop />
      </div>
    </LocaleProvider>
  );
}
