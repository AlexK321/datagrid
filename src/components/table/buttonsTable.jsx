import React from 'react'
import { useDispatch} from 'react-redux';
import {sortDataDownActions,sortDataUpActions} from '../../redux/actions';
import '../component.scss';



export default function ButtonsTable(props) {
  
  const dispatch = useDispatch();

  const dataSortUp = (event) => {
    dispatch(sortDataUpActions(event.target.id))
  };

  const dataSortDown = (event) => {
    dispatch(sortDataDownActions(event.target.id))
  };
  
  return (
    <div>
     <button id = {props.id} onClick = {dataSortUp}>	&uarr;</button>
     <button id = {props.id} onClick = {dataSortDown}>	&darr;</button>
    </div>
  )
}
