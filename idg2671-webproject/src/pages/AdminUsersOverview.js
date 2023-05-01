import AdminSubnav from "../components/Navbar/AdminSubnav";
import ListUsers from "../components/List/ListUsers";
import CreateUser from "../components/Form/CreateUser";
import { Outlet } from "react-router-dom";

function AdminUsersOverview() {
  return (
      <div className="mt-24 flex flex-col items-center justify-center w-full">
        <Outlet />
      </div>
  );
}

export default AdminUsersOverview;
