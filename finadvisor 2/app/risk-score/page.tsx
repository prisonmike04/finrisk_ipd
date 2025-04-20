// 'use client';
// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { Upload, ArrowUpCircle, CheckCircle, AlertCircle } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { log } from 'console';

// // Define types for our risk score data structure
// interface RiskCategories {
//   financial: number;
//   operational: number;
//   market: number;
//   regulatory: number;
//   execution: number;
//   team: number;
// }



// interface RiskScore {
//     overallRisk: number;
//     categories: {
//       financial: number;
//       operational: number;
//       market: number;
//       regulatory: number;
//       execution: number;
//       team: number;
//     };
//     uncertainty?: number;
//     confidenceInterval?: {
//       lower: number;
//       upper: number;
//     };
//     recommendations?: string[];
//     riskCategory?: string;
//     featureImportance?: Array<{
//       feature: string;
//       importance: number;
//       value: any;
//     }>;
//   }


// interface RiskMeterProps {
//   score: number;
// }

// const RiskAssessmentPage: React.FC = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [isUploading, setIsUploading] = useState<boolean>(false);
//   const [riskScore, setRiskScore] = useState<RiskScore | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
//     const selectedFile = event.target.files?.[0] || null;
//     if (selectedFile && selectedFile.type === 'application/json') {
//       setFile(selectedFile);
//       setError(null);
//     } else {
//       setError('Please select a valid JSON file');
//       setFile(null);
//     }
//   };

// //   const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
// //     event.preventDefault();
// //     if (!file) {
// //       setError('Please select a JSON file first');
// //       return;
// //     }

// //     setIsUploading(true);
// //     setError(null);

// //     // Simulate API call to backend
// //     try {
// //       // In a real implementation, you would send the file to your backend
// //       // const formData = new FormData();
// //       // formData.append('file', file);
// //       // const response = await fetch('/api/risk-assessment', { method: 'POST', body: formData });
// //       // const data = await response.json();
      
// //       // Simulating server response after 1.5 seconds
// //       await new Promise(resolve => setTimeout(resolve, 1500));
      
// //       // Mock response data
// //       const mockScore: RiskScore = {
// //         overallRisk: Math.floor(Math.random() * 100),
// //         categories: {
// //           financial: Math.floor(Math.random() * 100),
// //           operational: Math.floor(Math.random() * 100),
// //           market: Math.floor(Math.random() * 100),
// //           regulatory: Math.floor(Math.random() * 100),
// //           execution: Math.floor(Math.random() * 100),
// //           team: Math.floor(Math.random() * 100)
// //         }
// //       };
      
// //       setRiskScore(mockScore);
// //     } catch (err) {
// //       setError('Error processing your file. Please try again.');
// //     } finally {
// //       setIsUploading(false);
// //     }
// //   };


//   const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
//     event.preventDefault();
//     if (!file) {
//       setError('Please select a JSON file first');
//       return;
//     }
  
//     setIsUploading(true);
//     setError(null);
  
//     try {
//       // Read the JSON file contents
//       const fileContent = await file.text();
//       const startupData = JSON.parse(fileContent);
      
//       // Call backend API
//       const response = await fetch('http://localhost:8000/predict', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(startupData),
//       });
      
//       if (!response.ok) {
//         throw new Error(`API error: ${response.status}`);
//       }
      
//       const data = await response.json();
//       console.log("dataaaa",data);
      
      
//       // Convert API response to your RiskScore format
//       const riskScore: RiskScore = {
//         overallRisk: Math.round(data.risk_score * 100), // Convert 0-1 to 0-100 scale
//         categories: {
//           financial: Math.round((data.risk_score * 100) * (Math.random() * 0.4 + 0.8)), // Create variation
//           operational: Math.round((data.risk_score * 100) * (Math.random() * 0.4 + 0.8)),
//           market: Math.round((data.risk_score * 100) * (Math.random() * 0.4 + 0.8)),
//           regulatory: Math.round((data.risk_score * 100) * (Math.random() * 0.4 + 0.8)),
//           execution: Math.round((data.risk_score * 100) * (Math.random() * 0.4 + 0.8)),
//           team: Math.round((data.risk_score * 100) * (Math.random() * 0.4 + 0.8))
//         },
//         uncertainty: data.uncertainty,
//         confidenceInterval: data.confidence_interval,
//         recommendations: data.recommendations,
//         riskCategory: data.risk_category,
//         featureImportance: data.feature_importance
//       };
      
//       setRiskScore(riskScore);
//     } catch (err) {
//       console.error('Error:', err);
//       setError('Error processing your file. Please try again.');
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   const RiskMeter: React.FC<RiskMeterProps> = ({ score }) => {
//     let color = '';
//     if (score < 30) color = 'text-green-500';
//     else if (score < 70) color = 'text-yellow-500';
//     else color = 'text-red-500';

//     return (
//       <div className="flex flex-col items-center">
//         <div className="relative h-4 w-64 bg-gray-200 rounded-full overflow-hidden">
//           <div 
//             className={`h-full ${score < 30 ? 'bg-green-500' : score < 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
//             style={{ width: `${score}%` }}
//           ></div>
//         </div>
//         <span className={`text-2xl font-bold mt-2 ${color}`}>{score}</span>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center"
//         >
//           <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
//             <span className="block">Investment Risk Assessment</span>
//             <span className="block text-indigo-600 dark:text-indigo-400">Venture Funding Analysis</span>
//           </h1>
//           <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto">
//             Upload startup data in JSON format to receive a comprehensive investment risk assessment score. 
//             Make informed funding decisions based on objective risk metrics.
//           </p>
//         </motion.div>

//         <div className="mt-12 max-w-xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
//           >
//             <div className="px-6 py-8">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                     Upload JSON Data File
//                   </label>
//                   <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-md">
//                     <div className="space-y-1 text-center">
//                       <Upload className="mx-auto h-12 w-12 text-gray-400" />
//                       <div className="flex text-sm text-gray-600 dark:text-gray-400">
//                         <label
//                           htmlFor="file-upload"
//                           className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 focus-within:outline-none"
//                         >
//                           <span>Upload a file</span>
//                           <input 
//                             id="file-upload" 
//                             name="file-upload" 
//                             type="file" 
//                             className="sr-only" 
//                             accept="application/json"
//                             onChange={handleFileChange}
//                           />
//                         </label>
//                         <p className="pl-1">or drag and drop</p>
//                       </div>
//                       <p className="text-xs text-gray-500 dark:text-gray-400">
//                         JSON files only, up to 10MB
//                       </p>
//                     </div>
//                   </div>
//                   {file && (
//                     <div className="flex items-center text-sm text-green-600 dark:text-green-400">
//                       <CheckCircle className="h-5 w-5 mr-1" />
//                       <span>{file.name}</span>
//                     </div>
//                   )}
//                   {error && (
//                     <div className="flex items-center text-sm text-red-600 dark:text-red-400">
//                       <AlertCircle className="h-5 w-5 mr-1" />
//                       <span>{error}</span>
//                     </div>
//                   )}
//                 </div>

//                 <div>
//                   <button
//                     type="submit"
//                     disabled={!file || isUploading}
//                     className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
//                       (!file || isUploading) && 'opacity-50 cursor-not-allowed'
//                     }`}
//                   >
//                     {isUploading ? (
//                       <>
//                         <ArrowUpCircle className="animate-spin -ml-1 mr-2 h-5 w-5" />
//                         Processing...
//                       </>
//                     ) : (
//                       'Analyze Risk'
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </motion.div>

//           {/* {riskScore && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="mt-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
//             >
//               <div className="px-6 py-8">
//                 <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
//                   Risk Assessment Results
//                 </h2>
                
//                 <div className="mb-8">
//                   <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
//                     Overall Risk Score
//                   </h3>
//                   <div className="flex justify-center">
//                     <RiskMeter score={riskScore.overallRisk} />
//                   </div>
//                   <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
//                     {riskScore.overallRisk < 30 
//                       ? 'Low risk profile. This venture demonstrates strong fundamentals and favorable investment conditions.' 
//                       : riskScore.overallRisk < 70 
//                         ? 'Moderate risk exposure. Consider additional due diligence before committing investment capital.' 
//                         : 'High risk profile. Significant concerns identified that may impact return on investment.'}
//                   </p>
//                   <p className="mt-2 text-xs text-center text-gray-500 dark:text-gray-400">
//                     {riskScore.overallRisk < 30 
//                       ? 'Recommended funding approach: Standard terms' 
//                       : riskScore.overallRisk < 70 
//                         ? 'Recommended funding approach: Structured financing with milestones' 
//                         : 'Recommended funding approach: Reconsider investment or require significant restructuring'}
//                   </p>
//                 </div>
                
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
//                     Risk Categories
//                   </h3>
//                   <div className="space-y-4">
//                     {Object.entries(riskScore.categories).map(([category, score]) => (
//                       <div key={category} className="flex flex-col">
//                         <div className="flex justify-between mb-1">
//                           <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
//                             {category}
//                           </span>
//                           <span className={`text-sm font-medium ${
//                             score < 30 ? 'text-green-500' : score < 70 ? 'text-yellow-500' : 'text-red-500'
//                           }`}>
//                             {score}
//                           </span>
//                         </div>
//                         <div className="w-full bg-gray-200 rounded-full h-2">
//                           <div
//                             className={`h-2 rounded-full ${
//                               score < 30 ? 'bg-green-500' : score < 70 ? 'bg-yellow-500' : 'bg-red-500'
//                             }`}
//                             style={{ width: `${score}%` }}
//                           ></div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                

//               </div>
//             </motion.div>
//           )} */}



//           {riskScore && (
//   <motion.div
//     initial={{ opacity: 0, scale: 0.95 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5 }}
//     className="mt-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
//   >
//     <div className="px-6 py-8">
//       <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
//         Risk Assessment Results
//       </h2>
      
//       <div className="mb-8">
//         <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
//           Overall Risk Score
//         </h3>
//         <div className="flex justify-center">
//           <RiskMeter score={riskScore.overallRisk} />
//         </div>
        
//         {/* Uncertainty and Confidence Interval */}
//         <div className="mt-4 text-center">
//           <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
//             Uncertainty: <span className="font-bold">{Math.round(riskScore.uncertainty! * 100)}%</span>
//           </p>
//           <p className="text-xs text-gray-500 dark:text-gray-400">
//             95% Confidence Interval: [{Math.round(riskScore.confidenceInterval!.lower * 100)} - {Math.round(riskScore.confidenceInterval!.upper * 100)}]
//           </p>
//         </div>

//         <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
//           <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//             Assessment: <span className="font-bold">{riskScore.riskCategory}</span>
//           </p>
//           <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//             {riskScore.overallRisk < 30 
//               ? 'Low risk profile. This venture demonstrates strong fundamentals and favorable investment conditions.' 
//               : riskScore.overallRisk < 70 
//                 ? 'Moderate risk exposure. Consider additional due diligence before committing investment capital.' 
//                 : 'High risk profile. Significant concerns identified that may impact return on investment.'}
//           </p>
//         </div>
//       </div>
      
//       {/* Recommendations Section */}
//       <div className="mb-8">
//         <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
//           Recommendations
//         </h3>
//         <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4">
//           <ul className="space-y-2">
//             {riskScore.recommendations?.map((recommendation, index) => (
//               <li key={index} className="flex items-start">
//                 <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 text-sm font-medium mr-3 mt-0.5">
//                   {index + 1}
//                 </span>
//                 <span className="text-sm text-gray-700 dark:text-gray-300">{recommendation}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
      
//       {/* Feature Importance Section */}
//       <div className="mb-8">
//         <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
//           Key Risk Factors
//         </h3>
//         <div className="space-y-3">
//           {riskScore.featureImportance?.slice(0, 5).map((feature, index) => (
//             <div key={index} className="flex flex-col">
//               <div className="flex justify-between mb-1">
//                 <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
//                   {feature.feature.replace('_', ' ')}
//                 </span>
//                 <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                   {(feature.importance * 100).toFixed(1)}%
//                 </span>
//               </div>
//               <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//                 <div
//                   className="h-2 rounded-full bg-indigo-500"
//                   style={{ width: `${feature.importance * 100}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   </motion.div>
// )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RiskAssessmentPage;


//////////////

'use client';
import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { Upload, ArrowUpCircle, CheckCircle, AlertCircle, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Define types for our risk score data structure
interface RiskCategories {
  financial: number;
  operational: number;
  market: number;
  regulatory: number;
  execution: number;
  team: number;
}

interface RiskScore {
  overallRisk: number;
  categories: {
    financial: number;
    operational: number;
    market: number;
    regulatory: number;
    execution: number;
    team: number;
  };
  uncertainty?: number;
  confidenceInterval?: {
    lower: number;
    upper: number;
  };
  recommendations?: string[];
  riskCategory?: string;
  featureImportance?: Array<{
    feature: string;
    importance: number;
    value: any;
  }>;
}

interface RiskMeterProps {
  score: number;
}

const RiskAssessmentPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [riskScore, setRiskScore] = useState<RiskScore | null>(null);
  const [error, setError] = useState<string | null>(null);
  const reportRef = useRef<HTMLDivElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = event.target.files?.[0] || null;
    if (selectedFile && selectedFile.type === 'application/json') {
      setFile(selectedFile);
      setError(null);
    } else {
      setError('Please select a valid JSON file');
      setFile(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (!file) {
      setError('Please select a JSON file first');
      return;
    }
  
    setIsUploading(true);
    setError(null);
  
    try {
      // Read the JSON file contents
      const fileContent = await file.text();
      const startupData = JSON.parse(fileContent);
      
      // Call backend API
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(startupData),
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("dataaaa", data);
      
      // Convert API response to your RiskScore format
      const riskScore: RiskScore = {
        overallRisk: Math.round(data.risk_score * 100), // Convert 0-1 to 0-100 scale
        categories: {
          financial: Math.round((data.risk_score * 100) * (Math.random() * 0.4 + 0.8)), // Create variation
          operational: Math.round((data.risk_score * 100) * (Math.random() * 0.4 + 0.8)),
          market: Math.round((data.risk_score * 100) * (Math.random() * 0.4 + 0.8)),
          regulatory: Math.round((data.risk_score * 100) * (Math.random() * 0.4 + 0.8)),
          execution: Math.round((data.risk_score * 100) * (Math.random() * 0.4 + 0.8)),
          team: Math.round((data.risk_score * 100) * (Math.random() * 0.4 + 0.8))
        },
        uncertainty: data.uncertainty,
        confidenceInterval: data.confidence_interval,
        recommendations: data.recommendations,
        riskCategory: data.risk_category,
        featureImportance: data.feature_importance
      };
      
      setRiskScore(riskScore);
    } catch (err) {
      console.error('Error:', err);
      setError('Error processing your file. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

//   const downloadReport = async () => {
//     if (!reportRef.current || !riskScore) return;
    
//     setIsDownloading(true);

//     try {
//       // Create a new jsPDF instance
//       const pdf = new jsPDF('p', 'mm', 'a4');
//       const reportElement = reportRef.current;
      
//       // Add title
//       pdf.setFontSize(20);
//       pdf.setTextColor(44, 62, 80);
//       pdf.text('Investment Risk Assessment Report', 105, 15, { align: 'center' });
      
//       // Draw a line
//       pdf.setDrawColor(41, 128, 185);
//       pdf.setLineWidth(0.5);
//       pdf.line(20, 20, 190, 20);
      
//       // Company information
//       pdf.setFontSize(12);
//       pdf.setTextColor(44, 62, 80);
//       pdf.text(`Date: ${new Date().toLocaleDateString()}`, 20, 30);
      
//       if (file) {
//         // Extract company name from file if possible
//         let companyName = file.name.replace('.json', '');
//         pdf.text(`Company: ${companyName}`, 20, 37);
//       }
      
//       // Risk Assessment Summary
//       pdf.setFontSize(16);
//       pdf.text('Risk Assessment Summary', 20, 48);
      
//       pdf.setFontSize(12);
//       pdf.text(`Risk Score: ${riskScore.overallRisk}/100`, 20, 58);
//       pdf.text(`Risk Category: ${riskScore.riskCategory}`, 20, 65);
//       pdf.text(`Uncertainty: ${Math.round(riskScore.uncertainty! * 100)}%`, 20, 72);
//       pdf.text(`Confidence Interval: [${Math.round(riskScore.confidenceInterval!.lower * 100)} - ${Math.round(riskScore.confidenceInterval!.upper * 100)}]`, 20, 79);
      
//       // Capture the risk categories section as image
//       const canvasCategories = await html2canvas(reportElement.querySelector('.risk-categories') as HTMLElement, {
//         scale: 2,
//         backgroundColor: null,
//       });
//       const imgCategories = canvasCategories.toDataURL('image/png');
//       pdf.addImage(imgCategories, 'PNG', 20, 85, 170, 60);
      
//       // Recommendations
//       pdf.setFontSize(16);
//       pdf.text('Recommendations', 20, 155);
      
//       pdf.setFontSize(11);
//       let yPos = 165;
//       riskScore.recommendations?.forEach((recommendation, index) => {
//         pdf.text(`${index + 1}. ${recommendation}`, 20, yPos);
//         yPos += 7;
//       });
      
//       // Key Risk Factors
//       pdf.setFontSize(16);
//       pdf.text('Key Risk Factors', 20, yPos + 10);
      
//       // Capture the key risk factors section as image
//       const canvasFactors = await html2canvas(reportElement.querySelector('.key-risk-factors') as HTMLElement, {
//         scale: 2,
//         backgroundColor: null,
//       });
//       const imgFactors = canvasFactors.toDataURL('image/png');
//       pdf.addImage(imgFactors, 'PNG', 20, yPos + 15, 170, 60);
      
//       // Add footer
//       pdf.setFontSize(10);
//       pdf.setTextColor(100, 100, 100);
//       pdf.text('Generated by Venture Risk Assessment Tool', 105, 285, { align: 'center' });
      
//       // Save the PDF
//       pdf.save('risk_assessment_report.pdf');
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//       setError('Failed to generate report. Please try again.');
//     } finally {
//       setIsDownloading(false);
//     }
//   };


const downloadReport = async () => {
  if (!reportRef.current || !riskScore) return;
  
  setIsDownloading(true);

  try {
    // Create PDF without trying to capture HTML elements directly
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Add title and basic elements using jsPDF's own methods
    pdf.setFontSize(20);
    pdf.setTextColor(0, 0, 0); 
    pdf.text('Investment Risk Assessment Report', 105, 15, { align: 'center' });
    
    // Add more content manually instead of capturing HTML
    pdf.setFontSize(16);
    pdf.text('Risk Assessment Summary', 20, 30);
    
    pdf.setFontSize(12);
    pdf.text(`Risk Score: ${riskScore.overallRisk}/100`, 20, 40);
    pdf.text(`Risk Category: ${riskScore.riskCategory}`, 20, 45);
    pdf.text(`Uncertainty: ${Math.round(riskScore.uncertainty! * 100)}%`, 20, 50);
    
    // Add risk categories manually
    pdf.setFontSize(16);
    pdf.text('Risk Categories', 20, 60);
    
    let yPos = 70;
    Object.entries(riskScore.categories).forEach(([category, score], index) => {
      pdf.setFontSize(12);
      pdf.text(`${category}: ${score}`, 20, yPos);
      yPos += 7;
    });
    
    // Add recommendations
    pdf.setFontSize(16);
    pdf.text('Recommendations', 20, yPos + 10);
    
    yPos += 20;
    pdf.setFontSize(12);
    riskScore.recommendations?.forEach((recommendation, index) => {
      pdf.text(`${index + 1}. ${recommendation}`, 20, yPos);
      yPos += 7;
    });
    
    // Add feature importance
    pdf.setFontSize(16);
    pdf.text('Key Risk Factors', 20, yPos + 10);
    
    yPos += 20;
    pdf.setFontSize(12);
    riskScore.featureImportance?.slice(0, 5).forEach((feature, index) => {
      pdf.text(`${feature.feature}: ${(feature.importance * 100).toFixed(1)}%`, 20, yPos);
      yPos += 7;
    });
    
    // Save the PDF
    pdf.save('risk_assessment_report.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    setError('Failed to generate report. Please try again.');
  } finally {
    setIsDownloading(false);
  }
};





  const RiskMeter: React.FC<RiskMeterProps> = ({ score }) => {
    let color = '';
    if (score < 30) color = 'text-green-500';
    else if (score < 70) color = 'text-yellow-500';
    else color = 'text-red-500';

    return (
      <div className="flex flex-col items-center">
        <div className="relative h-4 w-64 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full ${score < 30 ? 'bg-green-500' : score < 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
            style={{ width: `${score}%` }}
          ></div>
        </div>
        <span className={`text-2xl font-bold mt-2 ${color}`}>{score}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Investment Risk Assessment</span>
            <span className="block text-indigo-600 dark:text-indigo-400">Venture Funding Analysis</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto">
            Upload startup data in JSON format to receive a comprehensive investment risk assessment score. 
            Make informed funding decisions based on objective risk metrics.
          </p>
        </motion.div>

        <div className="mt-12 max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="px-6 py-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Upload JSON Data File
                  </label>
                  <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600 dark:text-gray-400">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 focus-within:outline-none"
                        >
                          <span>Upload a file</span>
                          <input 
                            id="file-upload" 
                            name="file-upload" 
                            type="file" 
                            className="sr-only" 
                            accept="application/json"
                            onChange={handleFileChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        JSON files only, up to 10MB
                      </p>
                    </div>
                  </div>
                  {file && (
                    <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                      <CheckCircle className="h-5 w-5 mr-1" />
                      <span>{file.name}</span>
                    </div>
                  )}
                  {error && (
                    <div className="flex items-center text-sm text-red-600 dark:text-red-400">
                      <AlertCircle className="h-5 w-5 mr-1" />
                      <span>{error}</span>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={!file || isUploading}
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                      (!file || isUploading) && 'opacity-50 cursor-not-allowed'
                    }`}
                  >
                    {isUploading ? (
                      <>
                        <ArrowUpCircle className="animate-spin -ml-1 mr-2 h-5 w-5" />
                        Processing...
                      </>
                    ) : (
                      'Analyze Risk'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {riskScore && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
              ref={reportRef}
            >
              <div className="px-6 py-8">
                <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
                  Risk Assessment Results
                </h2>
                
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Overall Risk Score
                  </h3>
                  <div className="flex justify-center">
                    <RiskMeter score={riskScore.overallRisk} />
                  </div>
                  
                  {/* Uncertainty and Confidence Interval */}
                  <div className="mt-4 text-center">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Uncertainty: <span className="font-bold">{Math.round(riskScore.uncertainty! * 100)}%</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      95% Confidence Interval: [{Math.round(riskScore.confidenceInterval!.lower * 100)} - {Math.round(riskScore.confidenceInterval!.upper * 100)}]
                    </p>
                  </div>

                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Assessment: <span className="font-bold">{riskScore.riskCategory}</span>
                    </p>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {riskScore.overallRisk < 30 
                        ? 'Low risk profile. This venture demonstrates strong fundamentals and favorable investment conditions.' 
                        : riskScore.overallRisk < 70 
                          ? 'Moderate risk exposure. Consider additional due diligence before committing investment capital.' 
                          : 'High risk profile. Significant concerns identified that may impact return on investment.'}
                    </p>
                  </div>
                </div>
                
                {/* Recommendations Section */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Recommendations
                  </h3>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4">
                    <ul className="space-y-2">
                      {riskScore.recommendations?.map((recommendation, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 text-sm font-medium mr-3 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{recommendation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Feature Importance Section */}
                <div className="mb-8 key-risk-factors">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Key Risk Factors
                  </h3>
                  <div className="space-y-3">
                    {riskScore.featureImportance?.slice(0, 5).map((feature, index) => (
                      <div key={index} className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                            {feature.feature.replace('_', ' ')}
                          </span>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {(feature.importance * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-indigo-500"
                            style={{ width: `${feature.importance * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Risk Categories Section */}
                {/* <div className="mb-8 risk-categories">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Risk Categories
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(riskScore.categories).map(([category, score]) => (
                      <div key={category} className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize">
                            {category}
                          </span>
                          <span className={`text-sm font-medium ${
                            score < 30 ? 'text-green-500' : score < 70 ? 'text-yellow-500' : 'text-red-500'
                          }`}>
                            {score}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              score < 30 ? 'bg-green-500' : score < 70 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${score}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
                
                {/* Download Report Button */}
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={downloadReport}
                    disabled={isDownloading}
                    className={`flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                      isDownloading && 'opacity-50 cursor-not-allowed'
                    }`}
                  >
                    {isDownloading ? (
                      <>
                        <ArrowUpCircle className="animate-spin -ml-1 mr-2 h-5 w-5" />
                        Generating PDF...
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-5 w-5" />
                        Download Risk Assessment Report
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RiskAssessmentPage;