import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const MyDatePicker = ({when,setWhen}) => {
  const [startDate, setStartDate] = useState(new Date());
  
  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error"
  }
  return (

    <DatePicker 
      selected={startDate} 
      onChange={selectedDate => {
        setStartDate(selectedDate)
        setWhen(selectedDate)
        // console.log("selected date: "+selectedDate)
        // console.log("start date: "+startDate)
      }}
      showTimeSelect
      timeClassName={handleColor}
    />
  )
}