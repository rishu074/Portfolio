import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Rishu — Full-Stack Developer",
  description: "Terms of Service for using tools and services provided by Rishu.",
}

export default function TermsOfServicePage() {
  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 blog-content">
        <h1 className="font-heading text-4xl font-bold md:text-5xl mb-8">
          Terms of Service
        </h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the tools, applications, and services ("Services") provided by Rishu on this portfolio and associated domains, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our Services.
        </p>

        <h2>2. Description of Services</h2>
        <p>
          The Services include various publically available web applications and developer tools, such as the Bank Statement Converter and other projects showcased on this portfolio. These tools are provided "as-is" and are intended for general use.
        </p>

        <h2>3. Limitation of Liability</h2>
        <p>
          <strong>STRICT LIMITATION OF LIABILITY:</strong> In no event shall Rishu, its developers, or affiliates be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of the Services, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses (even if we have been advised of the possibility of such damages).
        </p>
        <p>
          The publicly available tools created by me are provided strictly on an "as-is" and "as-available" basis without any warranties of any kind, either express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. I do not guarantee that the tools will be uninterrupted, error-free, secure, or free from viruses or other harmful components. Use them entirely at your own risk.
        </p>
        <p>
          Any documents, data, or information processed through the tools are done so at your own discretion. You are solely responsible for ensuring the confidentiality and security of any sensitive information.
        </p>

        <h2>4. User Conduct</h2>
        <p>
          You agree not to use the Services for any unlawful purpose or in any way that could interrupt, damage, or impair the functionality of the tools. Any unauthorized use of the systems, including but not limited to unauthorized entry into the systems or misuse of any information, is strictly prohibited.
        </p>

        <h2>5. Changes to Terms</h2>
        <p>
          I reserve the right to modify or replace these Terms at any time. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms of Service.
        </p>
      </div>
    </section>
  )
}
