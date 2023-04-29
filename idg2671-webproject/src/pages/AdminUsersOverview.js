import AdminSubnav from "../components/Navbar/AdminSubnav";
import ListUsers from "../components/List/ListUsers";
import CreateUser from "../components/Form/CreateUser";

function AdminUsersOverview() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <div className="bg-blue-lighter flex flex-col items-center w-full">
        <div className="w-3/5 pt-16 pb-12 flex justify-left flex-col">
          <h1 className="text-3xl pb-8">Admin page</h1>
          <p className="pb-6 md:w-3/5">Here you can get an overview of all the active bookings, as well get an overview of all the tools and users in the workshop. On the different sub pages, you can also add, edit or delete tools and users. </p>
        </div>
      </div>
      <AdminSubnav />
      <div className="mt-24 flex flex-col items-center justify-center w-full">
          <div className="mb-24 w-3/5 md:w-1/5">
            <CreateUser />
          </div>
          <div className="mb-24 w-3/4 md:w-2/5">
            <h2 className="text-xl md:text-2xl mb-6">Users overview</h2>
            <ListUsers />
          </div>
        </div>
    </div>
  );
}

export default AdminUsersOverview;
