"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      content: "The financial risk assessment platform has completely transformed how we approach risk management. We've identified potential issues before they became problems.",
      author: {
        name: 'Emily Chen',
        role: 'CFO at TechVenture',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      content: "As a government-backed startup, compliance is critical for us. This platform has streamlined our regulatory reporting and given us peace of mind.",
      author: {
        name: 'Marcus Johnson',
        role: 'CEO at GovTech Solutions',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      content: "The real-time risk monitoring has been a game-changer for our investment strategy. We can now make decisions with confidence, backed by solid data.",
      author: {
        name: 'Sophia Rodriguez',
        role: 'Investment Director at FinEdge',
        imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]

  return (
    <section className="bg-white dark:bg-gray-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted by startups worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Hear what our clients have to say about our financial risk assessment platform.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="rounded-lg bg-gray-50 dark:bg-gray-800 p-8 shadow-md"
            >
              <div className="flex items-center">
                <Image
                  className="h-12 w-12 rounded-full"
                  src={testimonial.author.imageUrl}
                  alt={testimonial.author.name}
                  width={48}
                  height={48}
                />
                <div className="ml-4">
                  <div className="text-lg font-medium text-gray-900 dark:text-white">{testimonial.author.name}</div>
                  <div className="text-base text-gray-500 dark:text-gray-400">{testimonial.author.role}</div>
                </div>
              </div>
              <p className="mt-4 text-lg italic text-gray-600 dark:text-gray-300">"{testimonial.content}"</p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}