"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  const faqs = [
    {
      question: "What is financial risk assessment?",
      answer: "Financial risk assessment is the process of identifying, analyzing, and evaluating potential financial risks that could impact an organization's objectives. It involves assessing the likelihood and potential impact of various risk factors and developing strategies to mitigate them."
    },
    {
      question: "How can financial risk assessment benefit my startup?",
      answer: "Financial risk assessment can help your startup identify potential threats to your financial stability, prepare for market volatility, ensure regulatory compliance, optimize capital allocation, and build investor confidence. It provides a structured approach to understanding and managing the financial uncertainties inherent in startup operations."
    },
    {
      question: "What types of financial risks do startups typically face?",
      answer: "Startups typically face several types of financial risks, including market risk (changes in market conditions), credit risk (failure of debtors to repay), liquidity risk (inability to meet short-term obligations), operational risk (failures in internal processes), compliance risk (regulatory changes), and strategic risk (poor business decisions)."
    },
    {
      question: "How often should my startup conduct financial risk assessments?",
      answer: "The frequency of financial risk assessments depends on your startup's size, industry, growth stage, and regulatory environment. Generally, we recommend quarterly assessments for early-stage startups and monthly assessments for growth-stage companies. However, continuous monitoring of key risk indicators is beneficial for all organizations."
    },
    {
      question: "What's the difference between your services for government and public startups?",
      answer: "Our services for government-backed startups include specialized compliance modules for public funding requirements, transparency reporting tools, and governance frameworks aligned with public sector expectations. For private startups, we focus more on investor relations, market risk analysis, and growth-oriented financial strategies."
    },
    {
      question: "How do you ensure the security of our financial data?",
      answer: "We employ bank-level security protocols, including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2 and GDPR. Our platform is built with a security-first approach, and we never share your data with third parties without explicit consent."
    },
    {
      question: "Can your platform integrate with our existing financial systems?",
      answer: "Yes, our platform offers API integration with most major financial and accounting software, including QuickBooks, Xero, NetSuite, and SAP. We also provide custom integration solutions for proprietary systems through our Enterprise plan."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer different levels of support based on your plan. All customers receive email support with guaranteed response times. Growth and Enterprise plans include priority support, while Enterprise customers also receive a dedicated account manager and optional on-site consultations."
    },
    {
      question: "Do you offer custom risk assessment models for specific industries?",
      answer: "Yes, we offer industry-specific risk assessment models for sectors including fintech, healthcare, e-commerce, manufacturing, and government services. These models incorporate industry-specific risk factors, regulatory requirements, and benchmarking data relevant to your sector."
    },
    {
      question: "How long does it take to implement your risk assessment platform?",
      answer: "Implementation time varies based on your organization's size and complexity. Typically, small startups can be onboarded within 1-2 weeks, mid-sized companies within 2-4 weeks, and enterprise organizations within 4-8 weeks. Our implementation team works closely with you to ensure a smooth transition."
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="relative bg-indigo-600 dark:bg-indigo-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Frequently Asked Questions</h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Find answers to common questions about our financial risk assessment platform.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200 dark:divide-gray-700">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl text-center mb-8">
            Common Questions
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200 dark:divide-gray-700">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt className="text-lg">
                  <button
                    onClick={() => toggleItem(index)}
                    className="text-left w-full flex justify-between items-start text-gray-900 dark:text-white"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      <ChevronDownIcon
                        className={`${
                          openItem === index ? '-rotate-180' : 'rotate-0'
                        } h-6 w-6 transform transition-transform duration-200 ease-in-out text-indigo-600 dark:text-indigo-400`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </dt>
                <AnimatePresence>
                  {openItem === index && (
                    <motion.dd
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 overflow-hidden"
                    >
                      <p className="text-base text-gray-500 dark:text-gray-400 pl-4 border-l-2 border-indigo-500 dark:border-indigo-400">
                        {faq.answer}
                      </p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </dl>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-indigo-50 dark:bg-gray-800 rounded-lg px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Still have questions?</h3>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
              Can't find the answer you're looking for? Please contact our customer support team.
            </p>
          </div>
          <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
            <a
              href="/contact"
              className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}