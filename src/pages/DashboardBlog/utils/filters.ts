import { Timestamp } from "firebase/firestore"
import { IPost } from "../../../interfaces"
import { formatDate } from "../../../utils"

export interface IFilters {
  id?: string
  title?: string
  date?: Timestamp
}


const filterById = (postList: IPost[], filtersValue: IFilters) => {
  const { id } = filtersValue
  if (!id) {
    return postList
  }


  return postList.filter((currentPost) => currentPost.id?.includes(id))
}

const filterByTitle = (postList: IPost[], filtersValue: IFilters) => {
  const { title } = filtersValue

  if (!title) {
    return postList
  }

  return postList.filter((currentPost) => currentPost.title.includes(title))
}

const filterByDate = (postList: IPost[], filtersValue: IFilters) => {
  const { date } = filtersValue

  if (!date) {
    return postList
  }


  return postList.filter((currentPost) => {
    const { getDayByTimestamp } = formatDate
    const targetDate = getDayByTimestamp(date)
    const currentPostDate = getDayByTimestamp(currentPost.date)

    const isSameTargetDate = targetDate === currentPostDate

    return isSameTargetDate
  })
}

export const useAllFilters = (postList: IPost[], filtersValue: IFilters) => {
  const filterList = [filterById, filterByTitle, filterByDate]

  const postListFiltered = filterList.reduce<IPost[]>((postListFiltered, currentFilter) => {
    return currentFilter(postListFiltered, filtersValue)
  }, postList)

  return postListFiltered

}