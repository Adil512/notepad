import type { Metadata } from "next";
import Link from "next/link";
import { canonicalUrlForPage } from "@/lib/site";
import { localizedPath } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Terms of Service | Notepad.is",
    description:
      "Terms of Service for Notepad.is: rules for using our online notepad, accounts, acceptable use, and limitations.",
    alternates: { canonical: canonicalUrlForPage(locale, "/terms") },
    openGraph: { url: canonicalUrlForPage(locale, "/terms") },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const privacyHref = localizedPath(locale, "/privacy");

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight font-display mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: April 4, 2026 · Applies to: Notepad.is (including
          related subdomains, if any)
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-[15px]">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              1. Agreement to these Terms
            </h2>
            <p>
              These Terms of Service (“Terms”) govern your access to and use of
              the Notepad.is website, applications, and related services
              (collectively, the “Service”) operated by Notepad.is (“we,” “us,”
              or “our”). By accessing or using the Service, you agree to be bound
              by these Terms and our{" "}
              <Link
                href={privacyHref}
                className="text-primary hover:underline font-medium"
              >
                Privacy Policy
              </Link>
              . If you do not agree, do not use the Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              2. The Service
            </h2>
            <p>
              Notepad.is provides an online notepad and related writing tools.
              Features may change over time. We may suspend, limit, or discontinue
              any part of the Service with or without notice, except where
              prohibited by law.
            </p>
            <p>
              The Service is provided for lawful, personal, and professional use
              unless we expressly agree otherwise in writing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              3. Accounts
            </h2>
            <p>
              Some features may require an account. You are responsible for
              maintaining the confidentiality of your credentials and for all
              activity under your account. You must provide accurate information
              and notify us promptly of any unauthorized use.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              4. Acceptable use
            </h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use the Service in violation of applicable law or third-party
                rights;
              </li>
              <li>
                Attempt to gain unauthorized access to systems, data, or other
                users’ content;
              </li>
              <li>
                Distribute malware, spam, or engage in abusive, harassing, or
                harmful conduct;
              </li>
              <li>
                Scrape, overload, or interfere with the normal operation of the
                Service (including automated access that we have not permitted);
              </li>
              <li>
                Reverse engineer or circumvent security or usage limits, except
                where such restrictions are prohibited by law.
              </li>
            </ul>
            <p>
              We may investigate and take appropriate action, including removing
              content, suspending access, or cooperating with authorities, if we
              believe you have violated these Terms or pose a risk to the Service
              or others.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              5. Your content
            </h2>
            <p>
              You retain ownership of content you create using the Service. By
              using the Service, you grant us a limited, worldwide license to
              host, store, process, and display your content solely as needed to
              operate, secure, and improve the Service (for example, syncing or
              backup features if you enable them).
            </p>
            <p>
              You represent that you have the rights necessary to submit your
              content and that it does not infringe others’ rights. Locally
              stored notes remain on your device as described in our Privacy
              Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              6. Intellectual property
            </h2>
            <p>
              The Service, including its design, branding, software, and
              documentation, is owned by us or our licensors and is protected by
              intellectual property laws. Except for the limited rights
              expressly granted in these Terms, no rights are transferred to you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              7. Third parties and advertising
            </h2>
            <p>
              The Service may include links to third-party sites or integrations,
              and may display advertisements (for example, through networks such
              as Google AdSense). Those third parties have their own terms and
              policies; we are not responsible for their content or practices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              8. Disclaimers
            </h2>
            <p>
              THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT
              WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NON-INFRINGEMENT, TO THE FULLEST EXTENT PERMITTED BY
              LAW.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              9. Limitation of liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE AND OUR
              AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND SUPPLIERS WILL NOT
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, OR OTHER
              INTANGIBLE LOSSES, ARISING FROM YOUR USE OF OR INABILITY TO USE THE
              SERVICE.
            </p>
            <p>
              OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO
              THESE TERMS OR THE SERVICE WILL NOT EXCEED THE GREATER OF (A) THE
              AMOUNTS YOU PAID US FOR THE SERVICE IN THE TWELVE (12) MONTHS
              BEFORE THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS (US$100), IF YOU
              HAVE NOT PAID US. SOME JURISDICTIONS DO NOT ALLOW CERTAIN
              LIMITATIONS; IN THOSE CASES, OUR LIABILITY IS LIMITED TO THE
              FULLEST EXTENT PERMITTED BY LAW.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              10. Indemnity
            </h2>
            <p>
              You will defend, indemnify, and hold harmless Notepad.is and its
              affiliates from any claims, damages, losses, liabilities, and
              expenses (including reasonable attorneys’ fees) arising from your
              content, your use of the Service, or your violation of these Terms
              or applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              11. Termination
            </h2>
            <p>
              You may stop using the Service at any time. We may suspend or
              terminate your access if you breach these Terms, if we are required
              to do so by law, or if we discontinue the Service. Provisions that
              by their nature should survive will survive termination (including
              ownership, disclaimers, limitation of liability, and indemnity).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              12. Changes
            </h2>
            <p>
              We may modify these Terms from time to time. We will post the
              updated Terms on this page and update the “Last updated” date.
              Material changes may be communicated through the Service or by
              email where appropriate. Continued use after changes become
              effective constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              13. Governing law
            </h2>
            <p>
              These Terms are governed by the laws applicable in your primary
              place of business or residence, without regard to conflict-of-law
              principles, except where mandatory consumer protections in your
              country require otherwise. Courts in those jurisdictions may have
              exclusive or non-exclusive jurisdiction as required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              14. Contact
            </h2>
            <p>
              For questions about these Terms, please use the contact options on
              the Notepad.is website (for example, the Contact page) or the
              official support email listed there, if provided.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
