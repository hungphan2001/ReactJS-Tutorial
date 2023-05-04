import axios from 'axios';
import React, { useEffect, useState } from 'react'

const User = () => {
  const [users, SetUsers] = useState([]);
  const [loading, SetLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {

          SetUsers(res.data)
          SetLoading(false)
        })
        .catch((error) => {
          console.log(error)
        });
    }
    fetchData();

  }, [])

  return (
    <>

      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Fullname</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>))
          }


        </tbody>
      </table>


    </>
  )
}

export default User