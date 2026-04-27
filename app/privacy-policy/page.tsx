import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Rishu — Full-Stack Developer",
  description: "Privacy Policy covering data collection, third-party cookies, and usage for Rishu's tools.",
}

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 blog-content">
        <h1 className="font-heading text-4xl font-bold md:text-5xl mb-8">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <h2>1. Information We Collect</h2>
        <p>
          We value your privacy. The majority of our tools, such as the Bank Statement Converter, operate entirely within your browser. This means that your files, such as PDFs, are processed locally on your device and are never uploaded, stored, or transmitted to any external servers. We do not collect or retain personal files processed through these client-side applications.
        </p>

        <h2>2. Third-Party Cookies and Advertising (Google AdSense)</h2>
        <p>
          To keep our tools free and accessible to everyone, we use third-party advertising companies, specifically Google AdSense, to serve ads when you visit our website.
        </p>
        <ul>
          <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites.</li>
          <li>Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to our sites and/or other sites on the Internet.</li>
          <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.</li>
        </ul>

        <h2>3. Analytics</h2>
        <p>
          We may use basic analytics tools to understand how visitors interact with our website, such as page views and time spent on site. This data is aggregated and anonymized, and it helps us improve the user experience and functionality of our tools.
        </p>

        <h2>4. Data Security</h2>
        <p>
          Since our core tools are built with a client-side architecture (such as running WebAssembly/Pyodide entirely in your browser), your sensitive documents never leave your device. We prioritize security by eliminating the need for server-side data processing of your files.
        </p>

        <h2>5. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted.
        </p>
      </div>
    </section>
  )
}
