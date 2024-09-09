import React from 'react';
import { LiaToothSolid } from "react-icons/lia";
import MedicalProceduresDashboard from './MedicalProceduresDashboard';

const dentalProcedures = [
    {
      id: 1,
      name: 'Dental cleaning',
      icon: <LiaToothSolid className="w-8 h-8 text-blue-500" />,
      description: 'Removal of plaque and tartar to prevent cavities and gum disease.',
      duration: '30-60 minutos',
      frequency: 'Every 6 months',
      popularity: 95
    },
    {
      id: 2,
      name: 'Dental fillings',
      icon: <LiaToothSolid className="w-8 h-8 text-green-500" />,
      description: 'Cavity repair to prevent further damage to teeth.',
      duration: '30-60 minutes per tooth',
      frequency: 'As needed',
      popularity: 80
    },
    {
      id: 3,
      name: 'Root canal treatment',
      icon: <LiaToothSolid className="w-8 h-8 text-yellow-500" />,
      description: 'Removal of infected dental pulp to save a damaged tooth.',
      duration: '60-90 minutes per session',
      frequency: 'Generally 1-3 sessions',
      popularity: 60
    },
    {
      id: 4,
      name: 'Tooth whitening',
      icon: <LiaToothSolid className="w-8 h-8 text-purple-500" />,
      description: 'Esthetic procedure for lightening the color of teeth.',
      duration: '60-90 minutes',
      frequency: 'Every 1-2 years',
      popularity: 75
    },
    {
      id: 5,
      name: 'Orthodontics',
      icon: <LiaToothSolid className="w-8 h-8 text-red-500" />,
      description: 'Correction of teeth and jaw alignment.',
      duration: 'Long-term treatment',
      frequency: 'Monthly consultations',
      popularity: 70
    }
  ];

const DentalProceduresDashboard = () => {
  return (
  <MedicalProceduresDashboard 
    title="Dental Procedures Panel"
    procedures={dentalProcedures}
  />
)};

export default DentalProceduresDashboard;