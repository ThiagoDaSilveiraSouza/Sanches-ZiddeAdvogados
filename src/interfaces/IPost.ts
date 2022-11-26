import { Timestamp } from "firebase/firestore";

export interface IPost {
  id?: string;
  title: string;
  description: string;
  date: Timestamp
}