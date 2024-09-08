import ReactDOMServer from "react-dom/server"
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Toastify from "toastify-js"  
import { ToastContent } from "../ToastContent/ToastContent";

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"

import axios from "axios";
import { useSelector } from "react-redux";
import { getEnvVariables } from "../../helpers/getEnvVariables";
import moment from "moment";
import "./DoctorModal.css"; 

const DoctorModal = ({ doctor, onClose }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [date, setDate] = useState()

  const user = useSelector((state) => state.user.user)  

  const envVars = getEnvVariables()  

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleConfirmAppointment = async () => {
    // Aquí puedes agregar lógica para confirmar la cita
    const formatedDate = moment(date).format("YYYY-MM-DD")

    try {
      const dataAppointment = { date: formatedDate, time: selectedSlot, userId: user.id, doctorId: doctor.id }
      await axios.post(
        `${envVars.VITE_BACK_URL}/appointments/schedule`,
        dataAppointment,
      ) 

      const myToast = Toastify({
        text: ReactDOMServer.renderToString(<ToastContent message={`Appointment successfully scheduled with ${doctor.name} at ${selectedSlot}`} />),
        className: "toastify",
        position: "left",
        gravity: "bottom",
        duration: 870, // Duración muy grande para simular permanencia en pantalla
        close: false,
        escapeMarkup: false
      })  
  
      myToast.showToast()  
      onClose(); // Cierra el modal después de confirmar
    } catch (error) {
      
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* <button className="close-button" onClick={onClose}>X</button> */}
        <IoClose className="close-button" onClick={onClose} />
        <h2>{doctor.name}</h2>
        <p className="font-bold">{doctor.categories[0].name}</p>
        <p className="text-sm text-gray-400">{doctor.description}</p>
        <div className="available-times">
          <h4>Available Times</h4>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "mb-[20px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="z-[2000]"
              />
            </PopoverContent>
          </Popover>
          <div className="grid grid-cols-3 gap-2">
            {doctor.availableSlots.map((time, index) => (
              <Button
                key={index}
                onClick={() => handleSlotClick(time)}
                variant={selectedSlot === time ? "default" : "outline"}
                className="w-full"
                disabled={!date}
              >
                {time}
              </Button>
            ))}
          </div>


        
          {selectedSlot && (
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
