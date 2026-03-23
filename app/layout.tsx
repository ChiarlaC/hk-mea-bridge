import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "HK Family Office Policy Intelligence | HKMA IRD Updates 2026",
    template: "%s | HK-MEA Bridge",
  },
  description:
    "Weekly verified policy updates for Hong Kong family office practitioners. Track FIHV tax concession, New CIES 2026, Substantial Activities Requirement, and SFO licensing exemption — official sources only.",
  keywords: [
    "Hong Kong family office policy 2026",
    "FIHV tax concession Hong Kong",
    "New CIES private holding company 2026",
    "Substantial Activities Requirement HK family office",
    "SFO licensing exemption SFC 2026",
    "HK$240 million AUM threshold family office",
    "UAE central bank CMU Hong Kong",
    "intra-group transfer stamp duty relief HK 2026",
    "HKMA family office update",
    "IRD family office tax",
  ],
  openGraph: {
    title: "HK Family Office Policy Intelligence | HKMA IRD Updates 2026",
    description:
      "Weekly verified policy updates for Hong Kong family office practitioners. FIHV, New CIES, Substantial Activities — official sources only.",
    type: "website",
    url: "https://hk-mea-bridge.vercel.app",
  },
  alternates: {
    canonical: "https://hk-mea-bridge.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
            <a href="/" className="text-sm font-semibold tracking-widest uppercase">
              HK-MEA Bridge
            </a>
            <nav className="flex gap-8 text-sm text-gray-400">
              <a href="/glossary" className="hover:text-gray-900 transition-colors">
                Glossary
              </a>
              <a href="/about" className="hover:text-gray-900 transition-colors">
                About
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-gray-100 mt-32">
          <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-gray-400">
            <p>Sources: HKMA · IRD · InvestHK · New CIES · LegCo</p>
            <p className="sm:max-w-lg sm:text-right">
              For informational purposes only. Not legal, tax, or investment advice.
              Always verify independently and consult qualified professionals.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
