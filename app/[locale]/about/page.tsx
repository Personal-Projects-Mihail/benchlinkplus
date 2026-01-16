import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Award, Target, Users, Zap, CheckCircle, Globe } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return {
    title: 'About BenchLink+ | Leading Global Benchmarking Platform',
    description: 'Leading global platform for executive benchmarking tours and innovation expeditions. Direct access to Fortune 500 companies across 42 countries.',
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tCommon = useTranslations('common');

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Exclusivity',
      description: 'Direct relationships with Fortune 500 companies, no intermediaries'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customization',
      description: 'Tailor-made programs designed around your specific objectives'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Impact',
      description: 'Real business transformation through actionable insights'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expertise',
      description: '8+ years facilitating executive learning across 42 countries'
    },
  ];

  const differentiators = [
    'Direct access to C-suite executives and innovation leaders',
    'Exclusive behind-the-scenes factory and facility tours',
    'No off-the-shelf tours - every program is customized',
    'Post-visit implementation support and follow-up sessions',
    'Multi-lingual facilitation team (EN, 中文, PT)',
    'Verified 98% client loyalty rate with repeat engagement',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About BenchLink+
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed">
              We bridge enterprises, institutions, and innovation ecosystems through exclusive 
              benchmarking experiences that drive real business transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Since our founding, BenchLink+ has been dedicated to connecting innovation leaders 
                with world-class benchmarking experiences. We provide exclusive access to Tesla, 
                ByteDance, German Industry 4.0 pioneers, and 500+ benchmark companies across 42 countries.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Our platform serves C-suite executives, business owners, innovation managers, and 
                corporate training leaders seeking to elevate their organizations through proven 
                best practices and cutting-edge innovation insights.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent">285+</div>
                  <div className="text-sm text-neutral-600">Delegations</div>
                </div>
                <div className="w-px h-12 bg-neutral-300" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">42</div>
                  <div className="text-sm text-neutral-600">Countries</div>
                </div>
                <div className="w-px h-12 bg-neutral-300" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent">98%</div>
                  <div className="text-sm text-neutral-600">Loyalty Rate</div>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-mission.jpg"
                alt="BenchLink+ team facilitating executive tour"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-background-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-600">
              The principles that guide every benchmarking experience we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/about-differentiators.jpg"
                alt="Executive dialogue at benchmark company"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                Unlike traditional tour operators, BenchLink+ maintains direct relationships 
                with benchmark companies, ensuring authentic experiences and meaningful insights.
              </p>

              <ul className="space-y-4">
                {differentiators.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-neutral-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Globe className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Global Reach, Local Expertise
            </h2>
            <p className="text-xl text-neutral-100">
              With operations spanning China, Europe, North America, and APAC, we facilitate 
              cross-border learning experiences with cultural sensitivity and local market insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Asia Pacific</h3>
              <p className="text-neutral-200">
                China, Japan, Singapore, South Korea
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Europe</h3>
              <p className="text-neutral-200">
                Germany, Portugal, France, Netherlands
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">Americas</h3>
              <p className="text-neutral-200">
                United States, Canada, Brazil
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-background-warm">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Ready to Start Your Innovation Journey?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Join 285+ organizations that have transformed their business through BenchLink+ programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                as="link" 
                href={`/${locale}/inquiry`}
                variant="primary" 
                size="lg"
              >
                Request Consultation
              </Button>
              <Button 
                as="link" 
                href={`/${locale}/services`}
                variant="outline" 
                size="lg"
              >
                Explore Routes
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
