import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | BenchLink+',
  description: 'BenchLink+ privacy policy and data protection information.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-custom py-20">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1>Privacy Policy</h1>
        <p className="text-neutral-600">Last updated: January 2024</p>

        <h2>1. Introduction</h2>
        <p>
          BenchLink+ and Wanxi Tech ("we", "our", or "us") is committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
          when you visit our website or use our services.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>Personal Information</h3>
        <p>When you submit inquiries or contact forms, we may collect:</p>
        <ul>
          <li>Name and job title</li>
          <li>Email address and phone number</li>
          <li>Company name and industry</li>
          <li>Tour preferences and requirements</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <p>We may automatically collect certain information about your device, including:</p>
        <ul>
          <li>IP address and browser type</li>
          <li>Operating system</li>
          <li>Referring URLs</li>
          <li>Pages viewed and time spent</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide requested information</li>
          <li>Process tour bookings and arrangements</li>
          <li>Send marketing communications (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>4. Data Sharing and Disclosure</h2>
        <p>
          We do not sell your personal information. We may share your information with:
        </p>
        <ul>
          <li>Service providers who assist in our operations</li>
          <li>Benchmark companies (with your consent for tour arrangements)</li>
          <li>Legal authorities when required by law</li>
        </ul>

        <h2>5. International Data Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your country 
          of residence, including China, Europe, and the United States. We ensure appropriate 
          safeguards are in place for such transfers.
        </p>

        <h2>6. Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Data portability</li>
          <li>Withdraw consent</li>
        </ul>

        <h2>7. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal 
          information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2>8. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on our website. 
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
        </p>

        <h2>9. Children's Privacy</h2>
        <p>
          Our services are not directed to individuals under 18. We do not knowingly collect 
          personal information from children.
        </p>

        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes 
          by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2>11. Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us:</p>
        <ul>
          <li>Email: privacy@benchlinkplus.co</li>
          <li>Phone: +86 138 0000 0000</li>
          <li>Address: Shanghai, China</li>
        </ul>

        <h2>12. GDPR Compliance (European Users)</h2>
        <p>
          If you are located in the European Economic Area, you have additional rights under the 
          General Data Protection Regulation (GDPR), including the right to lodge a complaint with 
          a supervisory authority.
        </p>

        <h2>13. CCPA Compliance (California Residents)</h2>
        <p>
          California residents have specific rights regarding their personal information under the 
          California Consumer Privacy Act (CCPA), including the right to opt-out of the sale of 
          personal information (we do not sell personal information).
        </p>
      </div>
    </div>
  );
}
