import { useState } from "react";
import "./DoctorModal.css";
import { IoClose } from "react-icons/io5";

const DoctorModal = ({ doctor, onClose }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleConfirmAppointment = () => {
    // Aquí puedes agregar lógica para confirmar la cita
    alert(`Cita agendada con ${doctor.name} a las ${selectedSlot}`);
    onClose(); // Cierra el modal después de confirmar
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* <button className="close-button" onClick={onClose}>X</button> */}
        <IoClose className="close-button" onClick={onClose} />
        <h2>{doctor.name}</h2>
        <p>{doctor.categories[0].name}</p>
        <p>{doctor.description}</p>
        <div className="available-times">
          <h4>Available Times</h4>
          {/* Aquí va el código para mostrar horarios disponibles */}
          <div className="slots-container">
            {doctor.availableSlots.map((slot, index) => (
              <button
                key={index}
                className={`slot-button ${selectedSlot === slot ? "selected" : ""}`}
                onClick={() => handleSlotClick(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
          {selectedSlot && (
            // <button className="confirm-button" onClick={handleConfirmAppointment}>
            //   Confirm Appointment
            // </button>
            <button
              className="confirm-button"
              onClick={handleConfirmAppointment}
            >
              Confirm Appointment
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
          )}
        </div>
        {/* <button className="schedule-button">Schedule Appointment</button> */}
      </div>
    </div>
  );
};

export default DoctorModal;
