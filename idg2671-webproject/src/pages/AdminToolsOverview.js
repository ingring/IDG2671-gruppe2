import Subnav from "../components/Navbar/Subnav";
import ListToolsAdmin from "../components/List/ListToolsAdmin";
import ListBrokenTools from "../components/List/ListBrokenTools";
import CreateTool from "../components/Form/CreateTool";

function AdminToolsOverview() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <Subnav />
      <p>Her skal vi ha: form med add tool når man trykker + add tool knappen, list with all tools som man kan edite/slette - edite = samme form, en liste med tools som er markert broken fra db</p>
      <h1 className="text-3xl p-20">Tools overview</h1>
      <div className="flex flex-col items-center">
        <div className="w-2/4">
          <div className="mb-20">
            <CreateTool />
          </div>
          <div className="mb-24">
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
