import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import './UserList.css'


const ListUser = ()=> {
       const [Users, setUsers] = useState ([])


      useEffect(() => {
          const url ='https://jsonplaceholder.typicode.com/users'
          axios.get (url)
          .then(response => response.data)
          .then(resData => setUsers(resData))
      },[]) 

      return(
          <div>
              <h2>this is the List of users</h2>
              <div className='user-container'>
                  {Users.map( user => <UserCard user={user} key={user.id}/>
                  )}
              </div>
          </div>
      )
}


export default ListUsers
