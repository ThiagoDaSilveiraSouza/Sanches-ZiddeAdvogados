import { Dispatch, SetStateAction } from "react"

export const createUpdateStateProp = <T extends Object>(setStateAction: Dispatch<SetStateAction<T>>) => {
  const updateStateProp = <V>(propTargetName: keyof T, value: V) => {
    setStateAction((state) => {
      const typeOfPropIsSameOfNewValue = typeof value === typeof state[propTargetName]
      
      if (typeOfPropIsSameOfNewValue) {
        state[propTargetName] = value
      }

      return state
    })
  }
  return updateStateProp
}