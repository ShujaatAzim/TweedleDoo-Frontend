import { atom } from 'recoil'

export const currentListState = atom({
  key: "currentList",
  default: null
})

export const creatingListState = atom({
  key: "creatingList",
  default: false
})

export const allListsState = atom({
  key: "allLists",
  default: []
})

export const allItemsState = atom({
  key: "allItems",
  default: []
})