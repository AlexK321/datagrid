import React, {useEffect} from 'react'
import { useDispatch} from 'react-redux';
import {setDataActions} from '../../redux/actions';
import faker from 'faker'
import Table from '../table/table'
import Input from '../input/input'
import '../component.scss';

export default function Main() {
  const dispatch = useDispatch();
  const setData = (arr) => {
    dispatch(setDataActions(arr))
  };

  const dataCreated = function () {
    const arr = []
    for (let i = 1; i <= 1000; i++) {
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
  
  return (
    <div className='main_container'>
      <div className='block_title_input'>
        <div className='title'>
          DATA-GRID
        </div>
        <Input/>
      </div>
      <Table />
    </div>
  )
}
