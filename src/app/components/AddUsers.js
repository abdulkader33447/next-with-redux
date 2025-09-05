export default function AddUsers(){
    return(
        <div className="add-user">
            <h2>
                Add User
            </h2>
            <input type="text" 
            className="border py-1 px-2 rounded-lg block mb-3" placeholder="Add New User"/>
            <button className="cursor-pointer py-1 px-2 rounded-lg bg-slate-200">Add User</button>
        </div>
    )
}