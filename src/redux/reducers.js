import {SET_DATA, SET_FILTER_DATA, DATA_SORT_DOWN, DATA_SORT_UP} from "../redux/actions";


const initialState = {
  data:[],
  dataFilter:[]
};

function elementsRootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA :
      return{
        data: action.arr,
        dataFilter: action.arr
      };
    case SET_FILTER_DATA :
      return{
        ...state, dataFilter: state.data.filter(d => {
          return d.name.toLowerCase().includes(action.value)}) 
      };
    case DATA_SORT_UP :
      const newArr = state.dataFilter.sort((a, b) => {
        return a[action.id] > b[action.id] ? 1 : -1})
      return{
        ...state, dataFilter: [...newArr]
      };
    case DATA_SORT_DOWN :
      const newArr2 = state.dataFilter.sort((a, b) => {
        return a[action.id] > b[action.id] ? -1 : 1})
      return{
        ...state, dataFilter: [...newArr2]
      };
    default:
      return state;
  }
}

export default elementsRootReducer;


/* let arrayUsersName = action.value ? state.data.filter(d => (d.name.toLowerCase()).includes(action.value)) : state.data;
let arrayUsersUsername = action.value ? state.data.filter(d => (d.username.toLowerCase()).includes(action.value)) : [];
let arrayUsers = arrayUsersName.concat(arrayUsersUsername)
debugger
return arrayUsers */
