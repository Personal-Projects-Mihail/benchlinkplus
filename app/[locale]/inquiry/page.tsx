'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { CheckCircle, Send } from 'lucide-react';

export default function InquiryPage() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background-light py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-success" />
            </div>
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              {t('successTitle')}
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              {t('successMessage')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`/${locale}`} className="btn-primary">
                Return to Home
              </a>
              <a href={`/${locale}/services`} className="btn-secondary">
                Explore Routes
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Request a Custom Tour
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100 leading-relaxed">
              Tell us about your objectives, and we'll create a tailored benchmarking 
              experience that delivers real business value.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-background-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 pb-3 border-b border-neutral-200">
                    Personal Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="label-field">
                        {t('nameLabel')} <span className="text-error">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="input-field"
                        placeholder={t('namePlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="label-field">
                        {t('emailLabel')} <span className="text-error">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="input-field"
                        placeholder={t('emailPlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="label-field">
                        {t('phoneLabel')} <span className="text-error">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="input-field"
                        placeholder={t('phonePlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="jobTitle" className="label-field">
                        {t('jobTitleLabel')} <span className="text-error">*</span>
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        required
                        className="input-field"
                        placeholder={t('jobTitlePlaceholder')}
                      />
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 pb-3 border-b border-neutral-200">
                    Company Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="label-field">
                        {t('companyLabel')} <span className="text-error">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className="input-field"
                        placeholder={t('companyPlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="industry" className="label-field">
                        {t('industryLabel')} <span className="text-error">*</span>
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        className="input-field"
                      >
                        <option value="">{t('industryPlaceholder')}</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="technology">Technology</option>
                        <option value="automotive">Automotive</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="finance">Finance</option>
                        <option value="retail">Retail</option>
                        <option value="energy">Energy</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Tour Details */}
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 pb-3 border-b border-neutral-200">
                    Tour Details
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="participants" className="label-field">
                        {t('participantsLabel')} <span className="text-error">*</span>
                      </label>
                      <select
                        id="participants"
                        name="participants"
                        required
                        className="input-field"
                      >
                        <option value="">Select number</option>
                        <option value="1-5">1-5 people</option>
                        <option value="6-10">6-10 people</option>
                        <option value="11-20">11-20 people</option>
                        <option value="21-30">21-30 people</option>
                        <option value="31+">31+ people</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="route" className="label-field">
                        {t('routeLabel')} <span className="text-error">*</span>
                      </label>
                      <select
                        id="route"
                        name="route"
                        required
                        className="input-field"
                      >
                        <option value="">{t('routePlaceholder')}</option>
                        <optgroup label="Domestic Routes">
                          <option value="shanghai">Shanghai Innovation</option>
                          <option value="shenzhen">Shenzhen Manufacturing</option>
                          <option value="suzhou">Suzhou Excellence</option>
                        </optgroup>
                        <optgroup label="International Routes">
                          <option value="germany">Germany Industry 4.0</option>
                          <option value="silicon-valley">Silicon Valley</option>
                          <option value="portugal">Portugal Innovation</option>
                          <option value="japan">Japan Lean Manufacturing</option>
                        </optgroup>
                        <option value="custom">Custom Program</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="dates" className="label-field">
                        {t('datesLabel')} <span className="text-error">*</span>
                      </label>
                      <input
                        type="text"
                        id="dates"
                        name="dates"
                        required
                        className="input-field"
                        placeholder={t('datesPlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="budget" className="label-field">
                        {t('budgetLabel')} <span className="text-error">*</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        className="input-field"
                      >
                        <option value="">{t('budgetPlaceholder')}</option>
                        <option value="<50k">Less than $50,000</option>
                        <option value="50-100k">$50,000 - $100,000</option>
                        <option value="100-250k">$100,000 - $250,000</option>
                        <option value="250k+">$250,000+</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 pb-3 border-b border-neutral-200">
                    Additional Information
                  </h2>
                  
                  <div>
                    <label htmlFor="message" className="label-field">
                      {t('messageLabel')} <span className="text-error">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      maxLength={500}
                      className="input-field resize-none"
                      placeholder={t('messagePlaceholder')}
                    />
                    <p className="text-sm text-neutral-500 mt-1">Maximum 500 characters</p>
                  </div>
                </div>

                {/* Consent */}
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-5 h-5 text-accent rounded border-neutral-300 focus:ring-accent"
                    />
                    <span className="text-sm text-neutral-700">
                      I agree to BenchLink+'s Privacy Policy and consent to being contacted 
                      by the BenchLink+ team. <span className="text-error">*</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 text-accent rounded border-neutral-300 focus:ring-accent"
                    />
                    <span className="text-sm text-neutral-700">
                      Subscribe to newsletter for innovation insights and tour updates (optional)
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{t('submitting')}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t('submit')}</span>
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-sm text-neutral-600 mt-4">
                    Response time: Within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
