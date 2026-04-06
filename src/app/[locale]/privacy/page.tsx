import type { Metadata } from "next";
import { canonicalUrlForPage } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Privacy Policy | Notepad.is",
    description:
      "Privacy Policy for Notepad.is: how we handle data, cookies, advertising, and your rights.",
    alternates: { canonical: canonicalUrlForPage(locale, "/privacy") },
    openGraph: { url: canonicalUrlForPage(locale, "/privacy") },
  };
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight font-display mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: April 4, 2026 · Applies to: https://notepad.is (and
          related subdomains, if any)
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-[15px]">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              1. Who we are
            </h2>
            <p>
              This Privacy Policy describes how Notepad.is (“we,” “us,” or “our”)
              collects, uses, stores, and shares information when you use our
              website and online notepad service (the “Service”). By using the
              Service, you agree to this Policy. If you do not agree, please do
              not use the Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              2. Information we collect
            </h2>
            <p className="text-foreground font-medium">
              2.1 Information you provide
            </p>
            <p>
              The core writing experience is designed to work without an account.
              If you choose to create an account, sign in, or contact us, we may
              process the information you submit (for example, email address or
              message content) solely to operate those features and respond to
              you.
            </p>
            <p className="text-foreground font-medium">
              2.2 Information stored locally in your browser
            </p>
            <p>
              Notes and text you type in the editor may be stored on your device
              using browser technologies such as local storage. This data
              typically does not leave your device unless you copy it, export it,
              or use a feature that explicitly syncs or uploads content (for
              example, optional cloud or sharing features if offered). Clearing
              site data or your browser cache may permanently delete locally
              stored notes.
            </p>
            <p className="text-foreground font-medium">
              2.3 Automatically collected technical data
            </p>
            <p>
              Like most websites, our hosting and infrastructure may automatically
              receive technical information when you visit, such as IP address,
              browser type, device type, general location derived from IP (e.g.,
              country or region), referring URLs, and dates and times of access.
              We use this information to secure the Service, fix errors, measure
              performance, and understand aggregate usage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              3. Cookies and similar technologies
            </h2>
            <p>
              We and our partners may use cookies, local storage, pixels, and
              similar technologies for purposes that may include: keeping the
              site working (e.g., preferences, session or security-related
              cookies), analytics, and, where enabled, personalized or
              non-personalized advertising.
            </p>
            <p>
              You can control cookies through your browser settings. Blocking
              certain cookies may limit some features of the Service. For
              industry opt-out tools for interest-based advertising, you may
              visit resources such as{" "}
              <a
                href="https://optout.aboutads.info/"
                className="text-primary hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                aboutads.info
              </a>{" "}
              or{" "}
              <a
                href="https://www.youronlinechoices.eu/"
                className="text-primary hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Your Online Choices (EU)
              </a>
              , where available.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              4. Advertising (including Google AdSense)
            </h2>
            <p>
              We may display third-party advertisements on the Service, including
              through Google AdSense or comparable networks. Ad partners may use
              cookies or similar technologies to show ads based on your prior
              visits to our site or others, and to measure ad delivery and
              effectiveness.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Google’s use of advertising cookies enables it and its partners to
                serve ads to you based on your visit to our site and/or other
                sites on the Internet.
              </li>
              <li>
                You may opt out of personalized advertising from Google by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Google Ads Settings
                </a>
                , or opt out of third-party cookies for personalized advertising
                via{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  className="text-primary hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  aboutads.info choices
                </a>
                .
              </li>
            </ul>
            <p>
              We do not sell your personal information for money. Where required
              by law, we will describe any “sale” or “sharing” of personal
              information (as those terms are defined locally) and provide
              opt-out rights.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              5. How we use information
            </h2>
            <p>We use the information described above to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve the Service;</li>
              <li>Protect security, prevent abuse, and enforce our terms;</li>
              <li>
                Analyze traffic and performance in aggregate or de-identified
                form;
              </li>
              <li>
                Serve and measure advertising, where applicable, including
                contextual or personalized ads depending on your settings and
                applicable law;
              </li>
              <li>Comply with legal obligations and respond to lawful requests.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              6. Legal bases (EEA, UK, and similar regions)
            </h2>
            <p>
              If applicable law requires a “legal basis,” we rely on one or more of
              the following: performance of a contract, legitimate interests
              (such as security, analytics, and improving the Service), consent
              (where required for cookies or marketing), and legal obligation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              7. Retention
            </h2>
            <p>
              We retain server logs and account-related information only as long
              as necessary for the purposes above, unless a longer period is
              required by law. Locally stored notes remain on your device until you
              or your browser removes them.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              8. Children’s privacy
            </h2>
            <p>
              The Service is not directed to children under 13 (or the minimum age
              required in your jurisdiction). We do not knowingly collect personal
              information from children. If you believe we have collected
              information from a child, please contact us so we can delete it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              9. Your rights and choices
            </h2>
            <p>
              Depending on where you live, you may have rights to access, correct,
              delete, or export personal information we hold about you, or to
              object to or restrict certain processing. Residents of some U.S.
              states may have additional rights under local privacy laws. To
              exercise rights, contact us using the details below. You may also
              lodge a complaint with your local data protection authority.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              10. International transfers
            </h2>
            <p>
              We may process information in countries other than your own. Where
              required, we use appropriate safeguards (such as standard
              contractual clauses) for cross-border transfers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              11. Security
            </h2>
            <p>
              We implement reasonable technical and organizational measures to
              protect information. No method of transmission over the Internet is
              100% secure; we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              12. Changes to this Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will post
              the revised version on this page and update the “Last updated”
              date. Continued use of the Service after changes means you accept
              the updated Policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              13. Contact
            </h2>
            <p>
              For privacy-related questions or requests, please contact us through
              the contact options published on the Notepad.is website (for
              example, the Contact page), or at the official support email listed
              there if provided.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
