export const SET_DATA = 'SET_DATA';
export const SET_FILTER_DATA = 'SET_FILTER_DATA';

export function setDataActions(arr) {
  return {type:SET_DATA, arr}
}

export function setFilterDataActions(value) {
  return {type:SET_FILTER_DATA, value}
}

