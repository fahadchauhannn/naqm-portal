import React, { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import styles from "./Home.module.css"
import moment from "moment"

const AqiCalendar = () => {
  const [value, onChange] = useState(new Date())
  const mark = ["04-12-2023", "03-12-2023", "05-12-2023"]
  return (
    <div>
      <Calendar
        className={styles.calendar}
        onChange={onChange}
        value={value}
        tileClassName={({ date, view }) => {
          if (mark.find(x => x === moment(date).format("DD-MM-YYYY"))) {
            return `${styles.highlight}`
          }
        }}
      />
    </div>
  )
}

export default AqiCalendar
