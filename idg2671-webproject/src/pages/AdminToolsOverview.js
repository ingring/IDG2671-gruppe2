import ListToolsAdmin from "../components/List/ListToolsAdmin";
import ListBrokenTools from "../components/List/ListBrokenTools";
import CreateTool from "../components/Form/CreateTool";
import { Outlet, Link } from "react-router-dom";
import Button from "../components/Button/Button";

function AdminToolsOverview() {
  return (
      <div className="mt-24 flex flex-col items-center justify-center w-full">
        {/* <Button to='/admin/toolsOverview/createTool'title='Add a tool' /> */}
        <Outlet />
      </div>
  );
}

export default AdminToolsOverview;
