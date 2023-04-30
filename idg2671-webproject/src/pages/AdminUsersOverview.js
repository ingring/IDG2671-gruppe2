import AdminSubnav from "../components/Navbar/AdminSubnav";
import ListUsers from "../components/List/ListUsers";
import CreateUser from "../components/Form/CreateUser";

function AdminUsersOverview() {
  return (
      <div className="mt-24 flex flex-col items-center justify-center w-full">
          <div className="mb-24 w-3/5 md:w-1/5">
            <CreateUser />
          </div>
          <div className="mb-24 w-3/4 md:w-2/5">
            <h2 className="text-xl md:text-2xl mb-6">Users overview</h2>
            <ListUsers />
          </div>
        </div>
  );
}

export default AdminUsersOverview;
