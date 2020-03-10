import React, {useEffect} from 'react'
import { useDispatch} from 'react-redux';
import {setDataActions, setFilterDataActions} from '../../redux/actions';
import faker from 'faker'
import Table from '../table/table'


export default function Main() {
  
  const dispatch = useDispatch();
  const setData = (arr) => {
    dispatch(setDataActions(arr))
  };

  const dataCreated = function () {
    const arr = []
    for (let i = 1; i <= 13; i++) {
      const user = faker.helpers.userCard()
      const dateUser = faker.date.past(2)
      user.active = faker.random.boolean()
      user.dateRegistration = dateUser.toString()
      user.getTime = Date.parse(dateUser)
      user.id = i
      arr.push(user)
    }
    setData(arr)
  }

  useEffect(dataCreated, [])
  
  const setFilterData = (value) => {
    dispatch(setFilterDataActions(value))
  };

  const searchData = (e) => {
    if (e.currentTarget.value) {
      setFilterData(e.currentTarget.value)
    } else {
      setFilterData('')
    }
  };


  return (
    <div className='container_dir'>
      <input type="text" onChange={searchData}/>
      <Table />
    </div>
  )
}
