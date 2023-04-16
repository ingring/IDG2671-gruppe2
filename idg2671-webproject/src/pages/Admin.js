import Filter from "../components/Filter/Filter";
import ListBookedBy from "../components/List/ListBookedBy";
import ListToolsAdmin from "../components/List/ListToolsAdmin";
import ListUsers from "../components/List/ListUsers";
import ListBrokenTools from "../components/List/ListBrokenTools";
import Subnav from "../components/Navbar/Subnav";
import CreateTool from "../components/Form/CreateTool";

function AdminPage() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <Subnav />
      <h1 className="text-3xl p-20">Admin page</h1>
      <div className="flex flex-col items-center">
        <div className="w-2/4">
          <CreateTool />
        </div>
        {/* Her er alle liste komponentene med dummy data som skal innunder admin, dette må
                struktureres på en god og effektiv måte slik at vi oppnår det resultatet 
                vi ønsker => en liste per subheader */}
        {/* Anyways, her finner vi de foreløpig */}

        <div className="w-2/4">
          {/* Booking */}
          <Filter />
          <ListBookedBy />

          {/* Users */}
          <ListUsers />

          {/* Tools */}
          <ListToolsAdmin />

          {/* Broken tools */}
          <ListBrokenTools />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
