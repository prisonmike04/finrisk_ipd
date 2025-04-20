"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would submit the form data to your backend here
    console.log('Form submitted:', formState)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="relative bg-indigo-600 dark:bg-indigo-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Contact Us</h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Have questions about our financial risk assessment platform? We're here to help.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative bg-white dark:bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Get in touch</h2>
              <p className="mt-3 text-lg leading-6 text-gray-500 dark:text-gray-400">
                We'd love to hear from you. Our team is ready to answer your questions about our financial risk assessment platform.
              </p>
              <dl className="mt-8 text-base text-gray-500 dark:text-gray-400">
                <div className="mt-6">
                  <dt className="sr-only">Physical address</dt>
                  <dd className="flex">
                    <MapPinIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">
                      123 Financial District<br />
                      San Francisco, CA 94111<br />
                      United States
                    </span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">+1 (555) 123-4567</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">support@finadvisor.com</span>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-base text-gray-500 dark:text-gray-400">
                Looking for a demo?{' '}
                <a href="/demo" className="font-medium text-indigo-600 dark:text-indigo-400 underline">
                  Request a personalized walkthrough
                </a>
                .
              </p>

              {/* Office Hours */}
              <div className="mt-10">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Office hours</h3>
                <div className="mt-2 space-y-1 text-base text-gray-500 dark:text-gray-400">
                  <p>Monday - Friday: 9AM - 5PM PST</p>
                  <p>Saturday: 10AM - 2PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-md bg-green-50 dark:bg-green-900 p-4"
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800 dark:text-green-200">Message sent</h3>
                      <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                        <p>Thank you for contacting us! We'll get back to you as soon as possible.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        value={formState.firstName}
                        onChange={handleChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        value={formState.lastName}
                        onChange={handleChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <div className="mt-1">
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                      >
                        <option value="">Please select</option>
                        <option value="pricing">Pricing Inquiry</option>
                        <option value="technical">Technical Support</option>
                        <option value="feature">Feature Request</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <input
                          id="privacy"
                          name="privacy"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-700 rounded"
                          required
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base text-gray-500 dark:text-gray-400">
                          By selecting this, you agree to our{' '}
                          <a href="/privacy" className="font-medium text-indigo-600 dark:text-indigo-400 underline">
                            Privacy Policy
                          </a>{' '}
                          and{' '}
                          <a href="/terms" className="font-medium text-indigo-600 dark:text-indigo-400 underline">
                            Terms of Service
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-700 overflow-hidden rounded-lg shadow-md">
            <div className="relative h-96">
              {/* In a real application, you would use a proper map component like Google Maps or Mapbox */}
              <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">Interactive Map Would Be Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Offices */}
      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">
            Our Global Offices
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500 dark:text-gray-400">
            Visit us at one of our locations around the world.
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                city: 'San Francisco',
                address: '123 Financial District, San Francisco, CA 94111, USA',
                phone: '+1 (555) 123-4567',
                email: 'sf@finadvisor.com',
              },
              {
                city: 'New York',
                address: '456 Wall Street, New York, NY 10005, USA',
                phone: '+1 (555) 987-6543',
                email: 'nyc@finadvisor.com',
              },
              {
                city: 'London',
                address: '789 Canary Wharf, London E14 5AB, UK',
                phone: '+44 20 7946 0958',
                email: 'london@finadvisor.com',
              },
            ].map((office, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{office.city}</h3>
                <address className="mt-3 not-italic text-gray-500 dark:text-gray-400">
                  <p>{office.address}</p>
                  <p className="mt-2">{office.phone}</p>
                  <p>{office.email}</p>
                </address>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}