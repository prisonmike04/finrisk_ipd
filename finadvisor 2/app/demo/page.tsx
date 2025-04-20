"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function Demo() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Request a Demo</h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            See our financial risk assessment platform in action with a personalized demo.
          </p>
        </div>
      </div>

      {/* Demo Form */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative bg-white dark:bg-gray-800 shadow-xl rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="relative overflow-hidden py-10 px-6 bg-indigo-700 dark:bg-indigo-900 sm:px-10 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 to-indigo-800 mix-blend-multiply" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white">What to expect</h3>
                <p className="mt-6 text-base text-indigo-200">
                  Our personalized demo will show you:
                </p>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-6 w-6 text-indigo-300" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-base text-indigo-200">How our platform identifies financial risks specific to your business</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-6 w-6 text-indigo-300" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-base text-indigo-200">Real-time risk monitoring and alert systems</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-6 w-6 text-indigo-300" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-base text-indigo-200">Customizable reporting and analytics dashboards</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-6 w-6 text-indigo-300" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-base text-indigo-200">Integration capabilities with your existing systems</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-6 w-6 text-indigo-300" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-base text-indigo-200">Compliance and regulatory features relevant to your industry</p>
                  </li>
                </ul>
                <div className="mt-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-12 w-12 text-indigo-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path className="text-indigo-600" d="M10 17l6-5-6-5v10z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-white">30-minute personalized walkthrough</p>
                      <p className="text-sm text-indigo-200">Tailored to your specific needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10 px-6 sm:px-10 lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Request your personalized demo</h3>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 rounded-md bg-green-50 dark:bg-green-900 p-4"
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800 dark:text-green-200">Demo request received</h3>
                      <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                        <p>Thank you for your interest! One of our product specialists will contact you within 24 hours to schedule your personalized demo.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        value={formState.name}
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
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Company
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        value={formState.company}
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      What specific aspects of financial risk assessment are you interested in?
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
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
                      Request Demo
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                What our clients say
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                Don't just take our word for it — hear from some of our satisfied clients.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <div className="space-y-8">
                {[
                  {
                    name: 'Sarah Thompson',
                    role: 'CFO, TechStart Inc.',
                    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                    quote: 'The demo completely changed our perspective on financial risk assessment. We were able to identify three major risk factors that we had overlooked, potentially saving us millions in the long run.',
                  },
                  {
                    name: 'Michael Rodriguez',
                    role: 'Founder, FinEdge',
                    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                    quote: 'I was impressed by how tailored the demo was to our specific industry challenges. The team took the time to understand our business model and showed us exactly how their platform could address our unique risk profile.',
                  },
                ].map((testimonial, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                    <div className="flex items-center">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div className="ml-4">
                        <div className="text-lg font-medium text-gray-900 dark:text-white">{testimonial.name}</div>
                        <div className="text-base text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                    <p className="mt-4 text-base text-gray-500 dark:text-gray-300">"{testimonial.quote}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}