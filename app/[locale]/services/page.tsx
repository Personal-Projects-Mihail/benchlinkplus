import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { RouteCard } from '@/components/ui/Card';
import { Factory, Plane, Lightbulb, ArrowRight } from 'lucide-react';

export async function generateMetadata({ params: _params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return {
    title: 'Benchmarking Services | Study Tours & Executive Delegations',
    description: 'Explore our curated benchmarking routes across China and internationally. From Industry 4.0 to AI innovation, customize your executive learning experience.',
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tServices = await getTranslations({ locale, namespace: 'services' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  // Domestic routes data
  const domesticRoutes = [
    {
      title: 'Shanghai Innovation Ecosystem',
      tagline: 'AI, Digital Economy & Smart Manufacturing',
      image: '/routes/shanghai.jpg',
      duration: '5-7 days',
      companyLogos: ['/logos/tesla.svg', '/logos/nio.svg'],
      href: `/${locale}/services/shanghai-innovation`,
    },
    {
      title: 'Shenzhen Smart Manufacturing',
      tagline: 'Electronics, IoT & Hardware Innovation',
      image: '/routes/shenzhen.jpg',
      duration: '4-6 days',
      companyLogos: ['/logos/huawei.svg', '/logos/dji.svg'],
      href: `/${locale}/services/shenzhen-manufacturing`,
    },
    {
      title: 'Suzhou Manufacturing Excellence',
      tagline: 'Lighthouse Factories & Lean Production',
      image: '/routes/suzhou.jpg',
      duration: '3-5 days',
      companyLogos: [],
      href: `/${locale}/services/suzhou-excellence`,
    },
  ];

  // International routes data
  const internationalRoutes = [
    {
      title: 'Germany Industry 4.0',
      tagline: 'Smart Factories & Advanced Manufacturing',
      image: '/routes/germany.jpg',
      duration: '7-10 days',
      companyLogos: ['/logos/siemens.svg', '/logos/bmw.svg'],
      href: `/${locale}/services/germany-industry-4`,
    },
    {
      title: 'Silicon Valley Tech Innovation',
      tagline: 'AI, Cloud Computing & Venture Capital',
      image: '/routes/silicon-valley.jpg',
      duration: '6-8 days',
      companyLogos: ['/logos/google.svg', '/logos/tesla.svg'],
      href: `/${locale}/services/silicon-valley`,
    },
    {
      title: 'Portugal Innovation & Belt-Road',
      tagline: 'EU Market Access & Cross-Border Collaboration',
      image: '/routes/portugal.jpg',
      duration: '5-7 days',
      companyLogos: [],
      href: `/${locale}/services/portugal-innovation`,
    },
    {
      title: 'Japan Lean Manufacturing',
      tagline: 'Toyota Production System & Quality Excellence',
      image: '/routes/japan.jpg',
      duration: '6-9 days',
      companyLogos: ['/logos/toyota.svg'],
      href: `/${locale}/services/japan-lean`,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {tServices('title')}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed mb-8">
              {tServices('subtitle')}
            </p>
            <Button 
              as="link" 
              href={`/${locale}/inquiry`}
              variant="primary" 
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              {tCommon('requestConsultation')}
            </Button>
          </div>
        </div>
      </section>

      {/* Domestic Routes Section */}
      <section className="section">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Factory className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                {tServices('domesticTitle')}
              </h2>
              <p className="text-lg text-neutral-600 mt-1">
                {tServices('domesticDescription')}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticRoutes.map((route) => (
              <RouteCard key={route.href} {...route} />
            ))}
          </div>
        </div>
      </section>

      {/* International Routes Section */}
      <section className="section bg-background-light">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Plane className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                {tServices('internationalTitle')}
              </h2>
              <p className="text-lg text-neutral-600 mt-1">
                {tServices('internationalDescription')}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalRoutes.map((route) => (
              <RouteCard key={route.href} {...route} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Consulting Section */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-primary text-white rounded-3xl p-12 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {tServices('consultingTitle')}
              </h2>
              
              <p className="text-xl text-neutral-100 mb-8">
                {tServices('consultingDescription')}
              </p>

              <ul className="text-left max-w-2xl mx-auto space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-2xl">✓</span>
                  <span>Intelligent manufacturing diagnostics and digital transformation roadmaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-2xl">✓</span>
                  <span>Innovation workshop facilitation with cross-functional teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-2xl">✓</span>
                  <span>Post-visit implementation support and change management</span>
                </li>
              </ul>

              <Button 
                as="link" 
                href={`/${locale}/contact`}
                variant="primary" 
                size="lg"
              >
                Discuss Custom Needs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-background-warm">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Every benchmarking program is fully customizable. Tell us your objectives, 
              and we'll create a bespoke itinerary tailored to your needs.
            </p>
            <Button 
              as="link" 
              href={`/${locale}/inquiry`}
              variant="primary" 
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              Request Custom Tour
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
