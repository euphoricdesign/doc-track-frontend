import React from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { LuMicroscope } from "react-icons/lu";
import { MdOutlineHearing } from "react-icons/md";
import { GrWheelchair } from "react-icons/gr";
import { PiPill } from "react-icons/pi";
import { PiStethoscopeDuotone } from "react-icons/pi";
import { IoScaleOutline } from "react-icons/io5";
import { IoThermometerOutline } from "react-icons/io5";
import { PiBedLight } from "react-icons/pi";
import { MdOutlineEmergency } from "react-icons/md";
import MedicalProceduresDashboard from './MedicalProceduresDashboard';

// Cardiology Procedures
const cardiologyProcedures = [
  {
    id: 1,
    name: 'Electrocardiogram (ECG)',
    icon: <IoIosHeartEmpty className="w-8 h-8 text-red-500" />,
    description: "Recording of the heart's electrical activity.",
    duration: '10-15 minutes',
    frequency: 'According to medical advice',
    popularity: 90
  },
  {
    id: 2,
    name: 'Ecocardiogram',
    icon: <IoIosHeartEmpty className="w-8 h-8 text-pink-500" />,
    description: 'Ultrasound imaging of the heart and its structures.',
    duration: '30-45 minutes',
    frequency: 'According to clinical need',
    popularity: 80
  },
  // Add more cardiology procedures...
];

const CardiologyProceduresDashboard = () => (
  <MedicalProceduresDashboard 
    title="Cardiology Procedures Panel"
    procedures={cardiologyProcedures}
  />
);

// Laboratory Procedures
const laboratoryProcedures = [
  {
    id: 1,
    name: 'Complete blood test',
    icon: <LuMicroscope className="w-8 h-8 text-purple-500" />,
    description: 'Detailed evaluation of blood components.',
    duration: '15-30 minutes (extraction)',
    frequency: 'Annual or as medically indicated',
    popularity: 98
  },
  {
    id: 2,
    name: 'Cholesterol test',
    icon: <LuMicroscope className="w-8 h-8 text-yellow-500" />,
    description: 'Measurement of blood cholesterol levels.',
    duration: '10-15 minutes (extraction)',
    frequency: 'Annual or according to risk factors',
    popularity: 85
  },
  // Add more laboratory procedures...
];

const LaboratoryProceduresDashboard = () => (
  <MedicalProceduresDashboard 
    title="Laboratory Procedures Panel"
    procedures={laboratoryProcedures}
  />
);

// ENT (Ear, Nose, Throat) Procedures
const entProcedures = [
  {
    id: 1,
    name: 'Audiometry',
    icon: <MdOutlineHearing className="w-8 h-8 text-blue-500" />,
    description: 'Evaluation of hearing ability.',
    duration: '20-30 minutes',
    frequency: 'As required or on an annual basis',
    popularity: 75
  },
  {
    id: 2,
    name: 'Nasal endoscopy',
    icon: <MdOutlineHearing className="w-8 h-8 text-green-500" />,
    description: 'Visual examination of the nasal cavities and paranasal sinuses.',
    duration: '15-20 minutes',
    frequency: 'According to symptoms or medical indication',
    popularity: 70
  },
  // Add more ENT procedures...
];

const ENTProceduresDashboard = () => (
  <MedicalProceduresDashboard 
    title="Otorhinolaryngological Procedures Panel"
    procedures={entProcedures}
  />
);

// Physical Therapy Procedures
const physicalTherapyProcedures = [
  {
    id: 1,
    name: 'Mobility assessment',
    icon: <GrWheelchair className="w-8 h-8 text-blue-500" />,
    description: 'Analysis of range of motion and functional capacity.',
    duration: '45-60 minutes',
    frequency: 'Initial and follow-ups',
    popularity: 85
  },
  {
    id: 2,
    name: 'Exercise therapy',
    icon: <GrWheelchair className="w-8 h-8 text-green-500" />,
    description: 'Personalized therapeutic exercise program.',
    duration: '30-45 minutes por sesión',
    frequency: '2-3 times per week',
    popularity: 90
  },
  // Add more physical therapy procedures...
];

const PhysicalTherapyProceduresDashboard = () => (
  <MedicalProceduresDashboard 
    title="Physical Therapy Procedures Panel"
    procedures={physicalTherapyProcedures}
  />
);

// Pharmacy Procedures
const pharmacyProcedures = [
  {
    id: 1,
    name: 'Dispensación de medicamentos',
    icon: <PiPill className="w-8 h-8 text-blue-500" />,
    description: 'Entrega de medicamentos prescritos con asesoramiento farmacéutico.',
    duration: '5-15 minutes',
    frequency: 'Según prescripción médica',
    popularity: 100
  },
  {
    id: 2,
    name: 'Revisión de medicación',
    icon: <PiPill className="w-8 h-8 text-green-500" />,
    description: 'Evaluación completa de todos los medicamentos del paciente.',
    duration: '20-30 minutes',
    frequency: 'Anual o según necesidad',
    popularity: 75
  },
  // Add more pharmacy procedures...
];

const PharmacyProceduresDashboard = () => (
  <MedicalProceduresDashboard 
    title="Panel de Procedimientos Farmacéuticos"
    procedures={pharmacyProcedures}
  />
);

// Vaccination Procedures
const vaccinationProcedures = [
  {
    id: 1,
    name: 'Vacunación contra la gripe',
    // icon: <Syringe className="w-8 h-8 text-blue-500" />,
    description: 'Administración de la vacuna anual contra la influenza.',
    duration: '5-10 minutes',
    frequency: 'Anual',
    popularity: 85
  },
  {
    id: 2,
    name: 'Vacunación infantil',
    // icon: <Syringe className="w-8 h-8 text-green-500" />,
    description: 'Administración de vacunas según el calendario de vacunación infantil.',
    duration: '10-15 minutes',
    frequency: 'Según calendario',
    popularity: 95
  },
  // Add more vaccination procedures...
];

const VaccinationProceduresDashboard = () => (
  <MedicalProceduresDashboard 
    title="Panel de Procedimientos de Vacunación"
    procedures={vaccinationProcedures}
  />
);

// General Medicine Procedures
const generalMedicineProcedures = [
  {
    id: 1,
    name: 'General physical exam',
    icon: <PiStethoscopeDuotone className="w-8 h-8 text-blue-500" />,
    description: 'Complete evaluation of general health status.',
    duration: '30-45 minutes',
    frequency: 'Annual or as needed',
    popularity: 90
  },
  {
    id: 2,
    name: 'Blood pressure control',
    icon: <PiStethoscopeDuotone className="w-8 h-8 text-green-500" />,
    description: 'Blood pressure measurement and monitoring.',
    duration: '5-10 minutes',
    frequency: 'Variable, depending on risk',
    popularity: 95
  },
  // Add more general medicine procedures...
];

const GeneralMedicineProceduresDashboard = () => (
  <MedicalProceduresDashboard 
    title="General Practice Procedures Panel"
    procedures={generalMedicineProcedures}
  />
);

// Emergency Medicine Procedures
const emergencyMedicineProcedures = [
  {
    id: 1,
    name: 'Emergency triage',
    icon: <MdOutlineEmergency className="w-8 h-8 text-red-500" />,
    description: 'Rapid assessment to determine the urgency of treatment.',
    duration: '2-5 minutes',
    frequency: 'As required',
    popularity: 100
  },
  {
    id: 2,
    name: 'Cardiopulmonary resuscitation (CPR)',
    icon: <MdOutlineEmergency className="w-8 h-8 text-red-500" />,
    description: 'Emergency procedure to maintain blood flow to the brain and other vital organs.',
    duration: 'Variable',
    frequency: 'In case of cardiac arrest',
    popularity: 100
  },
  // Add more emergency medicine procedures...
];

const EmergencyMedicineProceduresDashboard = () => (
  <MedicalProceduresDashboard 
    title="Emergency Medicine Procedures Panel"
    procedures={emergencyMedicineProcedures}
  />
);

// Radiology Procedures
const radiologyProcedures = [
  {
    id: 1,
    name: 'Radiografía de tórax',
    // icon: <Zap className="w-8 h-8 text-purple-500" />,
    description: 'Imagen de los pulmones, corazón y caja torácica.',
    duration: '10-15 minutes',
    frequency: 'Según indicación médica',
    popularity: 85
  },
  {
    id: 2,
    name: 'Tomografía computarizada (TC)',
    // icon: <Zap className="w-8 h-8 text-blue-500" />,
    description: 'Imágenes detalladas en 3D de órganos internos.',
    duration: '15-30 minutes',
    frequency: 'Según necesidad diagnóstica',
    popularity: 75
  },
  // Add more radiology procedures...
];

const RadiologyProceduresDashboard = () => (
  <MedicalProceduresDashboard 
    title="Panel de Procedimientos de Radiología"
    procedures={radiologyProcedures}
  />
);

const hospitalizationProcedures = [
  {
    id: 1,
    name: 'AHospital admission',
    icon: <PiBedLight className="w-8 h-8 text-blue-500" />,
    description: 'Process of admitting a patient for inpatient care.',
    duration: '30-60 minutes',
    frequency: 'According to medical necessity',
    popularity: 80
  },
  {
    id: 2,
    name: 'Inpatient monitoring',
    icon: <PiBedLight className="w-8 h-8 text-green-500" />,
    description: 'Continuous monitoring of vital signs and patient status.',
    duration: 'Continuous during the stay',
    frequency: 'Daily during hospitalization',
    popularity: 95
  },
];

const HospitalizationProceduresDashboard = () => (
  <MedicalProceduresDashboard 
    title="Hospitalization Procedures Panel"
    procedures={hospitalizationProcedures}
  />
);

// Componente para control de temperatura (termómetro)
const temperatureControlProcedures = [
  {
    id: 1,
    name: 'Temperature measurement',
    icon: <IoThermometerOutline className="w-8 h-8 text-red-500" />,
    description: "Measurement of the patient's body temperature.",
    duration: '1-2 minutes',
    frequency: 'According to need or protocol',
    popularity: 100
  },
  {
    id: 2,
    name: 'Fever monitoring',
    icon: <IoThermometerOutline className="w-8 h-8 text-orange-500" />,
    description: 'Temperature monitoring in patients with fever.',
    duration: 'Variable',
    frequency: 'Every 4-6 hours or as indicated',
    popularity: 90
  },
];

const TemperatureControlProceduresDashboard = () => (
  <MedicalProceduresDashboard 
    title="Temperature Control Procedures Panel"
    procedures={temperatureControlProcedures}
  />
);

// Componente para nutrición y control de peso (báscula)
const nutritionWeightControlProcedures = [
  {
    id: 1,
    name: 'Nutritional evaluation',
    icon: <IoScaleOutline className="w-8 h-8 text-green-500" />,
    description: "Analysis of the patient's nutritional status and eating habits.",
    duration: '30-45 minutes',
    frequency: 'Initial and periodic follow-ups',
    popularity: 85
  },
  {
    id: 2,
    name: 'Control de peso',
    icon: <IoScaleOutline className="w-8 h-8 text-blue-500" />,
    description: "Measurement and monitoring of the patient's weight.",
    duration: '5-10 minutes',
    frequency: 'Weekly or according to treatment plan',
    popularity: 90
  },
];

const NutritionWeightControlProceduresDashboard = () => (
  <MedicalProceduresDashboard 
    title="Panel de Procedimientos de Nutrición y Control de Peso"
    procedures={nutritionWeightControlProcedures}
  />
);


export {
  CardiologyProceduresDashboard,
  LaboratoryProceduresDashboard,
  ENTProceduresDashboard,
  PhysicalTherapyProceduresDashboard,
  GeneralMedicineProceduresDashboard,
  EmergencyMedicineProceduresDashboard,
  HospitalizationProceduresDashboard,
  TemperatureControlProceduresDashboard,
  NutritionWeightControlProceduresDashboard
};