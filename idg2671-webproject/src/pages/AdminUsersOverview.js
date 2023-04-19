import AdminSubnav from "../components/Navbar/AdminSubnav";
import ListUsers from "../components/List/ListUsers";
import CreateUser from "../components/Form/CreateUser";

function AdminUsersOverview() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <AdminSubnav />
      <div className="flex flex-col items-center justify-center p-20">
      <h1 className="text-3xl pb-8">Users overview</h1>
        <p className="w-2/4 text-center">Here is an overview of all users that have access to the booking-system. You can edit, delete or create a new user for the application.</p>
        <div className="mt-14 w-2/4">
          <div className="mb-20">
            <CreateUser />
          </div>
          <div className="">
          <h2 className="text-2xl mb-6">Users overview</h2>
            <ListUsers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUsersOverview;
