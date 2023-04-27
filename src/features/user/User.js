import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice';

export const User = () => {
    const user = useSelector(state=>state);
    const dispatch = useDispatch();
    console.log("user---->",user)
    if(user.user.isLoading){
        return <h1>Loading.....</h1>
    }
  return (
    <>
        <div>User</div>
        <button style={{padding:'8px'}} onClick={(e)=>dispatch(fetchUsers())}>Get Users Here</button>
        {
            user.user.data && user.user.data.map((cv,idx)=><li key={idx}>{cv.name}</li>)
        }
    </>
  )
}
