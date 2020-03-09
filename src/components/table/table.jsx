import React from 'react'
import {useSelector} from 'react-redux';


export default function Table() {
  const table = 'Hello'
  const dataTable = useSelector(state => state.data);
  console.log(dataTable)

  return (
    <div>
      Table
      <table className="table">
        <caption>users table</caption>
        <tbody>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>address</th>
            <th>phone</th>
            <th>website</th>
            <th>status</th>
            <th>date</th>
          </tr>
        {table }
        </tbody>
      </table>
    </div>
  )
}
