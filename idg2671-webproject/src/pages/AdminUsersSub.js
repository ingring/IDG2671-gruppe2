import React from "react";
import { Route, Routes } from "react-router-dom";
import ListUsers from "../components/List/ListUsers";
import CreateUser from "../components/Form/CreateUser";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
// import ModifyUser from "../components/Form/ModifyUser"

function Lists() {
    return (
        <>
        <div className="mb-24 w-3/4 md:w-2/5">
            <div className="flex justify-between">
                <h2 className="text-xl md:text-2xl mb-6">Users overview</h2>
                <Button to='/admin/usersOverview/createUser' title='Add user' />  
            </div>
            <ListUsers />
        </div>
        </>
    )
}

function CreateUserForm() {
    return(
        <div className="mb-24 w-3/5 md:w-1/5">
            <h1 className="text-xl md:text-2xl text-left mb-10">
                Create User
            </h1>
            <CreateUser />
        </div>
    )
}

function ModifyUserForm() {
    return(
        <div className="mb-24 w-3/5 md:w-1/5">
            <h1 className="text-xl md:text-2xl text-left mb-10">
                Modify User
            </h1>
            {/* When we have a modify user, change this to that component */}
            <CreateUser /> 
        </div>
    )
}


function AdminUsersSub() {
  return (
    <Routes path="/">
      <Route index element={<Lists />} />
      <Route exact path="createUser" element={<CreateUserForm />} />
      <Route exact path="modifyUser/:id" element={<ModifyUserForm fullUrl='api/tools' />} />
    </Routes>
  );
}

export default AdminUsersSub;