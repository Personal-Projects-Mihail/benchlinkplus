import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { CheckCircle, Clock, Users, MapPin, Star, Calendar } from 'lucide-react';

// Sample route data (would come from CMS/database in production)
const routesData = {
  'germany-industry-4': {
    name: 'Germany Industry 4.0 Benchmarking Tour',
    tagline: 'Experience the Future of Smart Manufacturing',
    description: 'Immerse your team in the birthplace of Industry 4.0. Visit world-renowned smart factories, engage with innovation leaders, and discover cutting-edge automation, IoT, and digital twin technologies.',
    duration: '7-10 days',
    groupSize: '8-20 participants',
    difficulty: 'Moderate',
    idealFor: ['Manufacturing executives', 'Operations managers', 'Digital transformation leaders', 'Supply chain directors'],
    heroImage: '/routes/germany-hero.jpg',
    companies: [
      { name: 'Siemens', logo: '/logos/siemens.svg', description: 'Digital factory solutions and industrial IoT' },
      { name: 'BMW', logo: '/logos/bmw.svg', description: 'Smart production and quality automation' },
      { name: 'Bosch', logo: '/logos/bosch.svg', description: 'Connected industry and AI applications' },
      { name: 'SAP', logo: '/logos/sap.svg', description: 'Enterprise resource planning and analytics' },
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Orientation', activities: ['Welcome dinner', 'Program overview', 'Team introductions'] },
      { day: 2, title: 'Siemens Smart Factory', activities: ['Factory tour', 'Digital twin demo', 'Executive dialogue with CTO'] },
      { day: 3, title: 'BMW Production Innovation', activities: ['Assembly line observation', 'Quality control systems', 'Lean manufacturing workshop'] },
      { day: 4, title: 'Bosch Connected Industry', activities: ['IoT solutions showcase', 'Predictive maintenance session', 'AI use cases discussion'] },
      { day: 5, title: 'SAP Innovation Center', activities: ['ERP best practices', 'Data analytics platform tour', 'Implementation roadmap planning'] },
      { day: 6, title: 'Lighthouse Factory Visit', activities: ['World Economic Forum recognized facility', 'Sustainability practices', 'Workforce training models'] },
      { day: 7, title: 'Synthesis & Action Planning', activities: ['Key learnings workshop', 'Implementation roadmap', 'Departure'] },
    ],
    included: [
      'All company visits and exclusive access',
      'Expert facilitation and translation',
      '4-star accommodation',
      'Ground transportation',
      'Most meals',
      'Post-visit implementation guide',
      'Follow-up consultation session',
    ],
    learningObjectives: [
      'Understand Industry 4.0 implementation strategies from world leaders',
      'Identify technology solutions applicable to your operations',
      'Build relationships with benchmark companies',
      'Develop actionable implementation roadmap',
      'Learn change management best practices',
    ],
    testimonials: [
      {
        quote: 'This tour completely transformed our understanding of what\'s possible in manufacturing. We returned with concrete plans and vendor partnerships.',
        author: 'David Chen',
        title: 'COO, Manufacturing Company',
      },
    ],
  },
  'shanghai-innovation': {
    name: 'Shanghai Innovation Ecosystem',
    tagline: 'Explore China\'s Leading Tech & Manufacturing Hub',
    description: 'Discover how Shanghai leads China\'s innovation revolution. Visit Tesla Gigafactory, engage with AI startups, and explore smart city initiatives.',
    duration: '5-7 days',
    groupSize: '8-15 participants',
    difficulty: 'Easy',
    idealFor: ['Innovation executives', 'R&D leaders', 'Business development managers', 'Entrepreneurs'],
    heroImage: '/routes/shanghai-hero.jpg',
    companies: [
      { name: 'Tesla Gigafactory', logo: '/logos/tesla.svg', description: 'EV production and battery technology' },
      { name: 'NIO', logo: '/logos/nio.svg', description: 'Smart electric vehicles and user experience' },
      { name: 'Alibaba Cloud', logo: '/logos/alibaba.svg', description: 'Cloud computing and AI infrastructure' },
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Shanghai Overview', activities: ['City tour', 'Innovation landscape briefing', 'Welcome dinner'] },
      { day: 2, title: 'Tesla Gigafactory', activities: ['Production line tour', 'Automation systems', 'Sustainability practices'] },
      { day: 3, title: 'NIO House & Smart Manufacturing', activities: ['User experience center', 'Battery swap technology', 'Digital showroom concepts'] },
      { day: 4, title: 'AI & Tech Startups', activities: ['Zhangjiang Hi-Tech Park', 'Startup ecosystem tour', 'Venture capital insights'] },
      { day: 5, title: 'Smart City & Synthesis', activities: ['Urban innovation tour', 'Key takeaways workshop', 'Action planning'] },
    ],
    included: [
      'All company visits and exclusive access',
      'Bilingual facilitation (EN/中文)',
      '5-star accommodation',
      'Private transportation',
      'All meals included',
      'Cultural activities',
      'Post-visit report',
    ],
    learningObjectives: [
      'Understand China\'s tech innovation ecosystem',
      'Learn EV manufacturing best practices',
      'Explore AI and smart city applications',
      'Build China market entry insights',
      'Network with local innovation leaders',
    ],
    testimonials: [
      {
        quote: 'The access BenchLink+ provided to Tesla and NIO was incredible. We gained insights impossible to get otherwise.',
        author: 'Maria Silva',
        title: 'VP Innovation, European Automotive',
      },
    ],
  },
  // Add more routes as needed
};

export async function generateStaticParams() {
  return Object.keys(routesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ 
  params
}: { 
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const route = routesData[slug as keyof typeof routesData];
  
  if (!route) {
    return {
      title: 'Route Not Found',
    };
  }

  return {
    title: `${route.name} | BenchLink+`,
    description: route.description,
  };
}

export default async function RouteDetailPage({ 
  params
}: { 
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug, locale } = await params;
  const route = routesData[slug as keyof typeof routesData];

  if (!route) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <Image
          src={route.heroImage}
          alt={route.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-accent rounded-full text-sm font-medium mb-4">
              {route.duration}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {route.name}
            </h1>
            <p className="text-2xl text-neutral-100 mb-8">
              {route.tagline}
            </p>
            <Button 
              as="link" 
              href={`/${locale}/inquiry`}
              variant="primary" 
              size="lg"
            >
              Request This Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-background-light py-8 border-b border-neutral-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-accent" />
              <div>
                <div className="text-sm text-neutral-600">Duration</div>
                <div className="font-bold text-neutral-900">{route.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-accent" />
              <div>
                <div className="text-sm text-neutral-600">Group Size</div>
                <div className="font-bold text-neutral-900">{route.groupSize}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-accent" />
              <div>
                <div className="text-sm text-neutral-600">Difficulty</div>
                <div className="font-bold text-neutral-900">{route.difficulty}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-accent" />
              <div>
                <div className="text-sm text-neutral-600">Location</div>
                <div className="font-bold text-neutral-900">{slug.includes('germany') ? 'Germany' : 'China'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Program Overview
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              {route.description}
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Ideal For:</h3>
              <div className="flex flex-wrap gap-3">
                {route.idealFor.map((role, index) => (
                  <div key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark Companies */}
      <section className="section bg-background-light">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Benchmark Companies You'll Visit
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {route.companies.map((company, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                <div className="h-12 mb-4 relative">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={48}
                    className="object-contain object-left"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {company.name}
                </h3>
                <p className="text-neutral-600">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Sample Itinerary
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {route.itinerary.map((day, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-card border-l-4 border-accent">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <div className="text-sm text-accent font-medium">Day</div>
                      <div className="text-2xl font-bold text-accent">{day.day}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {day.title}
                    </h3>
                    <ul className="space-y-2">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-background-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              What's Included
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {route.included.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <span className="text-lg text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8">
              Learning Objectives
            </h2>
            
            <div className="space-y-4">
              {route.learningObjectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-card">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg text-neutral-700 pt-1">
                    {objective}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {route.testimonials.length > 0 && (
        <section className="section bg-primary text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {route.testimonials.map((testimonial, index) => (
                <div key={index}>
                  <div className="text-6xl text-accent mb-6">"</div>
                  <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full" />
                    <div>
                      <div className="font-bold text-lg">{testimonial.author}</div>
                      <div className="text-neutral-200">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section bg-background-warm">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Ready to Book This Tour?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Pricing available upon request. We'll work with you to customize the program 
              to your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                as="link" 
                href={`/${locale}/inquiry`}
                variant="primary" 
                size="lg"
                icon={Calendar}
                iconPosition="right"
              >
                Request Detailed Proposal
              </Button>
              <Button 
                as="link" 
                href={`/${locale}/contact`}
                variant="outline" 
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
