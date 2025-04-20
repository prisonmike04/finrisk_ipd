"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function DashboardPreview() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
                >
                  <span className="block">Powerful analytics</span>
                  <span className="block text-indigo-600 dark:text-indigo-400">at your fingertips</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-4 text-lg text-gray-500 dark:text-gray-400"
                >
                  Our intuitive dashboard provides real-time insights into your financial risks. Track key metrics, identify trends, and make data-driven decisions with confidence.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-8 sm:flex sm:justify-center lg:justify-start"
                >
                  <div className="rounded-md shadow">
                    <a
                      href="/demo"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Request a demo
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/features"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white dark:bg-gray-700 dark:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                    >
                      View all features
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none overflow-hidden"
                >
                  <div className="relative bg-gray-800 rounded-t-xl p-4">
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-900 p-8">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-1">
                        <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Risk Score</h3>
                          <div className="mt-2 flex items-baseline">
                            <span className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400">78/100</span>
                          </div>
                          <div className="mt-4 h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3 sm:col-span-2">
                        <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Risk Factors</h3>
                          <ul className="mt-2 space-y-2">
                            <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                              <svg className="h-5 w-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                              Market volatility exposure: High
                            </li>
                            <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                              <svg className="h-5 w-5 text-yellow-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              Cash flow stability: Medium
                            </li>
                            <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                              <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Regulatory compliance: Low risk
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-span-3">
                        <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Risk Trend</h3>
                          <div className="mt-2 h-32 w-full">
                            <div className="h-full w-full flex items-end space-x-2">
                              {[35, 40, 30, 45, 55, 40, 50, 60, 45, 50, 75, 65].map((height, i) => (
                                <div key={i} className="h-full flex items-end">
                                  <div 
                                    className="w-6 bg-indigo-600 dark:bg-indigo-400 rounded-t-sm" 
                                    style={{ height: `${height}%` }}
                                  ></div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}