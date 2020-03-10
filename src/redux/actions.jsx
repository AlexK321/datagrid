export const SET_DATA = 'SET_DATA';
export const SET_FILTER_DATA = 'SET_FILTER_DATA';
export const DATA_SORT_UP = 'DATA_SORT_UP';
export const DATA_SORT_DOWN = 'DATA_SORT_DOWN';

export function setDataActions(arr) {
  return {type:SET_DATA, arr}
}

export function setFilterDataActions(value) {
  return {type:SET_FILTER_DATA, value}
}

export function sortDataUpActions(id) {
  return {type:DATA_SORT_UP,id}
}

export function sortDataDownActions(id) {
  return {type:DATA_SORT_DOWN,id}
}
