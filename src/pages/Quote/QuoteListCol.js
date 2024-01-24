import React from "react"
import { Link } from "react-router-dom"
import * as moment from "moment"
import { size, map } from "lodash"

const formateDate = (date, format) => {
  const dateFormat = format ? format : "DD MMM Y"
  const date1 = moment(new Date(date)).format(dateFormat)
  return date1
}
const toLowerCase1 = str => {
  return str === "" || str === undefined ? "" : str.toLowerCase()
}

const Date = cell => {
  return cell.value ? cell.value.slice(0, 10) : ""
}

const Name = cell => {
  return cell.value ? cell.value : ""
}

const Email = cell => {
  return cell.value ? cell.value : ""
}

const Number = cell => {
  return cell.value ? cell.value : ""
}

const Product = cell => {
  return cell.value ? cell.value : ""
}

export { Name, Email, Number, Date, Product }
