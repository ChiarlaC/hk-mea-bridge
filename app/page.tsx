import SubscribeForm from "@/components/SubscribeForm";

const updates = [
  {
    date: "Mar 18, 2026",
    source: "LegCo / IRD",
    title:
      "Inland Revenue (Amendment) Bill 2026 introduced to Legislative Council",
    summary:
      "Covers expansion of family office tax concessions including proposed qualifying asset extensions. First and Second Reading completed. Subject to legislative approval.",
    url: "https://www.ird.gov.hk/eng/ppr/archives/26031601.htm",
    tag: "Legislative Update",
    proposed: true,
  },
  {
    date: "Mar 1, 2026",
    source: "New CIES",
    title: "Private holding company rule updated under New CIES",
    summary:
      "Applicants may now use a private company incorporated less than six months prior for their CIES application. The company must be structured as an FIHV or FIHV Special Purpose Entity and meet the HK$240M AUM and substantial activities requirements.",
    url: "https://www.newcies.gov.hk/en/new-measures/",
    tag: "Policy Update",
    proposed: false,
  },
  {
    date: "Feb 28, 2026",
    source: "New CIES",
    title: "Two-year milestone: 3,166 applications, HK$95B expected investment",
    summary:
      "The New Capital Investment Entrant Scheme recorded 3,166 total applications with HK$95 billion in expected investment at its two-year mark. Application volume grew 145% in the scheme's second year.",
    url: "https://www.newcies.gov.hk/en/resources/news/two-year-milestone-new-capital-investment-entrant-scheme-attracts-nearly-3-200-applications-with-expected-investment-of-about-hk-95-billion-reflecting-global-confidence-in-hong-kong-with-photos/",
    tag: "Market Data",
    proposed: false,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 pt-16 pb-12 md:pt-20 md:pb-14">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.0] mb-6">
            HK Family
            <br />
            Office Policy,
            <br />
            <span style={{ color: "var(--gold)" }}>Decoded.</span>
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Cut through the regulatory noise. We continuously monitor the
            HKMA, IRD, and InvestHK, structuring complex gazettes and policy
            shifts into clear, actionable updates for professionals managing
            Middle Eastern capital.
          </p>
          <p className="text-sm font-medium text-gray-700 mb-3">
            Join compliance professionals already tracking HK policy shifts —
            one briefing per week, free.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <SubscribeForm />
          </div>
          <p className="text-xs text-gray-400 mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 pt-10 pb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">
          Recent Updates
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Recent Updates — left 2/3 */}
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {updates.map((item, i) => (
                <article key={i} className="border-t border-gray-100 pt-10">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="text-xs text-gray-400">{item.date}</span>
                    <span className="text-xs text-gray-300">·</span>
                    <span className="text-xs font-medium text-gray-500">
                      {item.source}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full border"
                      style={
                        item.proposed
                          ? { borderColor: "var(--gold)", color: "var(--gold)" }
                          : { borderColor: "#e5e7eb", color: "#9ca3af" }
                      }
                    >
                      {item.proposed ? "Proposed" : item.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    {item.summary}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium underline underline-offset-2 text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    Official source →
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* Key Resources — right 1/3, sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                Key Resources
              </p>
              <a
                href="/glossary#fihv"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100"
              >
                FIHV Tax Concession →
              </a>
              <a
                href="/glossary#new-cies"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100"
              >
                New CIES Requirements →
              </a>
              <a
                href="/glossary#substantial-activities"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100"
              >
                Substantial Activities →
              </a>
              <a
                href="/glossary#sfo-exemption"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100"
              >
                SFO Licensing Exemption →
              </a>
              <a
                href="/glossary#cmu"
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100"
              >
                CMU — UAE-HK Connection →
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
