import AdminSubnav from "../components/Navbar/AdminSubnav";
import ListToolsAdmin from "../components/List/ListToolsAdmin";
import ListBrokenTools from "../components/List/ListBrokenTools";
import CreateTool from "../components/Form/CreateTool";

function AdminToolsOverview() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <div className="bg-blue-lighter flex flex-col items-center w-full">
        <div className="w-3/5 pt-16 pb-12 flex justify-left flex-col">
          <h1 className="text-3xl pb-8">Admin page</h1>
          <p className="pb-6 md:w-3/5">Here you can get an overview of all the active bookings, as well get an overview of all the tools and users in the workshop. On the different sub pages, you can also add, edit or delete tools and users.</p>        </div>
      </div>
      <AdminSubnav />
      <div className="flex flex-col items-center justify-center">
        <div className="mt-14 w-2/4">
          <div className="mb-20">
            <CreateTool />
          </div>
          <div className="">
            <h2 className="text-2xl mb-6">Tools overview</h2>
            <ListToolsAdmin />
          </div>
          <div className="mb-32">
            <h2 className="text-2xl mb-6">Tools reported broken</h2>
            <ListBrokenTools />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminToolsOverview;
