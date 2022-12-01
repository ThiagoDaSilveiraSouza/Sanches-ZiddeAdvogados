import { Timestamp } from "firebase/firestore";

export const getDateFromTimestamp = (timeStampValue: Timestamp) => {

  console.group("getDateFromTimestamp")
  console.log("seconds", timeStampValue.seconds)

  const date = new Date(timeStampValue.nanoseconds).toLocaleDateString("pt-BR")
  console.log("date", date)
  // const day = date.getUTCDate().toString().padStart(2, "0")
  // const month = (date.getUTCMonth() + 1).toString().padStart(2, "0")
  // const year = date.getUTCFullYear().toString().padStart(2, "0")

  // const formatedDay = `${day}/${month}/${year}`
  // console.log("formatedDay", formatedDay)

  console.groupEnd()

  // return formatedDay
}