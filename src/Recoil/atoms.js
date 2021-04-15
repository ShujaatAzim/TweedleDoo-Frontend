import { atom } from 'recoil';

export const userState = atom({
  key: "user",
  default: {}
});

export const listsState = atom({
  key: "lists",
  default: []
})

export const currentListState = atom({
  key: "currentList",
  default: null
});

export const creatingListState = atom({
  key: "creatingList",
  default: false
});