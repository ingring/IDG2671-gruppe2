import AdminSubnav from "../components/Navbar/AdminSubnav";
import ListUsers from "../components/List/ListUsers";
import CreateUser from "../components/Form/CreateUser";

function AdminUsersOverview() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <AdminSubnav />
      <div className="flex flex-col items-center justify-center p-20">
        <h1 className="text-3xl pb-20">Users overview</h1>
        <div className="w-2/4">
          <div className="mb-20">
            <CreateUser />
          </div>
          <div className="">
            <ListUsers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUsersOverview;
