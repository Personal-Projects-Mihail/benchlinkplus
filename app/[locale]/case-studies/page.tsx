import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import { CaseStudyCard } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies | Client Success Stories | BenchLink+',
  description: 'Discover how leading organizations have transformed their business through BenchLink+ benchmarking programs. Real results from 285+ successful delegations.',
};

export default async function CaseStudiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tCommon = useTranslations('common');

  // Sample case studies data (would come from CMS in production)
  const caseStudies = [
    {
      clientName: 'Leading Automotive Manufacturer',
      industry: 'Automotive',
      challenge: 'Needed to accelerate digital transformation and implement Industry 4.0 practices',
      result: 'Reduced production time by 35% within 6 months',
      logo: '/logos/client-auto.svg',
      href: `/${locale}/case-studies/automotive-digital-transformation`,
    },
    {
      clientName: 'Fortune 500 Electronics Company',
      industry: 'Electronics',
      challenge: 'Supply chain visibility and smart manufacturing integration',
      result: 'Achieved 40% improvement in supply chain efficiency',
      logo: '/logos/client-electronics.svg',
      href: `/${locale}/case-studies/electronics-supply-chain`,
    },
    {
      clientName: 'International Pharmaceutical Group',
      industry: 'Healthcare',
      challenge: 'Quality control automation and regulatory compliance in multiple markets',
      result: '98% defect reduction, FDA audit success',
      logo: '/logos/client-pharma.svg',
      href: `/${locale}/case-studies/pharma-quality-control`,
    },
    {
      clientName: 'Chinese Manufacturing Conglomerate',
      industry: 'Manufacturing',
      challenge: 'Lean manufacturing implementation across 12 facilities',
      result: '28% cost reduction, 50% faster time-to-market',
      logo: '/logos/client-manufacturing.svg',
      href: `/${locale}/case-studies/manufacturing-lean`,
    },
    {
      clientName: 'European Retail Chain',
      industry: 'Retail',
      challenge: 'Understanding China e-commerce ecosystem for market entry',
      result: 'Successful launch in 3 Chinese cities within 8 months',
      logo: '/logos/client-retail.svg',
      href: `/${locale}/case-studies/retail-china-entry`,
    },
    {
      clientName: 'Tech Startup (Series B)',
      industry: 'Technology',
      challenge: 'Scaling AI operations and learning from Silicon Valley best practices',
      result: '3x faster product iteration, $50M Series C funding',
      logo: '/logos/client-tech.svg',
      href: `/${locale}/case-studies/tech-scaling`,
    },
  ];

  const industries = ['All', 'Automotive', 'Electronics', 'Healthcare', 'Manufacturing', 'Retail', 'Technology'];
  const regions = ['All', 'China', 'Europe', 'Americas', 'Asia Pacific'];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed">
              Real results from 285+ executive delegations. See how industry leaders have 
              transformed their organizations through BenchLink+ benchmarking programs.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent text-white py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-1">285+</div>
              <div className="text-sm opacity-90">Successful Programs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">98%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">42</div>
              <div className="text-sm opacity-90">Countries Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">8+</div>
              <div className="text-sm opacity-90">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section bg-background-light">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                <Filter className="w-4 h-4 inline mr-2" />
                Filter by Industry
              </label>
              <select className="input-field">
                {industries.map((industry) => (
                  <option key={industry} value={industry.toLowerCase()}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex-1">
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Filter by Region
              </label>
              <select className="input-field">
                {regions.map((region) => (
                  <option key={region} value={region.toLowerCase()}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.href} {...caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-neutral-100 mb-8">
              Join hundreds of organizations that have achieved breakthrough results 
              through our benchmarking programs.
            </p>
            <Button 
              as="link" 
              href={`/${locale}/inquiry`}
              variant="primary" 
              size="lg"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
