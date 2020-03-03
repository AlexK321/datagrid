import directorsData from '../data/data';

const LANG = {
  RU: {CODE: 'ru', TITLE: 'RU'},
  ENG: {CODE: 'en', TITLE: 'EN'},
  BY: {CODE: 'by', TITLE: 'BE'}
};


const randomDirector = Math.floor(new Date()/1000/3600/24) % directorsData.directors.length;


const initialState = {
  directors:directorsData.directors,
  directorsOfTheDay:directorsData.directors[randomDirector],
  selectedDirector:directorsData.directors.filter((x) => x.id === randomDirector)[0],
  language:LANG.RU.CODE
};
 
const SHOW_DIRECTOR = 'SHOW_DIRECTOR';
const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';



function elementsRootReducer(state = initialState, action) {

  switch (action.type) {
    case SHOW_DIRECTOR:
      return{
        ...state, selectedDirector: state.directors.filter(d => {
          return  d.id === action.id})[0]
      };
    case CHANGE_LANGUAGE :
      return Object.assign({}, state, {language:LANG[action.langCode].CODE});
    default:
      return state;
  }
}

export function showDirector(id) {
  return {type:SHOW_DIRECTOR, id}
}

export function changeLanguage(langCode) {
  return {type:CHANGE_LANGUAGE, langCode}
}

export default elementsRootReducer;
