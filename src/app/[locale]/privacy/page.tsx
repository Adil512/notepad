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
      "Privacy Policy for Notepad.is and Smart Notepad: how we handle data, Google Drive integration, cookies, advertising, and your rights.",
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
          Last updated: April 4, 2026 · Applies to:{" "}
          <a
            href="https://notepad.is/"
            className="text-primary hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://notepad.is
          </a>{" "}
          (and related subdomains, if any)
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed text-[15px]">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              1. Who we are
            </h2>
            <p>
              This Privacy Policy describes how Notepad.is (“we,” “us,” or “our”)
              collects, uses, stores, and shares information when you use our
              website, online notepad service, and related applications and
              features (the “Service”), including Smart Notepad.
            </p>
            <p>
              By using the Service, you agree to this Policy. If you do not
              agree, please do not use the Service.
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
              Like most websites, our hosting and infrastructure may
              automatically receive technical information when you visit, such as
              IP address, browser type, device type, general location derived
              from IP (e.g., country or region), referring URLs, and dates and
              times of access. We use this information to secure the Service, fix
              errors, measure performance, and understand aggregate usage.
            </p>
            <p className="text-foreground font-medium">
              2.4 Google Drive data used by Smart Notepad
            </p>
            <p>
              Smart Notepad is a Google Drive-based text and code editor. When you
              choose to connect Smart Notepad to your Google Account, the
              application requests permission to access your Google Drive.
            </p>
            <p>Depending on the actions you perform, Smart Notepad may access:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Drive files and folders;</li>
              <li>file and folder names;</li>
              <li>file contents that you choose to open or edit;</li>
              <li>file metadata such as file size and modification date; and</li>
              <li>
                files and folders that you create, rename, move, copy, upload,
                download, or delete through Smart Notepad.
              </li>
            </ul>
            <p>
              Smart Notepad uses this access only to provide its user-facing
              file management and editing functionality.
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
              certain cookies may limit some features of the Service.
            </p>
            <p>
              Smart Notepad may use browser local storage to remember editor and
              workspace preferences, recently opened files, open tabs, and
              similar application settings. Such locally stored information
              remains in your browser unless you clear the relevant site data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              4. Advertising (including Google AdSense)
            </h2>
            <p>
              We may display third-party advertisements on the Service, including
              through Google AdSense or comparable networks, subject to the
              policies and requirements applicable to those advertising services.
            </p>
            <p>
              Ad partners may use cookies or similar technologies to show ads
              based on your prior visits to our site or others, and to measure ad
              delivery and effectiveness.
            </p>
            <p>
              Google’s advertising services may use advertising cookies in
              accordance with Google&apos;s applicable policies.
            </p>
            <p>
              You may manage your Google advertising settings through{" "}
              <a
                href="https://www.google.com/settings/ads"
                className="text-primary hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                Google Ads Settings
              </a>
              .
            </p>
            <p>
              You may also use applicable industry opt-out tools such as{" "}
              <a
                href="https://www.aboutads.info/choices/"
                className="text-primary hover:underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                aboutads.info choices
              </a>
              .
            </p>
            <p>
              We do not sell your personal information for money. Where required
              by law, we will describe any “sale” or “sharing” of personal
              information (as those terms are defined locally) and provide
              applicable opt-out rights.
            </p>
            <p>
              Google Workspace user data obtained through Smart Notepad is not
              used for advertising, personalized advertising, or interest-based
              advertising.
            </p>
            <p>
              We do not transfer Google Drive data obtained through Smart
              Notepad to advertising networks, data brokers, or other parties for
              advertising purposes.
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
                Serve and measure advertising where applicable, subject to
                applicable laws and the restrictions described in this Policy;
              </li>
              <li>Operate Smart Notepad and its Google Drive integration;</li>
              <li>Respond to support requests;</li>
              <li>Comply with legal obligations and respond to lawful requests.</li>
            </ul>
            <p className="text-foreground font-medium pt-2">
              Smart Notepad and Google Drive
            </p>
            <p>
              When you authorize Smart Notepad to access Google Drive, we use the
              requested Google Drive permissions only to provide the functionality
              visible and available within Smart Notepad.
            </p>
            <p>This includes allowing you to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>browse your Google Drive files and folders;</li>
              <li>open files in the Smart Notepad editor;</li>
              <li>read and edit file contents;</li>
              <li>save changes to files;</li>
              <li>create new files and folders;</li>
              <li>rename files and folders;</li>
              <li>move and copy files;</li>
              <li>upload and download files; and</li>
              <li>delete files or move files to Google Drive Trash.</li>
            </ul>
            <p>
              Smart Notepad does not use Google Drive data for advertising,
              credit evaluation, lending, or unrelated purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              6. Google OAuth and Google Drive permissions
            </h2>
            <p>
              Smart Notepad uses Google OAuth to allow you to authorize access to
              your Google Drive.
            </p>
            <p>
              Smart Notepad does not ask you for your Google Account password.
              Google handles authentication and authorization.
            </p>
            <p>
              The Google Drive permission requested by Smart Notepad allows the
              application to see, edit, create, and delete Google Drive files
              that the authorized user can access.
            </p>
            <p>
              Smart Notepad accesses Google Drive under the authorization of the
              Google Account that is using the application. Your files remain
              associated with your Google Drive account.
            </p>
            <p>
              You can revoke Smart Notepad&apos;s access to your Google Account at
              any time through your Google Account security settings.
            </p>
            <p>
              After access is revoked, Smart Notepad will no longer be able to
              access your Google Drive through that authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              7. How Google Drive data is stored and shared
            </h2>
            <p>
              Files that you create or edit through Smart Notepad remain in your
              Google Drive.
            </p>
            <p>
              Smart Notepad does not intentionally maintain a separate permanent
              database of the contents of your Google Drive files.
            </p>
            <p>
              Google Drive file contents are accessed through Google&apos;s
              services when you use features that require that access, such as
              opening, editing, saving, uploading, downloading, copying, or
              managing files.
            </p>
            <p>We do not sell, rent, or trade Google Drive data.</p>
            <p>
              We do not transfer Google Drive data to advertising networks, data
              brokers, or information resellers.
            </p>
            <p>
              We do not use Google Drive data to serve advertisements or
              personalized advertising.
            </p>
            <p>
              We do not use Google Drive data to determine creditworthiness or
              for lending purposes.
            </p>
            <p>
              We do not use Google Drive data to create, train, or improve
              generalized artificial intelligence or machine learning models.
            </p>
            <p>
              We do not allow humans to read Google Drive data except where
              permitted under the Google API Services User Data Policy, such as
              when you provide explicit consent to access specific data, when
              necessary for security purposes, or when required by applicable
              law.
            </p>
            <p>
              Any handling of Google Workspace user data is limited to providing
              or improving Smart Notepad&apos;s user-facing functionality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              8. Google API Services User Data Policy and Limited Use
            </h2>
            <p>
              Smart Notepad&apos;s use of information received from Google APIs
              complies with the Google API Services User Data Policy, including
              the Limited Use requirements.
            </p>
            <p>
              Google Workspace user data obtained through Google APIs is used
              only to provide or improve the user-facing functionality of Smart
              Notepad.
            </p>
            <p>
              Google Workspace user data is not sold or used for advertising,
              including personalized or interest-based advertising.
            </p>
            <p>
              Google Workspace user data is not transferred to third parties
              except where permitted by the Google API Services User Data Policy,
              including where necessary to provide or improve the
              application&apos;s user-facing functionality with the user&apos;s
              consent, to comply with applicable law, to protect against security
              threats or abuse, or as part of a merger, acquisition, or sale of
              assets after obtaining the required user consent.
            </p>
            <p>
              We do not allow humans to read Google Workspace user data except
              where permitted by the Google API Services User Data Policy,
              including with the user&apos;s explicit consent for specific data,
              for security purposes, when data has been appropriately aggregated
              and anonymized for permitted internal operations, or when required
              by law.
            </p>
            <p>
              Our use of Google Workspace user data is limited to the purposes
              disclosed in this Privacy Policy and the functionality presented to
              users in Smart Notepad.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              9. Data retention
            </h2>
            <p>
              We retain server logs and account-related information only as long
              as necessary for the purposes described in this Policy, unless a
              longer period is required by law.
            </p>
            <p>
              Smart Notepad does not intentionally retain permanent copies of
              Google Drive file contents on our servers.
            </p>
            <p>
              Google Drive files created or edited through Smart Notepad remain in
              the user&apos;s Google Drive and are subject to Google&apos;s
              applicable storage and retention mechanisms.
            </p>
            <p>
              Locally stored notes, preferences, recently opened files, and
              workspace information remain in the user&apos;s browser until the
              user or browser removes them.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              10. Data sharing
            </h2>
            <p>
              We may share information with service providers that help us
              operate, secure, maintain, or analyze the Service, subject to
              applicable law and contractual or technical safeguards.
            </p>
            <p>We do not sell personal information.</p>
            <p>
              We do not share Google Workspace user data with third parties
              except as permitted by the Google API Services User Data Policy and
              as described in this Policy.
            </p>
            <p>
              We may disclose information when required by applicable law,
              regulation, legal process, or when reasonably necessary to protect
              the security of the Service, users, or other persons.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              11. Legal bases (EEA, UK, and similar regions)
            </h2>
            <p>
              If applicable law requires a “legal basis,” we rely on one or more
              of the following: performance of a contract, legitimate interests
              (such as security, analytics, and improving the Service), consent
              (where required for cookies or marketing), and legal obligation.
            </p>
            <p>
              For Google Drive access through Smart Notepad, processing occurs
              based on the authorization and permissions granted by the user
              through Google OAuth, together with other applicable legal bases
              where required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              12. Your rights and choices
            </h2>
            <p>
              Depending on where you live, you may have rights to access,
              correct, delete, or export personal information we hold about you,
              or to object to or restrict certain processing.
            </p>
            <p>
              Residents of some U.S. states may have additional rights under
              local privacy laws.
            </p>
            <p>
              You can also control your Google Drive authorization by reviewing or
              revoking Smart Notepad&apos;s access through your Google Account
              settings.
            </p>
            <p>
              To exercise applicable privacy rights or ask questions about data
              handled by Notepad.is or Smart Notepad, contact us using the
              details below.
            </p>
            <p>
              You may also lodge a complaint with your local data protection
              authority.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              13. International transfers
            </h2>
            <p>
              We may process information in countries other than your own. Where
              required, we use appropriate safeguards, such as standard
              contractual clauses, for cross-border transfers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              14. Security
            </h2>
            <p>
              We implement reasonable technical and organizational measures to
              protect information.
            </p>
            <p>
              Smart Notepad uses Google&apos;s authentication and authorization
              infrastructure and secure HTTPS connections when communicating with
              Google services.
            </p>
            <p>
              No method of transmission over the Internet is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              15. Children&apos;s privacy
            </h2>
            <p>
              The Service is not directed to children under 13 (or the minimum
              age required in your jurisdiction).
            </p>
            <p>We do not knowingly collect personal information from children.</p>
            <p>
              If you believe we have collected personal information from a child,
              please contact us so we can take appropriate action.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              16. Changes to this Policy
            </h2>
            <p>We may update this Privacy Policy from time to time.</p>
            <p>
              We will post the revised version on this page and update the “Last
              updated” date.
            </p>
            <p>
              If material changes affect how we handle Google Workspace user
              data, we will update the relevant disclosures before or when the
              changes take effect, as required by applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              17. Contact
            </h2>
            <p>
              For privacy-related questions, Google Drive data questions, or
              requests concerning Smart Notepad, please contact:
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:adilbalti14@gmail.com"
                className="text-primary hover:underline"
              >
                adilbalti14@gmail.com
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground font-display">
              18. Google API Services Limited Use Disclosure
            </h2>
            <p>
              The use of information received from Google Workspace APIs by Smart
              Notepad will adhere to the Google User Data Policy, including the
              Limited Use requirements.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
