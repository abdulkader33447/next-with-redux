"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";


export default function AddUsers() {
  const [name, setName] = useState("");
  const dispatch = useDispatch()

  const userDispatch = () => {
    //console.log(name)
    dispatch(addUser(name))
  };
  return (
    <div className="add-user">
      <h2>Add User</h2>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        className="border py-1 px-2 rounded-lg block mb-3"
        placeholder="Add New User"
      />
      <button
        onClick={userDispatch}
        className="cursor-pointer py-1 px-2 rounded-lg bg-slate-200 hover:bg-slate-300 transition duration-500"
      >
        Add User
      </button>
    </div>
  );
}
