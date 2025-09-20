import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MessageCircle, Users, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mpwjvbrr");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative py-16 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/wallpaperflare.com_wallpaper (7) (1).jpg")'}}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Get in Touch with Us
          </h1>
          <p className="text-xl text-gray-200 relative z-10">
            Have questions about our courses? Want to start your German learning journey? 
            We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Options and Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Options */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h2>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100"
                >
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Message us on WhatsApp</h3>
                    <p className="text-gray-600">Get instant answers to your questions</p>
                  </div>
                </a>

                {/* Community */}
                <a
                  href="https://t.me/deutschwithdaniel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100"
                >
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Join Our Community</h3>
                    <p className="text-gray-600">Connect with fellow German learners</p>
                  </div>
                </a>

                {/* Email */}
                <div className="flex items-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
                  <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                    <Mail className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">hello@deutschwithdaniel.com</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-3">
                    <Phone className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-blue-900">Quick Response</h3>
                  </div>
                  <p className="text-blue-800">
                    We typically respond within 2-4 hours during business hours (CET). 
                    For urgent questions, WhatsApp is your best option!
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {state.succeeded ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-4">
                    <h3 className="text-lg font-semibold mb-2">Message Sent Successfully! 🎉</h3>
                    <p>Thank you for reaching out to us. We've received your message and will get back to you within 2-4 hours during business hours.</p>
                  </div>
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                      placeholder="Tell us about your German learning goals or ask any questions..."
                    />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                      className="text-red-600 text-sm mt-1"
                    />
                  </div>

                  {state.errors && state.errors.length > 0 && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                      <p className="font-medium">Please fix the following errors:</p>
                      <ul className="list-disc list-inside mt-1">
                        {state.errors.map((error, index) => (
                          <li key={index} className="text-sm">{error.message}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg ${
                      state.submitting 
                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                        : 'bg-blue-900 text-white hover:bg-blue-800'
                    }`}
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does each course take to complete?
              </h3>
              <p className="text-gray-600">
                Course duration varies by level: A1 (8 weeks), A2 (10 weeks), B1 (12 weeks), and B2 (14 weeks). 
                However, you can learn at your own pace and take longer if needed.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do I need any prior German knowledge to start?
              </h3>
              <p className="text-gray-600">
                Not at all! Our A1 Beginner course is designed for complete beginners. If you have some German knowledge, 
                we can help you determine which level is right for you.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What kind of support do I get during the course?
              </h3>
              <p className="text-gray-600">
                You'll have direct access to Daniel for questions, feedback on exercises, and personalized guidance. 
                Plus, you can join our community group to practice with other learners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}