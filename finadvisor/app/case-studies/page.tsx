"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

type CaseStudy = {
  id: string
  title: string
  company: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  image: string
  logo: string
}

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all')
  
  const caseStudies: CaseStudy[] = [
    {
      id: 'fintech-startup',
      title: 'How FinEdge Reduced Risk Exposure by 40%',
      company: 'FinEdge',
      industry: 'Fintech',
      challenge: 'FinEdge, a rapidly growing fintech startup, was facing challenges in managing their expanding risk profile as they scaled operations across multiple markets.',
      solution: 'Implemented our comprehensive risk assessment platform with custom modules for regulatory compliance and real-time market risk monitoring.',
      results: [
        'Reduced overall risk exposure by 40%',
        'Achieved compliance with regulations in 5 new markets',
        'Saved 20 hours per week in manual risk assessment processes',
        'Secured $15M in additional funding due to improved risk management',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      logo: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
    },
    {
      id: 'healthcare-tech',
      title: 'MediTech Secures Compliance Across 12 Jurisdictions',
      company: 'MediTech Solutions',
      industry: 'Healthcare',
      challenge: 'MediTech Solutions needed to ensure compliance with healthcare financial regulations across 12 different jurisdictions while maintaining rapid growth.',
      solution: 'Deployed our platform with specialized healthcare compliance modules and integrated with their existing financial systems.',
      results: [
        'Achieved 100% compliance across all 12 jurisdictions',
        'Reduced compliance-related costs by 35%',
        'Automated 90% of compliance reporting',
        'Identified and mitigated 3 major financial risks before they impacted operations',
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      logo: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 'ecommerce-platform',
      title: 'ShopNow Optimizes Cash Flow Management',
      company: 'ShopNow',
      industry: 'E-commerce',
      challenge: 'ShopNow was experiencing rapid growth but struggling with cash flow management and financial forecasting accuracy.',
      solution: 'Implemented our cash flow forecasting and risk assessment tools with e-commerce-specific metrics and integrations.',
      results: [
        'Improved cash flow forecasting accuracy by 60%',
        'Reduced working capital requirements by 25%',
        'Identified seasonal risk patterns and implemented mitigation strategies',
        'Secured more favorable terms with suppliers based on improved financial management',
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      logo: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 'government-agency',
      title: 'GovTech Modernizes Financial Risk Management',
      company: 'GovTech Innovation Agency',
      industry: 'Government',
      challenge: 'A government innovation agency needed to modernize their financial risk management practices while maintaining strict compliance with public sector requirements.',
      solution: 'Customized our platform with government-specific compliance modules and transparent reporting tools.',
      results: [
        'Achieved full compliance with all government financial regulations',
        'Increased transparency in financial risk reporting to stakeholders',
        'Reduced audit preparation time by 70%',
        'Improved allocation of public funds through better risk assessment',
      ],
      image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      logo: 'https://images.unsplash.com/photo-1569407228235-9a744831a150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
    },
  ]
  
  const industries = ['all', ...new Set(caseStudies.map(study => study.industry))]
  
  const filteredCaseStudies = selectedIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry)

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="relative bg-indigo-600 dark:bg-indigo-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Case Studies</h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            See how organizations have transformed their financial risk management with our platform.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Filter by industry:</h2>
          <div className="mt-4 sm:mt-0 flex flex-wrap gap-2">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedIndustry === industry
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {industry.charAt(0).toUpperCase() + industry.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60" />
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="bg-white dark:bg-gray-900 rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                    <Image
                      src={study.logo}
                      alt={study.company}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                    {study.industry}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">{study.title}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{study.company}</p>
                
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Challenge</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{study.challenge}</p>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Solution</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{study.solution}</p>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Results</h4>
                  <ul className="mt-2 space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRightIcon className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                        <span className="ml-2 text-gray-600 dark:text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Read full case study
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700 dark:bg-indigo-900">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your financial risk management?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join these successful organizations and see how our platform can help you identify, assess, and mitigate financial risks.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
              >
                Get started
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-900"
              >
                Request a demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}