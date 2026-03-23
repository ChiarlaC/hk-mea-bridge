export const metadata = {
  title: "Glossary — FIHV, New CIES, Substantial Activities, SFO Exemption",
  description:
    "Plain-English definitions of Hong Kong family office compliance terms: FIHV tax concession, New CIES 2026 requirements, Substantial Activities Requirement (2 employees, HK$2M expenditure), SFO licensing exemption, and CMU UAE-HK connection.",
  keywords: [
    "FIHV definition Hong Kong",
    "family-owned investment holding vehicle",
    "New CIES 2026 requirements",
    "Substantial Activities Requirement family office",
    "SFO licensing exemption Hong Kong",
    "CMU Central Moneymarkets Unit UAE",
    "HK$240 million AUM threshold",
    "proposed digital asset tax exemption HK",
  ],
  alternates: {
    canonical: "https://hk-mea-bridge.vercel.app/glossary",
  },
};

const terms = [
  {
    term: "FIHV — Family-owned Investment Holding Vehicle",
    anchor: "fihv",
    body: [
      "An FIHV is a legal entity established exclusively to hold and manage investments on behalf of a single family. Under the Inland Revenue Ordinance Schedule 16C, profits derived by an eligible FIHV from qualifying transactions are subject to a 0% tax rate.",
      "Current qualifying assets include: equities, debt securities, futures and FX contracts, bank deposits, certificates of deposit (capped at HK$3M), exchange-traded commodities, OTC derivative products, and interests in SFC-authorised funds.",
      "Important: Digital assets and precious metals are proposed qualifying assets under the Inland Revenue (Amendment) Bill 2026, introduced to LegCo on March 18, 2026. They are not yet in effect and are subject to legislative approval.",
    ],
    source: "IRD — Section 14P, Inland Revenue Ordinance",
  },
  {
    term: "Substantial Activities Requirement",
    anchor: "substantial-activities",
    body: [
      "To qualify for the FIHV tax concession, the family office managing the FIHV must maintain substantive operations in Hong Kong. The two mandatory thresholds are:",
      "① At least 2 full-time employees in Hong Kong who carry out the relevant investment activities and hold the necessary qualifications.",
      "② At least HK$2 million in annual operating expenditure incurred in Hong Kong. For FIHVs established less than one year, this expenditure target must be met by year-end.",
      "These requirements apply on a continuing basis — failure to maintain them may result in loss of the tax concession.",
    ],
    source: "IRD — Schedule 16C, Inland Revenue Ordinance",
  },
  {
    term: "New CIES — New Capital Investment Entrant Scheme",
    anchor: "new-cies",
    body: [
      "Launched in March 2024, the New CIES allows eligible applicants to obtain Hong Kong residency by making a qualifying investment of at least HK$30 million in permissible assets.",
      "The HK$30M portfolio must include: HK$3M deposited into a CIES Investment Portfolio (CIES IP) through an appointed financial intermediary, plus at least HK$27M across permissible financial assets and/or real estate.",
      "Real estate is subject to caps: total real estate investment is capped at HK$15M, of which residential real estate is capped at HK$10M. For residential property purchased on or after September 17, 2025, a single property with a transaction price of HK$30M or above is required.",
      "As of March 1, 2026: applicants may now use a newly incorporated private company (incorporated less than 6 months prior) as the investment holding vehicle, provided it is structured as an FIHV or FIHV Special Purpose Entity meeting the HK$240M AUM and Substantial Activities requirements.",
    ],
    source: "New CIES Office — Scheme Rules and Guidebook",
  },
  {
    term: "SFO Licensing Exemption (SFC)",
    anchor: "sfo-exemption",
    body: [
      "Under the Securities and Futures Ordinance (Cap. 571), a person carrying on the business of asset management is required to hold a Type 9 (Asset Management) licence issued by the Securities and Futures Commission (SFC).",
      "A Single Family Office (SFO) that manages assets exclusively for the benefit of a single family — and does not provide asset management services to any third party — is generally exempt from this licensing requirement.",
      "The key boundary: the moment an SFO begins managing assets for persons outside the family structure, the exemption is lost and SFC licensing becomes mandatory.",
      "Practitioners should review the SFC's licensing FAQ on family offices for the precise legal definition of 'single family' and permissible activities.",
    ],
    source: "SFC — Securities and Futures Ordinance (Cap. 571)",
  },
  {
    term: "CMU — Central Moneymarkets Unit",
    anchor: "cmu",
    body: [
      "The CMU is a debt securities clearing and settlement system operated by the Hong Kong Monetary Authority (HKMA). It provides central clearing, settlement, and custodian services for Hong Kong dollar and foreign currency debt instruments.",
      "In 2025, the Central Bank of the UAE (CBUAE) formally joined the CMU system as a member. This creates a direct institutional channel for cross-border debt clearing between the UAE and Hong Kong, facilitating Middle Eastern capital flows into Hong Kong-listed debt instruments.",
      "For family offices managing cross-border UAE-HK structures, the CBUAE's CMU membership reduces settlement friction on Sukuk and other Gulf-originated debt instruments held via Hong Kong.",
    ],
    source: "HKMA — Central Moneymarkets Unit",
  },
];

export default function GlossaryPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
          Reference
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Glossary</h1>
        <p className="text-gray-500">
          Key terms for Hong Kong family office compliance. All definitions
          reference official Hong Kong legislation and regulatory guidance.
        </p>
      </div>

      <div className="space-y-12">
        {terms.map((item) => (
          <article key={item.anchor} id={item.anchor} className="border-t border-gray-100 pt-10">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {item.term}
            </h2>
            <div className="space-y-3">
              {item.body.map((para, i) => (
                <p key={i} className="text-gray-600 text-sm leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-400">{item.source}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
