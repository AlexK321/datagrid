import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {setDataActions} from '../../redux/actions';
import faker from 'faker'
import Table from '../table/table'


export default function Main() {
  
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const arr = function () {
    const arr = []
    for (let i = 1; i <= 10; i++) {
      const user = faker.helpers.userCard()
      const dateUser = faker.date.past(2)
      user.active = faker.random.boolean()
      user.dateRegistration = dateUser.toString()
      user.getTime = Date.parse(dateUser)
      user.id = i
      arr.push(user)
    }
    return arr
  }
  
  const setData = (arr) => {
    dispatch(setDataActions(arr))
    console.log(data)
    console.log(arr())
  };


  return (
    <div className='container_dir'>
      <button onClick = {() => {setData(arr)}} > Main</button>
      <button onClick = {() => console.log(data)} > Main2</button>
      <Table/>
    </div>
  )
}
