"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function GetStarted() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    companySize: '',
    fundingStage: '',
    email: '',
    name: '',
    phone: '',
    challenges: [],
    goals: [],
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, category: 'challenges' | 'goals') => {
    const { value, checked } = e.target
    setFormData((prev) => {
      if (checked) {
        return { ...prev, [category]: [...prev[category], value] }
      } else {
        return { ...prev, [category]: prev[category].filter((item) => item !== value) }
      }
    })
  }

  const handleNext = () => {
    setStep((prev) => prev + 1)
  }

  const handlePrevious = () => {
    setStep((prev) => prev - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would submit the form data to your backend here
    setStep(4) // Move to success step
  }

  const steps = [
    { id: 1, name: 'Company Information', status: step > 1 ? 'complete' : 'current' },
    { id: 2, name: 'Risk Assessment Needs', status: step > 2 ? 'complete' : step === 2 ? 'current' : 'upcoming' },
    { id: 3, name: 'Contact Information', status: step > 3 ? 'complete' : step === 3 ? 'current' : 'upcoming' },
  ]

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="relative bg-indigo-600 dark:bg-indigo-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Get Started</h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Begin your financial risk assessment journey with a few simple steps.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Progress">
          <ol role="list" className="border border-gray-300 dark:border-gray-700 rounded-md divide-y divide-gray-300 dark:divide-gray-700 md:flex md:divide-y-0">
            {steps.map((stepItem, stepIdx) => (
              <li key={stepItem.name} className="relative md:flex-1 md:flex">
                {stepItem.status === 'complete' ? (
                  <a href="#" className="group flex items-center w-full">
                    <span className="px-6 py-4 flex items-center text-sm font-medium">
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full">
                        <CheckIcon className="w-6 h-6 text-white" aria-hidden="true" />
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-900 dark:text-white">{stepItem.name}</span>
                    </span>
                  </a>
                ) : stepItem.status === 'current' ? (
                  <a href="#" className="px-6 py-4 flex items-center text-sm font-medium" aria-current="step">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                      <span className="text-indigo-600 dark:text-indigo-400">{stepItem.id}</span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-indigo-600 dark:text-indigo-400">{stepItem.name}</span>
                  </a>
                ) : (
                  <a href="#" className="group flex items-center">
                    <span className="px-6 py-4 flex items-center text-sm font-medium">
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 dark:border-gray-700 rounded-full">
                        <span className="text-gray-500 dark:text-gray-400">{stepItem.id}</span>
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-500 dark:text-gray-400">{stepItem.name}</span>
                    </span>
                  </a>
                )}

                {stepIdx !== steps.length - 1 ? (
                  <div className="hidden md:block absolute top-0 right-0 h-full w-5" aria-hidden="true">
                    <svg
                      className="h-full w-full text-gray-300 dark:text-gray-700"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </nav>

        {/* Form */}
        <div className="mt-10 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Company Information</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                      required
                    >
                      <option value="">Select an industry</option>
                      <option value="technology">Technology</option>
                      <option value="finance">Finance</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="retail">Retail</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Company Size
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                      required
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501+">501+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="fundingStage" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Funding Stage
                    </label>
                    <select
                      id="fundingStage"
                      name="fundingStage"
                      value={formData.fundingStage}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                      required
                    >
                      <option value="">Select funding stage</option>
                      <option value="pre-seed">Pre-seed</option>
                      <option value="seed">Seed</option>
                      <option value="series-a">Series A</option>
                      <option value="series-b">Series B</option>
                      <option value="series-c+">Series C+</option>
                      <option value="public">Public</option>
                      <option value="government">Government</option>
                    </select>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Risk Assessment Needs</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">What financial challenges are you facing?</h3>
                    <div className="mt-4 space-y-4">
                      {[
                        { id: 'cash-flow', label: 'Cash flow management' },
                        { id: 'market-volatility', label: 'Market volatility' },
                        { id: 'regulatory-compliance', label: 'Regulatory compliance' },
                        { id: 'funding-uncertainty', label: 'Funding uncertainty' },
                        { id: 'operational-risks', label: 'Operational risks' },
                        { id: 'credit-risks', label: 'Credit risks' },
                      ].map((challenge) => (
                        <div key={challenge.id} className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={challenge.id}
                              name={challenge.id}
                              type="checkbox"
                              value={challenge.id}
                              onChange={(e) => handleCheckboxChange(e, 'challenges')}
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-700 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor={challenge.id} className="font-medium text-gray-700 dark:text-gray-300">
                              {challenge.label}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">What are your risk assessment goals?</h3>
                    <div className="mt-4 space-y-4">
                      {[
                        { id: 'identify-risks', label: 'Identify potential risks' },
                        { id: 'compliance', label: 'Ensure regulatory compliance' },
                        { id: 'investor-confidence', label: 'Increase investor confidence' },
                        { id: 'strategic-planning', label: 'Improve strategic planning' },
                        { id: 'crisis-preparation', label: 'Prepare for potential crises' },
                        { id: 'optimize-capital', label: 'Optimize capital allocation' },
                      ].map((goal) => (
                        <div key={goal.id} className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={goal.id}
                              name={goal.id}
                              type="checkbox"
                              value={goal.id}
                              onChange={(e) => handleCheckboxChange(e, 'goals')}
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-700 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor={goal.id} className="font-medium text-gray-700 dark:text-gray-300">
                              {goal.label}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.form
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="relative flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-700 rounded"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="privacy" className="font-medium text-gray-700 dark:text-gray-300">
                        I agree to the privacy policy and terms of service
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </motion.form>
            )}

            {step === 4 && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md p-6 text-center"
              >
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900">
                  <CheckIcon className="h-6 w-6 text-green-600 dark:text-green-400" aria-hidden="true" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">Application Submitted!</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Thank you for your interest in our financial risk assessment services. One of our experts will contact you within 24 hours to discuss your needs.
                </p>
                <div className="mt-6">
                  <a
                    href="/"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Return to Home
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}