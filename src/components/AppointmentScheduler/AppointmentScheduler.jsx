import React, { useState } from "react";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const AppointmentBooking = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(null);
  const [notes, setNotes] = useState("");

  const times = [
    "09:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "01:00 pm",
    "02:00 pm",
    "03:00 pm",
    "04:00 pm",
    "05:00 pm",
  ];

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTimeSelect = (selectedTime) => {
    setTime(selectedTime);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Appointment booked:", { date, time, email });
    // Here you would typically send this data to your backend
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-[700px]">
      <div className="flex gap-6">
        <div>
          <p className="text-sm font-[600] mb-4">Select Date</p>
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
              >
                {t}
              </Button>
            ))}
          </div>
          <p className="text-sm font-[600] mb-2">Select Doctor</p>
          <Select>
            <SelectTrigger className="w-[100%]">
              <SelectValue placeholder="Choose professional" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Doctora 1</SelectItem>
              <SelectItem value="dark">Doctora 2</SelectItem>
              <SelectItem value="system">Doctora 3</SelectItem>
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
  );
};

export default AppointmentBooking;
