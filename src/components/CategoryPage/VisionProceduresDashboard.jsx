import React from 'react';
import { FaRegEye } from "react-icons/fa";
import MedicalProceduresDashboard from './MedicalProceduresDashboard';

const visionProcedures = [
  {
    id: 1,
    name: 'Complete Eye Exam',
    icon: <FaRegEye className="w-8 h-8 text-blue-500" />,
    description: 'Comprehensive assessment of eye health and visual acuity.',
    duration: '30-60 minutes',
    frequency: 'Annually or as recommended',
    popularity: 98
  },
  {
    id: 2,
    name: 'Intraocular Pressure Test',
    icon: <FaRegEye className="w-8 h-8 text-green-500" />,
    description: 'Measurement of the pressure inside the eye to detect glaucoma.',
    duration: '5-10 minutes',
    frequency: 'Annually or based on risk',
    popularity: 85
  },
  {
    id: 3,
    name: 'Contact Lens Fitting',
    icon: <FaRegEye className="w-8 h-8 text-purple-500" />,
    description: 'Process to determine and adjust the appropriate contact lenses.',
    duration: '30-45 minutes',
    frequency: 'Initial and follow-up',
    popularity: 70
  },
  {
    id: 4,
    name: 'Dilated Fundus Examination',
    icon: <FaRegEye className="w-8 h-8 text-yellow-500" />,
    description: 'Detailed evaluation of the retina and internal eye structures.',
    duration: '20-30 minutes',
    frequency: 'Every 1-2 years or as needed',
    popularity: 80
  },
  {
    id: 5,
    name: 'Vision Therapy',
    icon: <FaRegEye className="w-8 h-8 text-red-500" />,
    description: 'Exercises and techniques to improve specific visual skills.',
    duration: '30-60 minutes per session',
    frequency: 'Weekly or according to the treatment plan',
    popularity: 65
  }
];
console.log(visionProcedures)

const VisionProceduresDashboard = () => {
  return (
  <MedicalProceduresDashboard 
    title="Vision Procedures Dashboard"
    procedures={visionProcedures}
  />
)};

export default VisionProceduresDashboard;
