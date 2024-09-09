import React, { useState } from 'react';
import { LiaClockSolid } from "react-icons/lia";
import { IoCalendar } from 'react-icons/io5';
import { FiUsers } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const ProcedureCard = ({ procedure, onClick }) => (
  <div 
    className="bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    onClick={() => onClick(procedure)}
  >
    <div className="flex justify-between items-start mb-4">
      {procedure.icon}
      <span className="text-sm font-semibold text-gray-500">{procedure.popularity}% popularity</span>
    </div>
    <h3 className="text-lg font-bold mb-2 text-gray-800">{procedure.name}</h3>
    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{procedure.description}</p>
    <div className="flex items-center text-sm text-gray-500">
      <LiaClockSolid className="w-4 h-4 mr-1" />
      <span>{procedure.duration}</span>
    </div>
  </div>
);

const ProcedureModal = ({ procedure, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[3000]">
    <div className="bg-white rounded-lg p-8 max-w-md w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          {procedure.icon}
          <h2 className="text-2xl font-bold text-gray-800 ml-3">{procedure.name}</h2>
        </div>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <IoCloseSharp size={24} />
        </button>
      </div>
      <p className="text-gray-600 mb-6">{procedure.description}</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <LiaClockSolid className="w-4 h-4 mr-2 text-blue-500" />
            <span>Duración</span>
          </div>
          <p className="font-semibold text-gray-800">{procedure.duration}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <IoCalendar className="w-4 h-4 mr-2 text-green-500" />
            <span>Frecuencia</span>
          </div>
          <p className="font-semibold text-gray-800">{procedure.frequency}</p>
        </div>
      </div>
      <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
        <div className="flex items-center">
          <FiUsers className="w-5 h-5 text-blue-500 mr-2" />
          <span className="text-sm text-gray-700">Popularity of treatment</span>
        </div>
        <span className="text-lg font-bold text-blue-600">{procedure.popularity}%</span>
      </div>
    </div>
  </div>
);

const MedicalProceduresDashboard = ({ title, procedures }) => {

  console.log(procedures)
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {procedures.map(procedure => (
          <ProcedureCard 
            key={procedure.id} 
            procedure={procedure}
            onClick={setSelectedProcedure}
          />
        ))}
      </div>
      {selectedProcedure && (
        <ProcedureModal 
          procedure={selectedProcedure} 
          onClose={() => setSelectedProcedure(null)} 
        />
      )}
    </div>
  );
};

export default MedicalProceduresDashboard;