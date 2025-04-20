"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

type Question = {
  id: string
  text: string
  options: {
    value: number
    label: string
  }[]
}

export default function RiskCalculator() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [result, setResult] = useState<{
    score: number
    riskLevel: string
    description: string
    recommendations: string[]
  } | null>(null)

  const questions: Question[] = [
    {
      id: 'cash_reserves',
      text: 'How many months of operating expenses do you have in cash reserves?',
      options: [
        { value: 1, label: 'Less than 1 month' },
        { value: 2, label: '1-3 months' },
        { value: 3, label: '3-6 months' },
        { value: 4, label: '6-12 months' },
        { value: 5, label: 'More than 12 months' },
      ],
    },
    {
      id: 'revenue_sources',
      text: 'How diversified are your revenue sources?',
      options: [
        { value: 1, label: 'Single customer/product' },
        { value: 2, label: '2-3 major customers/products' },
        { value: 3, label: 'Several customers/products with one dominant' },
        { value: 4, label: 'Diverse customer/product base' },
        { value: 5, label: 'Highly diversified across markets and products' },
      ],
    },
    {
      id: 'debt_ratio',
      text: 'What is your debt-to-equity ratio?',
      options: [
        { value: 1, label: 'Greater than 2.0' },
        { value: 2, label: '1.5 - 2.0' },
        { value: 3, label: '1.0 - 1.5' },
        { value: 4, label: '0.5 - 1.0' },
        { value: 5, label: 'Less than 0.5' },
      ],
    },
    {
      id: 'market_volatility',
      text: 'How sensitive is your business to market volatility?',
      options: [
        { value: 1, label: 'Extremely sensitive' },
        { value: 2, label: 'Highly sensitive' },
        { value: 3, label: 'Moderately sensitive' },
        { value: 4, label: 'Somewhat sensitive' },
        { value: 5, label: 'Minimally sensitive' },
      ],
    },
    {
      id: 'regulatory_compliance',
      text: 'How would you rate your regulatory compliance processes?',
      options: [
        { value: 1, label: 'No formal processes' },
        { value: 2, label: 'Basic processes, not regularly updated' },
        { value: 3, label: 'Standard processes with occasional reviews' },
        { value: 4, label: 'Robust processes with regular reviews' },
        { value: 5, label: 'Comprehensive processes with continuous monitoring' },
      ],
    },
  ]

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
    
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      calculateResult()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0)
    const maxPossibleScore = questions.length * 5
    const normalizedScore = (totalScore / maxPossibleScore) * 100
    
    let riskLevel: string
    let description: string
    let recommendations: string[]
    
    if (normalizedScore >= 80) {
      riskLevel = 'Low Risk'
      description = 'Your financial position appears strong with good risk management practices in place.'
      recommendations = [
        'Continue monitoring your financial metrics',
        'Consider expanding your risk assessment to new areas',
        'Develop contingency plans for unexpected market changes',
      ]
    } else if (normalizedScore >= 60) {
      riskLevel = 'Moderate Risk'
      description = 'Your financial position is generally stable, but there are areas that could be improved.'
      recommendations = [
        'Increase cash reserves if possible',
        'Diversify revenue streams further',
        'Strengthen compliance processes',
        'Review debt structure for optimization opportunities',
      ]
    } else if (normalizedScore >= 40) {
      riskLevel = 'Elevated Risk'
      description = 'Your financial position shows several vulnerabilities that should be addressed.'
      recommendations = [
        'Prioritize building cash reserves',
        'Develop a plan to diversify revenue sources',
        'Implement more robust compliance processes',
        'Consider restructuring debt to improve financial stability',
        'Develop detailed risk mitigation strategies',
      ]
    } else {
      riskLevel = 'High Risk'
      description = 'Your financial position indicates significant vulnerabilities that require immediate attention.'
      recommendations = [
        'Seek professional financial risk assessment services immediately',
        'Develop an emergency cash management plan',
        'Implement strict cost control measures',
        'Prioritize diversification of revenue sources',
        'Establish comprehensive compliance protocols',
        'Consider debt restructuring options',
      ]
    }
    
    setResult({
      score: Math.round(normalizedScore),
      riskLevel,
      description,
      recommendations,
    })
  }

  const resetCalculator = () => {
    setCurrentStep(0)
    setAnswers({})
    setResult(null)
  }

  return (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Financial Risk Assessment Calculator
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Answer a few questions to get a preliminary assessment of your financial risk profile.
          </p>
        </div>

        <div className="mt-10 bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
          {result ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Your Risk Assessment</h3>
                <div className="mt-4 relative">
                  <div className="overflow-hidden h-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                    <div 
                      style={{ width: `${result.score}%` }} 
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                        result.score >= 80 ? 'bg-green-500' : 
                        result.score >= 60 ? 'bg-yellow-500' : 
                        result.score >= 40 ? 'bg-orange-500' : 
                        'bg-red-500'
                      }`}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-red-500">High Risk</span>
                    <span className="text-orange-500">Elevated</span>
                    <span className="text-yellow-500">Moderate</span>
                    <span className="text-green-500">Low Risk</span>
                  </div>
                </div>
                <div className="mt-6">
                  <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${
                    result.riskLevel === 'Low Risk' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                    result.riskLevel === 'Moderate Risk' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 
                    result.riskLevel === 'Elevated Risk' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' : 
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {result.riskLevel}
                  </span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Assessment Summary</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{result.description}</p>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Recommendations</h4>
                <ul className="mt-2 space-y-2">
                  {result.recommendations.map((recommendation, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 h-5 w-5 text-indigo-500">•</span>
                      <span className="ml-2 text-gray-600 dark:text-gray-300">{recommendation}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={resetCalculator}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Start Over
                </button>
                <a
                  href="/get-started"
                  className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Get Detailed Assessment
                </a>
              </div>
            </motion.div>
          ) : (
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Question {currentStep + 1} of {questions.length}
                </div>
                <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  {questions[currentStep].text}
                </h3>
                <div className="mt-6 space-y-3">
                  {questions[currentStep].options.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                      className="w-full text-left px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="text-gray-900 dark:text-white">{option.label}</span>
                    </button>
                  ))}
                </div>
                
                {currentStep > 0 && (
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Previous
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            This calculator provides a simplified assessment based on limited information. 
            For a comprehensive financial risk assessment, please <a href="/contact" className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline">contact our team</a>.
          </p>
        </div>
      </div>
    </div>
  )
}