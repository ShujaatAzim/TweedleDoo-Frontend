import { atom } from 'recoil'

export const currentListState = atom({
  key: "currentList",
  default: null
})

export const allItemsState = atom({
  key: "allItems",
  default: []
})

export const allListsState = atom({
  key: "allLists",
  default: []
})