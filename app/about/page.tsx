export const metadata = {
  title: "About — Independent HK Family Office Policy Tracker",
  description:
    "HK-MEA Bridge is an independent policy tracker for legal, tax, and compliance professionals in Hong Kong managing Middle Eastern capital. Official sources only. No sponsored content.",
  alternates: {
    canonical: "https://hk-mea-bridge.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
          About
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Bridging the Information Gap
        </h1>
      </div>

      <div className="space-y-6 text-gray-600 leading-relaxed max-w-2xl">
        <p>
          HK-MEA Bridge is an independent policy tracker built strictly for
          legal, tax, and compliance professionals in Hong Kong.
        </p>
        <p>
          The influx of Middle Eastern and Gulf capital into Hong Kong is
          accelerating, and the regulatory framework — from FIHV tax concessions
          to proposed digital asset exemptions — is evolving just as fast.
          Relying on scattered official gazettes is inefficient and risky.
        </p>
        <p>
          We do the heavy lifting. Every week, we monitor official channels
          (HKMA, IRD, InvestHK, SFC) and distill complex legislative changes
          into plain-English, verifiable intelligence. Crucially, we clearly
          demarcate enacted laws from proposed bills, ensuring you can advise
          your clients with absolute certainty.
        </p>
        <p className="font-medium text-gray-800">
          Independent. Unbiased. Data-driven.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100">
        <p className="text-sm text-gray-500">
          Questions or corrections?{" "}
          <a
            href="mailto:hello@hkmeabridge.com"
            className="underline underline-offset-2 hover:text-gray-900 transition-colors"
          >
            hello@hkmeabridge.com
          </a>
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Disclaimer
        </p>
        <p className="text-xs text-gray-400 leading-relaxed">
          HK-MEA Bridge is an independent policy aggregation and tracking tool.
          All content provided on this website is for informational and
          educational purposes only. We are not a licensed advisory firm.
          Nothing contained herein constitutes legal, tax, compliance, or
          investment advice. While we strive to ensure data accuracy by relying
          strictly on official government sources, regulatory landscapes change
          rapidly. Users must always verify information independently and consult
          with qualified, licensed professionals before making any business or
          compliance decisions.
        </p>
      </div>
    </div>
  );
}
