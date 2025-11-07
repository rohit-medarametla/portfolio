'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitSuccess(false);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    
    if (submitError) {
      setSubmitError('');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow animate-slide-up">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-light/10 dark:bg-accent/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary-light dark:text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                    Email
                  </h3>
                  <a href="mailto:your.email@example.com" className="text-slate-600 dark:text-slate-400 hover:text-primary-light dark:hover:text-accent transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow animate-slide-up delay-100">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-light/10 dark:bg-accent/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary-light dark:text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                    Location
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Wellington, New Zealand 🇳🇿
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm animate-slide-up delay-200">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Connect on Social Media
              </h3>
              <div className="flex space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400" aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-900 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 shadow-sm border border-slate-200 dark:border-slate-700 animate-slide-up">
              {/* Success Message */}
              {submitSuccess && (
                <div className="mb-6 p-4 bg-success/10 border border-success rounded-lg animate-fade-in flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <p className="text-success font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg text-red-600 dark:text-red-400 animate-fade-in">
                  {submitError}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name
                        ? 'border-red-500'
                        : 'border-slate-300 dark:border-slate-600'
                    } bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-accent focus:border-transparent transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-slate-300 dark:border-slate-600'
                    } bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-accent focus:border-transparent transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.subject
                      ? 'border-red-500'
                      : 'border-slate-300 dark:border-slate-600'
                  } bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-accent focus:border-transparent transition-all`}
                  placeholder="Project Collaboration"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message
                      ? 'border-red-500'
                      : 'border-slate-300 dark:border-slate-600'
                  } bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-accent focus:border-transparent transition-all resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary-light dark:bg-accent text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 text-center">
                Your message will be securely stored and I'll respond within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
