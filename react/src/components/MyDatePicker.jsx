import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const MyDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const CustomTimeInput = ({ date, value, onChange }) => (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ 
        border: "solid 1px pink",
        borderRadius:"3px",
        padding:"0.5rem"
      }}
    />
  )

  return (
    <DatePicker 
      selected={startDate} 
      onChange={(date) => setStartDate(date)}
      showTimeInput
      customTimeInput={<CustomTimeInput />}
    />
  )
}