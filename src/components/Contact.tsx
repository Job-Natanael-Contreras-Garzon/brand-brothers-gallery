
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('translate-y-20', 'opacity-0');
          } else {
            entry.target.classList.remove('animate-slide-up');
            entry.target.classList.add('translate-y-20', 'opacity-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="w-full py-20 bg-white dark:bg-brand-dark text-brand-dark dark:text-white">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-brand-dark-light border border-gray-300 dark:border-gray-700 rounded-lg focus:border-brand-teal focus:outline-none text-brand-dark dark:text-white"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-brand-dark-light border border-gray-300 dark:border-gray-700 rounded-lg focus:border-brand-teal focus:outline-none text-brand-dark dark:text-white"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-brand-dark-light border border-gray-300 dark:border-gray-700 rounded-lg focus:border-brand-teal focus:outline-none text-brand-dark dark:text-white"
                    placeholder={t('contact.form.companyPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-brand-dark-light border border-gray-300 dark:border-gray-700 rounded-lg focus:border-brand-teal focus:outline-none text-brand-dark dark:text-white resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-teal text-brand-dark px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-brand-teal-light transition-all duration-300"
                >
                  <span>{t('contact.form.send')}</span>
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '400ms' }}>
              <div>
                <h3 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {t('contact.info.description')}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '500ms' }}>
                  <div className="w-12 h-12 bg-brand-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-brand-teal" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-teal mb-2">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">hola@brandingbrothers.com</p>
                    <p className="text-gray-600 dark:text-gray-300">info@brandingbrothers.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '600ms' }}>
                  <div className="w-12 h-12 bg-brand-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-brand-teal" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-teal mb-2">Teléfono</h4>
                    <p className="text-gray-600 dark:text-gray-300">+591 78504107</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 dark:bg-brand-dark-light p-6 rounded-xl border border-gray-200 dark:border-gray-800 animate-on-scroll translate-y-20 opacity-0 transition-all duration-700" style={{ transitionDelay: '800ms' }}>
                <h4 className="font-semibold text-brand-teal mb-4">{t('contact.hours.title')}</h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>{t('contact.hours.weekdays')}</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.saturday')}</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.sunday')}</span>
                    <span>{t('contact.hours.closed')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
