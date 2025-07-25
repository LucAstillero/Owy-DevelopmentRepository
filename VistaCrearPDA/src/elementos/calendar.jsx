import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../calendar.css";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);

export default function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="calendar-container">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        inline
        locale="es"
        minDate={new Date()}
        className="calendar-component"
      />
    </div>
  );
}
