import React from 'react'
import {useSelector} from 'react-redux';
import ButtonsTable from '../table/buttonsTable'


export default function Table() {
  const dataFilter = useSelector(state => state.dataFilter);
  const table = dataFilter.map(({ id, name, username,email, address, phone, active}) => (
    <tr key={id}>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{address.city}</td>
      <td>{address.street}</td>
      <td>{phone}</td>
      <td>{active ? 'yes' : 'no'}</td>
    </tr>
  ))


  return (
    <div>
      Table
      <table className="table">
        <caption>Users</caption>
        <tbody>
          <tr>
            <th>Name<ButtonsTable id = {'name'}/></th>
            <th>Username<ButtonsTable id = {'username'}/></th>
            <th>Email<ButtonsTable id = {'email'}/></th>
            <th>City<ButtonsTable id = {'address.city'}/></th>
            <th>Street<ButtonsTable id = {'address.street'}/></th>
            <th>Phone<ButtonsTable id = {'phone'}/></th>
            <th>Active<ButtonsTable id = {'active'}/></th>
          </tr>
        {table }
        </tbody>
      </table>
    </div>
  )
}
