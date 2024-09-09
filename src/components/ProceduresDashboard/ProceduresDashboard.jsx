// Importa los hooks necesarios de React Router
import { useParams } from "react-router-dom";
import VisionProceduresDashboard from "../CategoryPage/VisionProceduresDashboard";
import DentalProceduresDashboard from "../CategoryPage/DentalProceduresDashboard";

import {
    CardiologyProceduresDashboard,
    LaboratoryProceduresDashboard,
    ENTProceduresDashboard,
    PhysicalTherapyProceduresDashboard,
    EmergencyMedicineProceduresDashboard,
    HospitalizationProceduresDashboard,
    TemperatureControlProceduresDashboard,
    NutritionWeightControlProceduresDashboard,
    GeneralMedicineProceduresDashboard
  } from '../CategoryPage/MedicalSpecialities';


const ProceduresDashboard = () => {
    const { type } = useParams();

    // Renderiza diferentes componentes según el valor de 'type'
  switch(type) {
    case 'vision':
      return <VisionProceduresDashboard />;
    case 'dental':
      return <DentalProceduresDashboard />;
    case 'cardiology':
      return <CardiologyProceduresDashboard />;
    case 'laboratory':
      return <LaboratoryProceduresDashboard />;
    case 'general':
      return <GeneralMedicineProceduresDashboard />;
    case 'ent':
      return <ENTProceduresDashboard />;
    case 'physical-therapy':
      return <PhysicalTherapyProceduresDashboard />;
    case 'emergency':
      return <EmergencyMedicineProceduresDashboard />;
    case 'hospitalization':
      return <HospitalizationProceduresDashboard />;
    case 'temperature':
      return <TemperatureControlProceduresDashboard />;
    case 'nutrition':
      return <NutritionWeightControlProceduresDashboard />;

    default:
      return <div>Select a valid option</div>;
  }
};

export default ProceduresDashboard
