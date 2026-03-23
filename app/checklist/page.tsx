export const metadata = {
  title: "FIHV Tax Concession Checklist 2026 | Annual Compliance Self-Assessment",
  description:
    "Annual self-assessment checklist for Hong Kong FIHV tax concession eligibility: entity structure, HK$240M AUM threshold, Substantial Activities Requirement, qualifying transactions, and Safe Harbour Rule.",
  keywords: [
    "FIHV compliance checklist 2026",
    "Hong Kong family office self-assessment",
    "Substantial Activities Requirement checklist",
    "FIHV qualifying transactions",
    "Safe Harbour Rule family office HK",
  ],
  alternates: {
    canonical: "https://hk-mea-bridge.vercel.app/checklist",
  },
};

const sections = [
  {
    title: "Section 1 — Entity Structure",
    subtitle: "实体与架构",
    items: [
      {
        text: "The FIHV is established exclusively to hold and manage investments for a single family.",
        note: null,
        proposed: false,
      },
      {
        text: "Central Management and Control (CMC) of the FIHV is exercised in Hong Kong.",
        note: "The FIHV may be incorporated in any jurisdiction (including BVI, Cayman Islands, or Hong Kong). The determining factor is where strategic decisions are made and where management activities are performed — not where the entity is registered.",
        proposed: false,
      },
      {
        text: "The FIHV is not engaged in general commercial or industrial trade — it operates strictly as an investment holding vehicle.",
        note: null,
        proposed: false,
      },
    ],
  },
  {
    title: "Section 2 — AUM Threshold",
    subtitle: "资产管理规模",
    items: [
      {
        text: "Total Assets Under Management (AUM) meet or exceed the statutory minimum of HK$240 million.",
        note: "AUM must aggregate qualifying assets across the family's specified vehicles. This threshold applies on a continuing basis — falling below HK$240M may result in loss of the tax concession.",
        proposed: false,
      },
      {
        text: "AUM calculation is based strictly on qualifying assets as defined under Schedule 16C of the Inland Revenue Ordinance.",
        note: null,
        proposed: false,
      },
    ],
  },
  {
    title: "Section 3 — Substantial Activities in Hong Kong",
    subtitle: "香港实质活动要求",
    items: [
      {
        text: "The family office employs a minimum of 2 full-time qualified employees in Hong Kong.",
        note: "Employees must hold qualifications and experience relevant to the investment activities performed. Part-time or seconded staff do not satisfy this requirement.",
        proposed: false,
      },
      {
        text: "Annual operating expenditure directly related to investment activities incurred in Hong Kong is at least HK$2 million.",
        note: "For FIHVs established less than one year, this expenditure target must be met by year-end. Expenditure incurred outside Hong Kong does not count toward this threshold.",
        proposed: false,
      },
    ],
  },
  {
    title: "Section 4 — Qualifying Transactions",
    subtitle: "合资格交易边界",
    items: [
      {
        text: "Core investments fall within Schedule 16C qualifying asset categories: securities, futures contracts, FX contracts, bank deposits, exchange-traded commodities, OTC derivative products, and interests in SFC-authorised funds.",
        note: null,
        proposed: false,
      },
      {
        text: "Safe Harbour Rule: Non-qualifying transactions do not exceed 5% of total trading receipts.",
        note: "The 5% Safe Harbour threshold is critical. Exceeding this limit on non-qualifying transactions may cause the entire FIHV structure to lose its tax concession status for the relevant year. Monitor this ratio throughout the financial year, not only at year-end.",
        proposed: false,
      },
      {
        text: "[Proposed] Digital assets and precious metals are NOT currently included in qualifying asset categories.",
        note: "The Inland Revenue (Amendment) Bill 2026, introduced to LegCo on March 18, 2026, proposes to expand qualifying assets to include digital assets and precious metals. This expansion is subject to legislative approval and has not yet taken effect. Do not pre-emptively structure these assets into the tax-exempt pool.",
        proposed: true,
      },
    ],
  },
  {
    title: "Section 5 — Ongoing Compliance",
    subtitle: "持续合规",
    items: [
      {
        text: "The Single Family Office (SFO) managing the FIHV does not provide investment management services to any third parties outside the family structure.",
        note: "The moment an SFO begins managing assets for persons outside the family, the SFC Type 9 licensing exemption is lost and licensing becomes mandatory.",
        proposed: false,
      },
      {
        text: "SFC Type 9 (Asset Management) licensing exemption criteria remain satisfied.",
        note: null,
        proposed: false,
      },
      {
        text: "Annual self-assessment has been completed and documented for audit purposes.",
        note: null,
        proposed: false,
      },
    ],
  },
];

export default function ChecklistPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
          Compliance Tool
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          FIHV Tax Concession — Annual Compliance Checklist
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
          A structured self-assessment for family office practitioners reviewing
          FIHV eligibility under Schedule 16C of the Inland Revenue Ordinance.
          Updated for 2026. All criteria reflect currently enacted law unless
          marked <span style={{ color: "var(--gold)" }}>Proposed</span>.
        </p>
      </div>

      <div className="space-y-14">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="flex items-baseline gap-3 mb-6 border-b border-gray-100 pb-3">
              <h2 className="text-sm font-bold text-gray-900">{section.title}</h2>
              <span className="text-xs text-gray-400">{section.subtitle}</span>
            </div>
            <div className="space-y-6">
              {section.items.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="mt-1 w-4 h-4 shrink-0 rounded-sm border-2"
                    style={{ borderColor: item.proposed ? "var(--gold)" : "#d1d5db" }}
                  />
                  <div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: item.proposed ? "var(--gold)" : "#374151" }}
                    >
                      {item.text}
                    </p>
                    {item.note && (
                      <p className="text-xs text-gray-400 leading-relaxed mt-2">
                        {item.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-gray-100">
        <p className="text-xs text-gray-400 leading-relaxed">
          This checklist is for informational purposes only and does not
          constitute legal, tax, or compliance advice. Criteria are based on
          Schedule 16C of the Inland Revenue Ordinance and official IRD
          guidance as of March 2026. Always verify against current legislation
          and consult qualified legal or tax counsel before making compliance
          determinations.
        </p>
      </div>
    </div>
  );
}
