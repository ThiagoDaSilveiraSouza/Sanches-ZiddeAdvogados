import { Timestamp } from "firebase/firestore"

export const formatDate = {

  getDayByTimestamp: (timestamp: Timestamp) => {
    const { seconds } = timestamp

    if (seconds) {

      const date = new Date(seconds * 1000)
      const day = date.getUTCDate().toString().padStart(2, "0")
      const month = (date.getUTCMonth() + 1).toString().padStart(2, "0")
      const year = date.getUTCFullYear()

      return `${day}/${month}/${year}`
    }
  }

}