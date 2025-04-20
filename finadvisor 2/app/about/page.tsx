"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const team = [
    {
      name: 'Jane Cooper',
      role: 'CEO & Founder',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Former investment banker with 15+ years of experience in financial risk assessment. Founded FinRisk to help startups navigate financial uncertainties.',
    },
    {
      name: 'Michael Foster',
      role: 'CTO',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Tech innovator with a background in financial algorithms and AI. Leads our development team in creating cutting-edge risk assessment tools.',
    },
    {
      name: 'Dries Vincent',
      role: 'Chief Risk Officer',
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Specialized in regulatory compliance and risk management for both government and private sector organizations.',
    },
    {
      name: 'Lindsay Walton',
      role: 'Head of Analytics',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      bio: 'Data scientist with expertise in predictive modeling and financial forecasting. Leads our analytics team in developing insights for clients.',
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="relative bg-gray-800 dark:bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Us</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            We're on a mission to revolutionize financial risk assessment for startups.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="relative py-16 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-700" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-700" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h2>
              <span className="block text-base text-center text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
                Our Story
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Revolutionizing Financial Risk Assessment
              </span>
            </h2>
            <p className="mt-8 text-xl text-gray-500 dark:text-gray-400 leading-8">
              Founded in 2018, FinRisk was born out of a simple observation: startups needed better tools to assess and manage financial risks. Our founder, Jane Cooper, saw firsthand how promising ventures failed due to inadequate risk assessment.
            </p>
          </div>
          <div className="mt-6 prose prose-indigo dark:prose-invert prose-lg text-gray-500 dark:text-gray-400 mx-auto">
            <p>
              What began as a small consultancy has grown into a comprehensive platform serving both government and public startups across the globe. Our team of financial experts, data scientists, and industry specialists work together to provide cutting-edge risk assessment solutions.
            </p>
            <p>
              We believe that with the right tools and insights, startups can make informed decisions that mitigate risks and maximize opportunities. Our platform combines advanced analytics, machine learning, and industry expertise to deliver actionable insights.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
            <p>
              Our mission is to democratize access to sophisticated financial risk assessment tools, making them accessible to startups of all sizes. We're committed to helping innovative companies navigate financial uncertainties and build sustainable businesses.
            </p>
            <p>
              By combining cutting-edge technology with financial expertise, we're creating a future where startups can confidently make strategic decisions based on comprehensive risk analysis.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-900 dark:text-white">Meet our team</h2>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                Our diverse team brings together expertise in finance, technology, and data science to deliver exceptional risk assessment solutions.
              </p>
            </div>
            <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl">
              {team.map((person) => (
                <motion.li 
                  key={person.name}
                  whileHover={{ y: -10 }}
                  className="space-y-6"
                >
                  <div className="space-y-6">
                    <div className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 overflow-hidden">
                      <Image
                        width={224}
                        height={224}
                        className="h-full w-full rounded-full"
                        src={person.imageUrl}
                        alt={person.name}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3 className="text-gray-900 dark:text-white">{person.name}</h3>
                        <p className="text-indigo-600 dark:text-indigo-400">{person.role}</p>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400">{person.bio}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What drives us every day
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Innovation</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  We constantly push the boundaries of what's possible in financial risk assessment, leveraging the latest technologies and methodologies.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Integrity</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  We uphold the highest standards of integrity in all our interactions, providing honest and transparent risk assessments.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Impact</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  We measure our success by the positive impact we have on our clients' businesses, helping them build sustainable and resilient operations.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}