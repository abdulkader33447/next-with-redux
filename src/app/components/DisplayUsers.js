"use client";
import { useDispatch, useSelector } from "react-redux";
import {removeUser} from "../redux/slice"

export default function DisplayUsers() {

    const dispatch = useDispatch()
    // const userDispatch =()=>{
    //     dispatch(removeUser)
    //     console.log("from display user for remove user")
    // }
  const userData = useSelector((data) => data.users);
  console.log("from display user", userData);
  return (
    <div className="display-user h-60  overflow-auto">
      <h2>User List</h2>
      <div className="space-y-3">
        {userData.map((item) => (
          <div key={item.id} className="bg-gray-100  p-2 rounded-lg flex justify-between">
            <h1>{item.name}</h1>
            <button onClick={()=>dispatch(removeUser(item.id))} className="cursor-pointer">❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}
