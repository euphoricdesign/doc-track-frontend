import ReactDOMServer from "react-dom/server"
import React, { useState } from "react"  
import axios from "axios"  

import { Calendar } from "../ui/calendar"  
import { Button } from "../ui/button"  
import { Textarea } from "../ui/textarea"  
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"  

import { useNavigate } from 'react-router-dom'  
import { useSelector } from "react-redux"  

import moment from 'moment'  

import Toastify from "toastify-js"  
import { ToastContent } from "../ToastContent/ToastContent"  

import { getEnvVariables } from "../../helpers/getEnvVariables"  
import './AppointmentScheduler.css'

const AppointmentBooking = () => {
  const [date, setDate] = useState(new Date())  
  const [time, setTime] = useState("")  
  const [notes, setNotes] = useState("")  

  const [success, setSuccess] = useState(false)  
  const [isDateValid, setIsDateValid] = useState(true)  

  const [selectedValue, setSelectedValue] = useState("")  

  const user = useSelector((state) => state.user.user)  
  const doctors = useSelector((state) => state.doctors.doctors)
  
  const navigate = useNavigate()  

  const envVars = getEnvVariables()  

  const times = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ]  

  const handleDateChange = (newDate) => {
    setDate(newDate)  
  }  

  const handleTimeSelect = (selectedTime) => {
    setTime(selectedTime)  
  }  
  
  const handleSelectChange = (value) => {
    setSelectedValue(value)
    console.log("Valor seleccionado:", value)
  }  

  const handleNotesChange = (e) => {
    setNotes(e.target.value)  
  }  

  const handleSubmit = async () => {
    const formatedDate = moment(date).format("YYYY-MM-DD")

    try {
      const dataAppointment = { date: formatedDate, time, userId: user.id, doctorId: selectedValue }
      await axios.post(
        `${envVars.VITE_BACK_URL}/appointments/schedule`,
        dataAppointment,
      ) 
      setSuccess(true)  
      const myToast = Toastify({
        text: ReactDOMServer.renderToString(<ToastContent message={"Your appointment was successfully created"} />),
        className: "toastify",
        position: "left",
        gravity: "bottom",
        duration: 870, // Duración muy grande para simular permanencia en pantalla
        close: false,
        escapeMarkup: false
      })  

      // Mostrar la notificación
      myToast.showToast()  
      setTimeout(() => {
        navigate('/appointments')
      }, 1800)
    } catch (error) {
      console.log(error)  
      setIsDateValid(false)  
    }
  }  


  return (
    <div className="p-6 bg-white custom-shadow rounded-xl w-[700px]">
      <div className="flex gap-6">
        <div>
          <p className="text-sm font-[600] mb-2">Select Date</p>
          <div className="mb-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateChange}
              className="rounded-md border"
            />
          </div>
        </div>
        <div className="w-full">
          <p className="text-sm font-[600] mb-2">Select Time</p>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {times.map((t) => (
              <Button
                key={t}
                onClick={() => handleTimeSelect(t)}
                variant={time === t ? "default" : "outline"}
                className="w-full"
                disabled={!date}
              >
                {t}
              </Button>
            ))}
          </div>
          <p className="text-sm font-[600] mb-2">Select Doctor</p>
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="w-[100%]">
              <SelectValue placeholder="Choose professional" />
            </SelectTrigger>
            <SelectContent>
              {
                doctors && (
                  doctors.map(doctor => (
                    <SelectItem key={doctor.id} value={doctor.id}>{doctor.name}</SelectItem>
                  ))
                )
              }
            </SelectContent>
          </Select>
          <p className="text-sm font-[600] my-2">Notes</p>
          <Textarea onChange={handleNotesChange} />
        </div>
      </div>
      <Button
        onClick={handleSubmit}
        className="w-full"
        disabled={!date || !time}
      >
        Get Appointment
      </Button>
    </div>
  )  
}  

export default AppointmentBooking  
