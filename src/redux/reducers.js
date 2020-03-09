import directorsData from '../data/data';
import {SET_DATA} from "../redux/actions";


const initialState = {
  directors:directorsData.directors,
  data:[]
};

function elementsRootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA :
      return{
        data: action.arr
      };
    default:
      return state;
  }
}

export default elementsRootReducer;
