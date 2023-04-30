import React from "react";
import { Route, Routes } from "react-router-dom";
import ListToolsAdmin from "../components/List/ListToolsAdmin";
import ListBrokenTools from "../components/List/ListBrokenTools";
import CreateTool from "../components/Form/CreateTool";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

function Lists() {
    return (
        <>
        <div className="mb-24 w-3/4 md:w-2/5">
            <div className="flex justify-between">
            <h2 className="text-xl md:text-2xl mb-6">Tools overview</h2> 
            <Button to='/admin/toolsOverview/createTool'title='Add a tool' />  
            </div>
            <Link to="/admin/toolsOverview/createTool">Add a tool</Link>
            <ListToolsAdmin />
          </div>
          <div className="mb-24 w-3/4 md:w-2/5">
            <h2 className="text-xl md:text-2xl mb-6">Tools reported broken</h2>
            <ListBrokenTools />
          </div>
          <div className="mb-24 w-3/4 md:w-2/5">
            <h2 className="text-xl md:text-2xl mb-6">Requested new tools</h2>
            <ListBrokenTools />
          </div>
        </>
    )
}

function CreateToolForm() {
    return(
        <div className="mb-24 w-3/5 md:w-1/5">
            <h1 className="text-xl md:text-2xl text-left mb-10">
                Create / Modify tool
            </h1>
            <CreateTool url='/api/users' />
        </div>
    )
}

function AdminSubpages() {
  return (
    <Routes path="/">
      <Route index element={<Lists />} />
      <Route path="createTool" element={<CreateToolForm />} />
      <Route path="modifyTool/:id" element={<CreateToolForm />} />
    </Routes>
  );
}

export default AdminSubpages;