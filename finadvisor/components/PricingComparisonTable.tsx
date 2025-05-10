"use client"

import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

type Feature = {
  name: string
  tiers: {
    starter: boolean | string
    growth: boolean | string
    enterprise: boolean | string
  }
}

export default function PricingComparisonTable() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)

  const features: Feature[] = [
    {
      name: 'Risk Assessment Dashboard',
      tiers: { starter: true, growth: true, enterprise: true },
    },
    {
      name: 'Financial Risk Monitoring',
      tiers: { starter: '5 metrics', growth: '15 metrics', enterprise: 'Unlimited' },
    },
    {
      name: 'Real-time Alerts',
      tiers: { starter: true, growth: true, enterprise: true },
    },
    {
      name: 'Custom Risk Models',
      tiers: { starter: false, growth: '3 models', enterprise: 'Unlimited' },
    },
    {
      name: 'Regulatory Compliance Tools',
      tiers: { starter: false, growth: true, enterprise: true },
    },
    {
      name: 'API Access',
      tiers: { starter: false, growth: true, enterprise: true },
    },
    {
      name: 'Data Export',
      tiers: { starter: 'CSV only', growth: 'CSV, Excel', enterprise: 'All formats' },
    },
    {
      name: 'Historical Data',
      tiers: { starter: '3 months', growth: '1 year', enterprise: 'Unlimited' },
    },
    {
      name: 'Team Members',
      tiers: { starter: '2 users', growth: '10 users', enterprise: 'Unlimited' },
    },
    {
      name: 'Priority Support',
      tiers: { starter: false, growth: true, enterprise: true },
    },
    {
      name: 'Dedicated Account Manager',
      tiers: { starter: false, growth: false, enterprise: true },
    },
    {
      name: 'Custom Integrations',
      tiers: { starter: false, growth: '2 integrations', enterprise: 'Unlimited' },
    },
    {
      name: 'White Labeling',
      tiers: { starter: false, growth: false, enterprise: true },
    },
    {
      name: 'On-premise Deployment',
      tiers: { starter: false, growth: false, enterprise: true },
    },
  ]

  const highlightRow = (tier: string) => {
    setSelectedTier(selectedTier === tier ? null : tier)
  }

  return (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center">
            Compare Plans
          </h2>
          <p className="mt-5 text-xl text-gray-500 dark:text-gray-400 text-center">
            Find the perfect plan for your financial risk assessment needs
          </p>
        </div>

        <div className="mt-12 overflow-hidden shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:pl-6">
                  Features
                </th>
                <th 
                  scope="col" 
                  className={`px-3 py-3.5 text-center text-sm font-semibold ${
                    selectedTier === 'starter' ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300' : 'text-gray-900 dark:text-white'
                  }`}
                  onClick={() => highlightRow('starter')}
                >
                  Starter
                </th>
                <th 
                  scope="col" 
                  className={`px-3 py-3.5 text-center text-sm font-semibold ${
                    selectedTier === 'growth' ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300' : 'text-gray-900 dark:text-white'
                  }`}
                  onClick={() => highlightRow('growth')}
                >
                  Growth
                </th>
                <th 
                  scope="col" 
                  className={`px-3 py-3.5 text-center text-sm font-semibold ${
                    selectedTier === 'enterprise' ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300' : 'text-gray-900 dark:text-white'
                  }`}
                  onClick={() => highlightRow('enterprise')}
                >
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
              {features.map((feature) => (
                <tr key={feature.name}>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6">
                    {feature.name}
                  </td>
                  <td className={`px-3 py-4 text-sm text-center ${
                    selectedTier === 'starter' ? 'bg-indigo-50 dark:bg-indigo-900' : ''
                  }`}>
                    {typeof feature.tiers.starter === 'boolean' ? (
                      feature.tiers.starter ? (
                        <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XMarkIcon className="h-5 w-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-500 dark:text-gray-400">{feature.tiers.starter}</span>
                    )}
                  </td>
                  <td className={`px-3 py-4 text-sm text-center ${
                    selectedTier === 'growth' ? 'bg-indigo-50 dark:bg-indigo-900' : ''
                  }`}>
                    {typeof feature.tiers.growth === 'boolean' ? (
                      feature.tiers.growth ? (
                        <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XMarkIcon className="h-5 w-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-500 dark:text-gray-400">{feature.tiers.growth}</span>
                    )}
                  </td>
                  <td className={`px-3 py-4 text-sm text-center ${
                    selectedTier === 'enterprise' ? 'bg-indigo-50 dark:bg-indigo-900' : ''
                  }`}>
                    {typeof feature.tiers.enterprise === 'boolean' ? (
                      feature.tiers.enterprise ? (
                        <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <XMarkIcon className="h-5 w-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-500 dark:text-gray-400">{feature.tiers.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-white sm:pl-6">
                  Price
                </td>
                <td className={`px-3 py-4 text-sm text-center font-medium ${
                  selectedTier === 'starter' ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300' : 'text-gray-900 dark:text-white'
                }`}>
                  $99/month
                </td>
                <td className={`px-3 py-4 text-sm text-center font-medium ${
                  selectedTier === 'growth' ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300' : 'text-gray-900 dark:text-white'
                }`}>
                  $299/month
                </td>
                <td className={`px-3 py-4 text-sm text-center font-medium ${
                  selectedTier === 'enterprise' ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300' : 'text-gray-900 dark:text-white'
                }`}>
                  Custom
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-base text-gray-500 dark:text-gray-400">
            Need help choosing the right plan? <a href="/contact" className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline">Contact our team</a>
          </p>
        </div>
      </div>
    </div>
  )
}