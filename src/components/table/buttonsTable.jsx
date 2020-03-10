import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {sortDataDownActions,sortDataUpActions} from '../../redux/actions';


export default function ButtonsTable(props) {

  const dataFilter = useSelector(state => state.dataFilter);
  const dispatch = useDispatch();

  const dataSortUp = (event) => {
    dispatch(sortDataUpActions(event.target.id))
    console.log(dataFilter)
  };

  const dataSortDown = (event) => {
    dispatch(sortDataDownActions(event.target.id))
    console.log(dataFilter)
  };
  

  return (
    <div>
     <button id = {props.id} onClick = {dataSortUp}>	&uarr;</button>
     <button id = {props.id} onClick = {dataSortDown}>	&darr;</button>
    </div>
  )
}
