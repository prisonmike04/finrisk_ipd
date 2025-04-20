"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Understanding Financial Risk in the Post-Pandemic Economy',
      href: '/blog/post-1',
      description: 'How startups can navigate the changing financial landscape and identify new risk factors in the post-pandemic world.',
      date: 'Mar 16, 2023',
      datetime: '2023-03-16',
      category: { name: 'Risk Analysis', href: '/blog/category/risk-analysis' },
      author: {
        name: 'Michael Foster',
        href: '/team/michael-foster',
        imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 2,
      title: 'The Role of AI in Modern Financial Risk Assessment',
      href: '/blog/post-2',
      description: 'How artificial intelligence and machine learning are revolutionizing the way startups assess and manage financial risks.',
      date: 'Feb 12, 2023',
      datetime: '2023-02-12',
      category: { name: 'Technology', href: '/blog/category/technology' },
      author: {
        name: 'Lindsay Walton',
        href: '/team/lindsay-walton',
        imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      imageUrl: 'https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    },
    {
      id: 3,
      title: 'Regulatory Compliance for Government-Backed Startups',
      href: '/blog/post-3',
      description: 'Navigating the complex regulatory landscape for startups that receive government funding or support.',
      date: 'Jan 29, 2023',
      datetime: '2023-01-29',
      category: { name: 'Compliance', href: '/blog/category/compliance' },
      author: {
        name: 'Dries Vincent',
        href: '/team/dries-vincent',
        imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Blog</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Insights and perspectives on financial risk assessment for modern startups.
          </p>
        </div>
      </div>

      {/* Featured Post */}
      <div className="relative bg-white dark:bg-gray-900 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white dark:bg-gray-900 h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl">Featured Article</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
              Stay up to date with the latest trends and insights in financial risk assessment.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -10 }}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <Image
                    className="h-48 w-full object-cover"
                    src={post.imageUrl}
                    alt={post.title}
                    width={640}
                    height={360}
                  />
                </div>
                <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      <Link href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </Link>
                    </p>
                    <Link href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{post.description}</p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <Link href={post.author.href}>
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={post.author.imageUrl}
                          alt={post.author.name}
                          width={40}
                          height={40}
                        />
                      </Link>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        <Link href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </Link>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>5 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-indigo-700 dark:bg-indigo-900">
        <div className="max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Stay updated with our newsletter</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Get the latest insights on financial risk assessment delivered to your inbox.
          </p>
          <form className="mt-8 sm:flex sm:justify-center">
            <div className="min-w-0 flex-1">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                className="block w-full px-5 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700 sm:px-10"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Recent Articles</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
              Dive deeper into financial risk assessment with our latest articles.
            </p>
          </div>
          <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-indigo-500 flex items-center justify-center">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    <Link href={`/blog/recent-${index + 1}`} className="hover:underline">
                      {[
                        "5 Key Financial Risks Every Startup Should Monitor",
                        "How to Build a Resilient Financial Strategy in Uncertain Times",
                        "The Impact of Global Economic Trends on Startup Risk Profiles",
                        "Balancing Growth and Risk: A Guide for Startup Founders"
                      ][index]}
                    </Link>
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    {[
                      "Identify and track the most critical financial risks that could impact your startup's success and longevity.",
                      "Practical strategies for creating financial plans that can withstand market volatility and unexpected challenges.",
                      "Understanding how global economic shifts affect your startup's risk exposure and how to adapt accordingly.",
                      "Strategic approaches to pursuing growth opportunities while maintaining appropriate risk management practices."
                    ][index]}
                  </p>
                  <div className="mt-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{["Jan 15, 2023", "Feb 3, 2023", "Feb 28, 2023", "Mar 10, 2023"][index]}</span>
                    <span className="mx-1">&middot;</span>
                    <span>{["4 min read", "6 min read", "5 min read", "7 min read"][index]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/blog/archive" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              View all articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}