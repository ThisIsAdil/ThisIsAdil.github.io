import SeoHead from '../components/SeoHead'
import { faqLd, personLd, websiteLd } from '../lib/seo'
import { faqs } from '../data/content'
import {
  AboutSnippet,
  FAQSection,
  FeaturedWork,
  FinalCTA,
  Hero,
  ProcessSection,
  ProofSection,
  ServicesOverview,
  TrustBand,
} from '../sections'

export default function Home() {
  return (
    <>
      <SeoHead
        path="/"
        description="Adil Shaikh — freelance full-stack developer helping academies and ambitious teams launch fast, SEO-strong websites and platforms, built to convert."
        jsonLd={[personLd(), websiteLd(), faqLd(faqs)]}
      />
      <Hero />
      <TrustBand />
      <ServicesOverview />
      <FeaturedWork />
      <ProcessSection />
      <ProofSection />
      <AboutSnippet />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
