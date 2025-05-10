"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  const tiers = [
    {
      name: 'Startup',
      id: 'tier-startup',
      href: '/get-started',
      priceMonthly: '$99',
      priceAnnual: '$79',
      description: 'Perfect for early-stage startups looking to understand their financial risks.',
      features: [
        'Basic risk assessment',
        'Monthly risk reports',
        'Access to risk dashboard',
        'Email support',
        '1 team member',
      ],
      mostPopular: false,
    },
    {
      name: 'Growth',
      id: 'tier-growth',
      href: '/get-started',
      priceMonthly: '$199',
      priceAnnual: '$159',
      description: 'For growing startups that need comprehensive risk analysis and management.',
      features: [
        'Advanced risk assessment',
        'Weekly risk reports',
        'Custom risk metrics',
        'Priority email support',
        'Up to 5 team members',
        'API access',
      ],
      mostPopular: true,
    },
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      href: '/contact',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      description: 'Dedicated solutions for large organizations with complex risk profiles.',
      features: [
        'Comprehensive risk assessment',
        'Daily risk monitoring',
        'Custom integrations',
        'Dedicated account manager',
        'Unlimited team members',
        'Advanced API access',
        'On-premise deployment options',
      ],
      mostPopular: false,
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="relative bg-indigo-600 dark:bg-indigo-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Pricing Plans</h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Choose the right plan for your startup's risk assessment needs.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <div className="relative self-center bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5 flex sm:mt-8">
            <button
              type="button"
              className={`${
                annual ? 'bg-white dark:bg-gray-700 shadow-sm' : 'bg-transparent'
              } relative py-2 px-6 border-transparent rounded-md text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8`}
              onClick={() => setAnnual(true)}
            >
              Annual billing
            </button>
            <button
              type="button"
              className={`${
                !annual ? 'bg-white dark:bg-gray-700 shadow-sm' : 'bg-transparent'
              } ml-0.5 relative py-2 px-6 border-transparent rounded-md text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8`}
              onClick={() => setAnnual(false)}
            >
              Monthly billing
            </button>
          </div>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              whileHover={{ y: -10 }}
              className={`${
                tier.mostPopular
                  ? 'border-indigo-500 dark:border-indigo-400'
                  : 'border-gray-200 dark:border-gray-700'
              } border-2 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-700`}
            >
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{tier.name}</h2>
                {tier.mostPopular && (
                  <p className="absolute top-0 transform -translate-y-1/2 bg-indigo-500 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Most popular
                  </p>
                )}
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    {annual ? tier.priceAnnual : tier.priceMonthly}
                  </span>
                  {tier.priceMonthly !== 'Custom' && (
                    <span className="text-base font-medium text-gray-500 dark:text-gray-400">/mo</span>
                  )}
                </p>
                <Link
                  href={tier.href}
                  className={`${
                    tier.mostPopular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-800'
                  } mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium`}
                >
                  {tier.name === 'Enterprise' ? 'Contact us' : 'Get started'}
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 dark:text-white uppercase tracking-wide">What's included</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center">
            Frequently asked questions
          </h2>
          <div className="mt-12 max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
            <div className="py-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Can I change plans later?
              </h3>
              <div className="mt-2 text-base text-gray-500 dark:text-gray-400">
                <p>
                  Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated.
                </p>
              </div>
            </div>
            <div className="py-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Is there a free trial?
              </h3>
              <div className="mt-2 text-base text-gray-500 dark:text-gray-400">
                <p>
                  We offer a 14-day free trial for all plans. No credit card required to start your trial.
                </p>
              </div>
            </div>
            <div className="py-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                What payment methods do you accept?
              </h3>
              <div className="mt-2 text-base text-gray-500 dark:text-gray-400">
                <p>
                  We accept all major credit cards, PayPal, and bank transfers for annual plans.
                </p>
              </div>
            </div>
            <div className="py-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Do you offer discounts for startups?
              </h3>
              <div className="mt-2 text-base text-gray-500 dark:text-gray-400">
                <p>
                  Yes, we offer special pricing for early-stage startups and non-profit organizations. Contact our sales team for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">Still have questions?</span>
            <span className="block text-indigo-600 dark:text-indigo-400">Our team is here to help.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Contact us
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="/faq" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white dark:bg-gray-800 dark:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}