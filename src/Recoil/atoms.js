import { atom } from 'recoil'

export const currentListState = atom({
  key: "currentList",
  default: null
})

export const creatingListState = atom({
  key: "creatingList",
  default: false
})