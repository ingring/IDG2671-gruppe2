import React from "react";
import { Route, Routes } from "react-router-dom";
import ListToolsAdmin from "../components/List/ListToolsAdmin";
import ListBrokenTools from "../components/List/ListBrokenTools";
import ListRequestedTool from "../components/List/ListRequestedTool";
import CreateTool from "../components/Form/CreateTool";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import ModifyTool from "../components/Form/ModifyTool"

function Lists() {
    return (
        <>
        <div className="mb-24 w-3/4 md:w-2/5">
            <div className="flex justify-between">
                <h2 className="text-xl md:text-2xl mb-6">Tools overview</h2> 
                <Button to='/admin/toolsOverview/createTool' title='Add tool' />  
            </div>
            <ListToolsAdmin />
            <p className="text-sm mt-2">* Notice, bookable tools are in bold</p>
          </div>
          <div className="mb-24 w-3/4 md:w-2/5">
            <h2 className="text-xl md:text-2xl mb-6">Tools reported broken</h2>
            <ListBrokenTools />
          </div>
          <div className="mb-24 w-3/4 md:w-2/5">
            <h2 className="text-xl md:text-2xl mb-6">Requested new tools</h2>
            <ListRequestedTool />
          </div>
        </>
    )
}

function CreateToolForm() {
    return(
        <div className="mb-32 w-3/5 md:w-1/5">
            <h1 className="text-xl md:text-2xl text-left mb-10">
                Create tool
            </h1>
            <CreateTool />
        </div>
    )
}


function AdminSubpages() {
  return (
    <Routes path="/">
      <Route index element={<Lists />} />
      <Route exact path="createTool" element={<CreateToolForm />} />
      <Route exact path="modifyTool/:id" element={<ModifyTool fullUrl='api/tools' />} />
      <Route exact path="modifyBookableTool/:id" element={<ModifyTool fullUrl='api/bookable_tools' />} />
    </Routes>
  );
}

export default AdminSubpages;