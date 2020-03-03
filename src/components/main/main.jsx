import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {showDirector} from '../../redux/reducers';




export default function Main() {
  
  const directors = useSelector(state => state.directors);
  const language = useSelector(state => state.language);
  const dispatch = useDispatch();
  const selectedDirector = useSelector(state => state.selectedDirector);

  

  const setIdDirectors = (id) => {
    dispatch(showDirector(id))
    
  };

  console.log(selectedDirector)
  return (
    
    <div className='container_dir'>
      Hello
      <button onClick = {() => {setIdDirectors(3)}} > Yf;vb</button>
    </div>
    
  )
}
