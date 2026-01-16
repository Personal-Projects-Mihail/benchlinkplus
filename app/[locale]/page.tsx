import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ServiceCard, StatCard } from '@/components/ui/Card';
import { ArrowRight, Globe, Users, Award, TrendingUp, Factory, Plane, Lightbulb } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });
  
  return {
    title: 'BenchLink+ | Executive Benchmarking Tours & Innovation Expeditions',
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: ['/og-home.jpg'],
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = useTranslations('hero');
  const tStats = useTranslations('stats');
  const tServices = useTranslations('services');
  const tHowItWorks = useTranslations('howItWorks');
  const tCta = useTranslations('cta');
  const tCommon = useTranslations('common');

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary min-h-[90vh] flex items-center overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-white animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-accent-light text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>{tStats('delegations')} {tStats('delegationsLabel')}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {t('title')}
              </h1>
              
              <p className="text-xl md:text-2xl text-neutral-100 mb-4 font-medium">
                {t('subtitle')}
              </p>
              
              <p className="text-lg text-neutral-200 mb-8 leading-relaxed">
                {t('description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  as="link" 
                  href={`/${locale}/services`}
                  variant="primary" 
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  {t('ctaPrimary')}
                </Button>
                
                <Button 
                  as="link" 
                  href={`/${locale}/inquiry`}
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                >
                  {t('ctaSecondary')}
                </Button>
              </div>
            </div>

            {/* Right content - Hero image */}
            <div className="relative animate-fade-in animation-delay-200">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-image.jpg"
                  alt="Executive delegation visiting innovation hub"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating stat cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-slide-up animation-delay-400">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{tStats('countries')}</div>
                    <div className="text-xs text-neutral-600">{tStats('countriesLabel')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar - Client Logos */}
      <section className="bg-white py-12 border-b border-neutral-200">
        <div className="container-custom">
          <p className="text-center text-neutral-600 text-sm font-medium mb-8 uppercase tracking-wide">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {['Honeywell', 'SAIC', 'ByteDance', 'Fanshu', 'JD.com'].map((company) => (
              <div key={company} className="text-2xl font-bold text-neutral-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-background-light">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard 
              number={tStats('delegations')} 
              label={tStats('delegationsLabel')}
              icon={<Users className="w-10 h-10" />}
              accent
            />
            <StatCard 
              number={tStats('countries')} 
              label={tStats('countriesLabel')}
              icon={<Globe className="w-10 h-10" />}
            />
            <StatCard 
              number={tStats('loyalty')} 
              label={tStats('loyaltyLabel')}
              icon={<Award className="w-10 h-10" />}
              accent
            />
            <StatCard 
              number={tStats('companies')} 
              label={tStats('companiesLabel')}
              icon={<TrendingUp className="w-10 h-10" />}
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {tServices('title')}
            </h2>
            <p className="text-xl text-neutral-600">
              {tServices('subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title={tServices('domesticTitle')}
              description={tServices('domesticDescription')}
              icon={<Factory className="w-12 h-12" />}
              href={`/${locale}/services/domestic-routes`}
              linkText={tCommon('learnMore')}
            />
            
            <ServiceCard
              title={tServices('internationalTitle')}
              description={tServices('internationalDescription')}
              icon={<Plane className="w-12 h-12" />}
              href={`/${locale}/services/international-routes`}
              linkText={tCommon('learnMore')}
            />
            
            <ServiceCard
              title={tServices('consultingTitle')}
              description={tServices('consultingDescription')}
              icon={<Lightbulb className="w-12 h-12" />}
              href={`/${locale}/services`}
              linkText={tCommon('learnMore')}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-background-warm">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {tHowItWorks('title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection lines (hidden on mobile) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 relative z-10">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {tHowItWorks(`step${step}Title`)}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {tHowItWorks(`step${step}Description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {tCta('title')}
            </h2>
            <p className="text-xl text-neutral-100 mb-8">
              {tCta('description')}
            </p>
            <Button 
              as="link" 
              href={`/${locale}/inquiry`}
              variant="primary" 
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              {tCta('button')}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
