import React from 'react'
import {useSelector} from 'react-redux';


export default function Table() {
  const data = useSelector(state => state.data);
  const dataFilter = useSelector(state => state.dataFilter);
  const dataTable = dataFilter ? dataFilter : data;
  console.log(dataTable)
  const table = dataTable.map(({ id, name, username,email, address, phone, active}) => (
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
        <caption>users table</caption>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Street</th>
            <th>Phone</th>
            <th>Active</th>
          </tr>
        {table }
        </tbody>
      </table>
    </div>
  )
}
