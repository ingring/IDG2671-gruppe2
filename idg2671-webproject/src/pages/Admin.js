import Filter from "../components/Filter/Filter";
import ListBookedBy from "../components/List/ListBookedBy";
import ListToolsAdmin from "../components/List/ListToolsAdmin";
import ListUsers from "../components/List/ListUsers";
import ListBrokenTools from "../components/List/ListBrokenTools";
import Subnav from "../components/Navbar/Subnav";


function AdminPage() {
  return (
    <>
      <Subnav />
      <div className="bg-grey-lighter min-h-screen">
        <h1 className="pt-4">Dette er admin pagen!</h1>

        <CreateTool />

        {/* Her er alle liste komponentene med dummy data som skal innunder admin, dette må
                struktureres på en god og effektiv måte slik at vi oppnår det resultatet 
                vi ønsker => en liste per subheader */}
        {/* Anyways, her finner vi de foreløpig */}

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
    </>
  );
}

export default AdminPage;
