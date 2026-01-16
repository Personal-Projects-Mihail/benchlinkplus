import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact BenchLink+ | Get in Touch',
  description: 'Contact BenchLink+ for inquiries about executive benchmarking tours, innovation expeditions, and custom learning programs.',
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'footer' });
  const tForm = await getTranslations({ locale, namespace: 'form' });

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      detail: 'contact@benchlinkplus.co',
      link: 'mailto:contact@benchlinkplus.co',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      detail: '+86 138 0000 0000',
      link: 'tel:+8613800000000',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      detail: 'Shanghai, China',
      link: null,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Office Hours',
      detail: 'Mon-Fri: 9:00 AM - 6:00 PM (CST)',
      link: null,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed">
              Ready to explore benchmarking opportunities? Our team is here to help 
              design the perfect learning experience for your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {method.title}
                </h3>
                {method.link ? (
                  <a 
                    href={method.link}
                    className="text-neutral-600 hover:text-accent transition-colors"
                  >
                    {method.detail}
                  </a>
                ) : (
                  <p className="text-neutral-600">{method.detail}</p>
                )}
              </div>
            ))}
          </div>

          {/* Quick Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-background-light rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4 text-center">
                Quick Inquiry Form
              </h2>
              <p className="text-center text-neutral-600 mb-8">
                For detailed tour requests, please visit our{' '}
                <a href={`/${locale}/inquiry`} className="text-accent font-medium hover:underline">
                  booking page
                </a>
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="label-field">
                      {tForm('nameLabel')} <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="input-field"
                      placeholder={tForm('namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="label-field">
                      {tForm('emailLabel')} <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input-field"
                      placeholder={tForm('emailPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="label-field">
                    Subject <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="input-field"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label-field">
                    {tForm('messageLabel')} <span className="text-error">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="input-field resize-none"
                    placeholder={tForm('messagePlaceholder')}
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  {tForm('submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section bg-background-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Connect With Us
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Follow our journey and stay updated on innovation insights
            </p>
            
            <div className="flex justify-center gap-4">
              <a
                href="https://linkedin.com/company/benchlink"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                <span className="font-medium">LinkedIn</span>
              </a>

              {locale === 'zh' && (
                <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <svg className="w-6 h-6 text-[#09B83E]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.027zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                  </svg>
                  <span className="font-medium">WeChat</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
