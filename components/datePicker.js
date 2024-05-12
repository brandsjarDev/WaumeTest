import React, { useState } from "react";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <input type="date" value={selectedDate} onChange={handleDateChange} />
    </div>
  );
};

export default DatePicker;
