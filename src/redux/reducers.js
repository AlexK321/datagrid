import directorsData from '../data/data';
import {SET_DATA, SET_FILTER_DATA} from "../redux/actions";


const initialState = {
  directors:directorsData.directors,
  data:[],
  dataFilter:[]
};

function elementsRootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA :
      return{
        data: action.arr
      };
    case SET_FILTER_DATA :
    return{
      ...state, dataFilter: state.data.filter(d => {
        return d.name.toLowerCase().includes(action.value)}) 
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
