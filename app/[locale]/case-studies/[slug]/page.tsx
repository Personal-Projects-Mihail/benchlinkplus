import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { CheckCircle, ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

// Sample case study data (would come from CMS/database in production)
const caseStudiesData = {
  'automotive-digital-transformation': {
    clientName: 'Leading Automotive Manufacturer',
    industry: 'Automotive',
    location: 'Germany',
    delegationSize: 15,
    duration: '7 days',
    route: 'Germany Industry 4.0 + China Smart Manufacturing',
    challenge: 'A major European automotive manufacturer needed to accelerate their digital transformation journey and implement Industry 4.0 practices across multiple production facilities. They faced challenges with legacy systems, workforce training, and identifying the right technology partners.',
    approach: [
      'Customized 7-day benchmarking tour covering German lighthouse factories (BMW, Siemens) and Chinese smart manufacturing leaders (NIO, BYD)',
      'Executive dialogues with CIOs and COOs from benchmark companies',
      'Hands-on factory floor tours with deep-dive technical sessions',
      'Post-visit implementation workshop with our consulting team',
    ],
    results: [
      'Reduced production cycle time by 35% within 6 months',
      'Identified and implemented IoT solutions across 3 facilities',
      'Established partnership with 2 technology vendors discovered during tour',
      'Trained 120+ employees on Industry 4.0 best practices',
    ],
    testimonial: {
      quote: 'The BenchLink+ program gave us unparalleled access to best-in-class operations. Seeing these practices in action—not just reading about them—accelerated our decision-making and implementation timeline significantly.',
      author: 'Hans Mueller',
      title: 'Chief Operations Officer',
      company: 'Leading Automotive Manufacturer',
    },
    metrics: [
      { label: 'Production Time Reduction', value: '35%' },
      { label: 'Facilities Upgraded', value: '3' },
      { label: 'Employees Trained', value: '120+' },
      { label: 'ROI Timeline', value: '6 months' },
    ],
    image: '/case-studies/automotive-hero.jpg',
    logo: '/logos/client-auto.svg',
  },
  // Add more case studies as needed
};

export async function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ 
  params: { slug } 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const caseStudy = caseStudiesData[slug as keyof typeof caseStudiesData];
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.clientName} Case Study | ${caseStudy.industry} | BenchLink+`,
    description: caseStudy.challenge.substring(0, 155),
  };
}

export default function CaseStudyDetailPage({ 
  params: { slug, locale } 
}: { 
  params: { slug: string; locale: string } 
}) {
  const caseStudy = caseStudiesData[slug as keyof typeof caseStudiesData];

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Client logo */}
              <div className="mb-6 h-12 relative">
                <Image
                  src={caseStudy.logo}
                  alt={`${caseStudy.clientName} logo`}
                  width={180}
                  height={48}
                  className="object-contain object-left"
                />
              </div>

              {/* Industry tag */}
              <div className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium mb-6">
                {caseStudy.industry}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {caseStudy.clientName}
              </h1>

              <p className="text-xl text-neutral-100 mb-6">
                How a leading {caseStudy.industry.toLowerCase()} company achieved 
                breakthrough results through targeted benchmarking
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="text-sm opacity-80">Delegation Size</div>
                  <div className="text-2xl font-bold">{caseStudy.delegationSize} executives</div>
                </div>
                <div>
                  <div className="text-sm opacity-80">Duration</div>
                  <div className="text-2xl font-bold">{caseStudy.duration}</div>
                </div>
                <div>
                  <div className="text-sm opacity-80">Location</div>
                  <div className="text-2xl font-bold">{caseStudy.location}</div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={caseStudy.image}
                alt={`${caseStudy.clientName} delegation`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section-alt">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            {caseStudy.metrics.map((metric, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-card"
              >
                <div className="text-4xl font-bold text-accent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-neutral-600">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900">
                The Challenge
              </h2>
            </div>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section bg-background-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900">
                Our Approach
              </h2>
            </div>
            
            <div className="space-y-4">
              {caseStudy.approach.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg text-neutral-700 leading-relaxed pt-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900">
                The Results
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-accent mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              {caseStudy.testimonial.quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full" />
              <div>
                <div className="font-bold text-lg">{caseStudy.testimonial.author}</div>
                <div className="text-neutral-200">{caseStudy.testimonial.title}</div>
                <div className="text-sm text-neutral-300">{caseStudy.testimonial.company}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies / CTA */}
      <section className="section bg-background-warm">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Discover how BenchLink+ can design a custom benchmarking program 
              tailored to your organization's unique challenges and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                as="link" 
                href={`/${locale}/inquiry`}
                variant="primary" 
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Request Consultation
              </Button>
              <Button 
                as="link" 
                href={`/${locale}/case-studies`}
                variant="outline" 
                size="lg"
              >
                View More Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
