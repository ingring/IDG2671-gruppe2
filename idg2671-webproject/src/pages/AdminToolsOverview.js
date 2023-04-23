import AdminSubnav from "../components/Navbar/AdminSubnav";
import ListToolsAdmin from "../components/List/ListToolsAdmin";
import ListBrokenTools from "../components/List/ListBrokenTools";
import CreateTool from "../components/Form/CreateTool";

function AdminToolsOverview() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <AdminSubnav />
      <div className="flex flex-col items-center justify-center pt-20">
      <h1 className="text-3xl pb-8">Tools overview</h1>
        <p className="w-2/5 text-center">Here you can create a new tool for Verkstedet. You can also edit or delete an existing tool. If a tool is reported broken, this will also be visible at this page.</p>
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
