"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import RiskCalculator from '@/components/RiskCalculator'

// Define types for resources
type Resource = {
  title: string;
  description: string;
  image: string;
  link: string;
}

type WebinarResource = Resource & {
  date: string;
}

type ResourcesData = {
  guides: Resource[];
  templates: Resource[];
  webinars: WebinarResource[];
}

export default function Resources() {
  const [activeTab, setActiveTab] = useState('guides')
  
  const resources: ResourcesData = {
    templates: [],
    webinars: [],
    guides: [
      {
        title: 'Getting Started with FinRisk',
        description: 'Learn how to use FinRisk to assess your risk',
        image: '/images/guide1.jpg',
        link: '/guides/getting-started'
      },
      {
        title: 'Risk Assessment Techniques',
        description: 'Explore different risk assessment techniques',
        image: '/images/guide2.jpg',
        link: '/guides/risk-assessment-techniques'      
      },
      {
        title: 'Risk Management Strategies',
        description: 'Discover effective risk management strategies',
        image: '/images/guide3.jpg',
        link: '/guides/risk-management-strategies'  
      }
    ]
  };
}