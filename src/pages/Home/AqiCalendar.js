import React, { useEffect, useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import styles from "./Home.module.css"
import moment from "moment"
import { get } from "helpers/api_helper"
import { data } from "autoprefixer"

const AqiCalendar = () => {
  const [value, onChange] = useState(new Date())
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await get("data/calender-data")
      const data = response.data.map(item => {
        return {
          date: `${String(item.date.day).padStart(2, "0")}-${String(
            item.date.month
          ).padStart(2, "0")}-${item.date.year}`,
          aqi: item.aqi,
        }
      })
      console.log(data, "Calender Readings")
      setData(data)
    } catch (err) {
      console.log(err)
    }
  }

  const getStyle = aqi => {
    let style = styles.success
    if (aqi > 0 && aqi <= 50) {
      style = styles.good
    }
    if (aqi > 50 && aqi <= 100) {
      style = styles.moderate
    }
    if (aqi > 100 && aqi <= 150) {
      style = styles.unhealthy
    }
    if (aqi > 150 && aqi <= 200) {
      style = styles.danger
    }
    if (aqi > 200 && aqi <= 300) {
      style = styles.veryUnhealthy
    }
    if (aqi > 300) {
      style = styles.hazardous
    }

    return style
  }
  return (
    <div style={{ marginBottom: "20px" }}>
      <Calendar
        className={styles.calendar}
        onChange={onChange}
        value={value}
        tileClassName={({ date, view }) => {
          if (data.find(x => x.date === moment(date).format("DD-MM-YYYY"))) {
            const aqiData = data.find(
              x => x.date === moment(date).format("DD-MM-YYYY")
            )
            return `${getStyle(aqiData?.aqi)}`
          }
        }}
      />
    </div>
  )
}

export default AqiCalendar
