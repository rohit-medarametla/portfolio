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
        
        // Hide success message after 5 seconds
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
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    
    // Clear submit error
    if (submitError) {
      setSubmitError('');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary-light to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info - Same as before */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-slide-up">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary-light to-purple-600 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-slide-up delay-100">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary-light to-purple-600 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Wellington, New Zealand 🇳🇿
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-slide-up delay-200">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary-light to-purple-600 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Phone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Available on request
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-light/10 to-purple-600/10 dark:from-primary-dark/10 dark:to-purple-600/10 rounded-xl p-6 border border-gray-200 dark:border-gray-700 animate-slide-up delay-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect on Social Media
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:scale-110 transition-transform"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:scale-110 transition-transform"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-sky-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form with Supabase Integration */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg animate-slide-up">
              {/* Success Message */}
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg animate-fade-in">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <p className="text-green-700 dark:text-green-400 font-medium">
                      Message sent successfully! Your message has been saved and I'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg text-red-700 dark:text-red-400 animate-fade-in">
                  {submitError}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-slate-700 text-gray-900 dark:text-white 
                     focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark 
                     focus:border-transparent transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-slate-700 text-gray-900 dark:text-white 
                     focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark 
                     focus:border-transparent transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                      : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-slate-700 text-gray-900 dark:text-white 
                   focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark 
                   focus:border-transparent transition-all`}
                  placeholder="Project Collaboration"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
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
                      : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-slate-700 text-gray-900 dark:text-white 
                   focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark 
                   focus:border-transparent transition-all resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-light to-purple-600 
                         text-white font-semibold rounded-lg shadow-lg hover:shadow-xl 
                         hover:scale-105 transition-all duration-300 flex items-center 
                         justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed 
                         disabled:hover:scale-100"
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

              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                Your message will be securely stored and I'll respond within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
