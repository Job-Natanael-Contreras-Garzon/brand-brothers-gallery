
import React, { useState } from 'react';
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
    <section id="contact" className="py-20 bg-white dark:bg-brand-dark text-brand-dark dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
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
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div>
              <h3 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {t('contact.info.description')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="text-brand-teal" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-teal mb-2">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">hola@brandingbrothers.com</p>
                  <p className="text-gray-600 dark:text-gray-300">info@brandingbrothers.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brand-teal" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-teal mb-2">Teléfono</h4>
                  <p className="text-gray-600 dark:text-gray-300">+34 912 345 678</p>
                  <p className="text-gray-600 dark:text-gray-300">+34 687 654 321</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-teal/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-teal" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-teal mb-2">Oficina</h4>
                  <p className="text-gray-600 dark:text-gray-300">Calle Gran Vía, 45</p>
                  <p className="text-gray-600 dark:text-gray-300">28013 Madrid, España</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-50 dark:bg-brand-dark-light p-6 rounded-xl border border-gray-200 dark:border-gray-800">
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
    </section>
  );
};
