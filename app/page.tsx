"use client";

import { useState } from "react";
import SubscribeForm from "@/components/SubscribeForm";

const updates = [
  {
    date: "Mar 18, 2026",
    source: "LegCo / IRD",
    tag: "Compliance",
    title: "Inland Revenue (Amendment) Bill 2026 introduced to Legislative Council",
    summary:
      "Covers expansion of family office tax concessions including proposed qualifying asset extensions. First and Second Reading completed. Subject to legislative approval.",
    practitionerNote:
      "The Bill's progression to LegCo marks a formal legislative commitment — but enactment timelines remain uncertain. Practitioners drafting family office structures that anticipate digital asset or precious metals inclusion should build in contingency provisions until Royal Assent is confirmed. Do not treat proposed expansions as current law.",
    url: "https://www.ird.gov.hk/eng/ppr/archives/26031601.htm",
    proposed: true,
  },
  {
    date: "Mar 1, 2026",
    source: "New CIES",
    tag: "CIES",
    title: "Private holding company rule updated under New CIES",
    summary:
      "Applicants may now use a private company incorporated less than six months prior for their CIES application. The company must be structured as an FIHV or FIHV Special Purpose Entity and meet the HK$240M AUM and substantial activities requirements.",
    practitionerNote:
      "Previously, the holding vehicle needed to be an established entity — this change compresses the pre-application setup timeline. Legal teams should note that the 6-month incorporation window is measured at the date of application, not approval. The AUM and Substantial Activities thresholds remain unchanged and must be met at application stage.",
    url: "https://www.newcies.gov.hk/en/new-measures/",
    proposed: false,
  },
  {
    date: "Feb 28, 2026",
    source: "New CIES",
    tag: "CIES",
    title: "Two-year milestone: 3,166 applications, HK$95B expected investment",
    summary:
      "The New Capital Investment Entrant Scheme recorded 3,166 total applications with HK$95 billion in expected investment at its two-year mark. Application volume grew 145% in the scheme's second year.",
    practitionerNote:
      "The 145% year-on-year growth figure reflects accelerating inbound interest, not approval rates. Approved applications stood at 1,762 — a 56% approval rate. For advisors managing client expectations, this gap between application volume and approvals underlines the importance of thorough pre-submission due diligence.",
    url: "https://www.newcies.gov.hk/en/resources/news/two-year-milestone-new-capital-investment-entrant-scheme-attracts-nearly-3-200-applications-with-expected-investment-of-about-hk-95-billion-reflecting-global-confidence-in-hong-kong-with-photos/",
    proposed: false,
  },
];

const FILTERS = ["All", "CIES", "FIHV", "Compliance"] as const;
type Filter = (typeof FILTERS)[number];

export default function Home() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All" ? updates : updates.filter((u) => u.tag === active);

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
            Cut through the regulatory noise. We continuously monitor the HKMA,
            IRD, and InvestHK, structuring complex gazettes and policy shifts
            into clear, actionable updates for professionals managing Middle
            Eastern capital.
          </p>
          <p className="text-sm font-medium text-gray-700 mb-3">
            Join compliance professionals already tracking HK policy shifts —
            one briefing per week, free.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <SubscribeForm />
          </div>
          <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe anytime.</p>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <a
              href="/checklist"
              className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: "var(--gold)" }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest border rounded-full px-2 py-0.5"
                style={{ borderColor: "var(--gold)" }}
              >
                New
              </span>
              FIHV Tax Concession — Annual Compliance Checklist 2026 →
            </a>
          </div>
        </div>
      </div>

      {/* Start Here */}
      <div className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-8 py-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Start Here
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            <a
              href="/glossary"
              className="group flex items-start justify-between pr-0 sm:pr-8 py-4 sm:py-0 hover:opacity-70 transition-opacity"
            >
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">
                  New to FIHV or CIES?
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Plain-English definitions of key compliance terms.
                </p>
              </div>
              <span className="text-gray-300 ml-4 mt-0.5 shrink-0 group-hover:text-gray-600 transition-colors">→</span>
            </a>
            <a
              href="/checklist"
              className="group flex items-start justify-between px-0 sm:px-8 py-4 sm:py-0 hover:opacity-70 transition-opacity"
            >
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">
                  Annual compliance review?
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  FIHV self-assessment checklist for 2026.
                </p>
              </div>
              <span className="text-gray-300 ml-4 mt-0.5 shrink-0 group-hover:text-gray-600 transition-colors">→</span>
            </a>
            <a
              href="#updates"
              className="group flex items-start justify-between pl-0 sm:pl-8 py-4 sm:py-0 hover:opacity-70 transition-opacity"
            >
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">
                  Tracking policy changes?
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Latest verified updates from official sources.
                </p>
              </div>
              <span className="text-gray-300 ml-4 mt-0.5 shrink-0 group-hover:text-gray-600 transition-colors">↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* Updates */}
      <div className="max-w-6xl mx-auto px-8 pt-10 pb-16" id="updates">
        {/* Filter pills + heading */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Recent Updates
          </h2>
          <div className="flex gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="text-xs px-3 py-1 rounded-full border transition-colors"
                style={
                  active === f
                    ? {
                        borderColor: "var(--gold)",
                        color: "var(--gold)",
                        backgroundColor: "transparent",
                      }
                    : {
                        borderColor: "#e5e7eb",
                        color: "#9ca3af",
                        backgroundColor: "transparent",
                      }
                }
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Updates feed — left 2/3 */}
          <div className="lg:col-span-2">
            {filtered.length === 0 ? (
              <p className="text-sm text-gray-400 pt-8">
                No updates in this category yet. Check back soon.
              </p>
            ) : (
              <div className="space-y-12">
                {filtered.map((item, i) => (
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
                            ? {
                                borderColor: "var(--gold)",
                                color: "var(--gold)",
                              }
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
                    {item.practitionerNote && (
                      <div
                        className="border-l-2 pl-4 mb-5"
                        style={{ borderColor: "var(--gold)" }}
                      >
                        <p
                          className="text-xs font-semibold uppercase tracking-widest mb-2"
                          style={{ color: "var(--gold)" }}
                        >
                          Practitioner Note
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.practitionerNote}
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          Consult qualified legal or tax counsel before acting
                          on any policy change.
                        </p>
                      </div>
                    )}
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
            )}
          </div>

          {/* Key Resources — right 1/3, sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                Key Resources
              </p>
              <a
                href="/checklist"
                className="flex items-center justify-between text-sm font-semibold py-2 border-b"
                style={{ color: "var(--gold)", borderColor: "var(--gold)" }}
              >
                <span>FIHV Compliance Checklist 2026</span>
                <span
                  className="text-xs font-semibold uppercase tracking-widest border rounded-full px-2 py-0.5 ml-2"
                  style={{ borderColor: "var(--gold)" }}
                >
                  New
                </span>
              </a>
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
