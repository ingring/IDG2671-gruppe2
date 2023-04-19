import AdminSubnav from "../components/Navbar/AdminSubnav";
import ListToolsAdmin from "../components/List/ListToolsAdmin";
import ListBrokenTools from "../components/List/ListBrokenTools";
import CreateTool from "../components/Form/CreateTool";

function AdminToolsOverview() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <AdminSubnav />
      <div className="flex flex-col items-center justify-center p-20">
        <h1 className="text-3xl pb-20">Tools overview</h1>
        <div className="w-2/4">
          <div className="mb-20">
            <CreateTool />
          </div>
          <div className="">
            <ListToolsAdmin />
          </div>
          <div className="mb-32">
            <ListBrokenTools />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminToolsOverview;
