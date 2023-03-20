import Card from '../components/Card/Card';
import Image from '../assets/img/3d-printer.jpeg';

import Searchbar from '../components/Searchbar/Searchbar';
import Filter from '../components/Filter/Filter';
import ListBookedBy from '../components/List/ListBookedBy';
import ListTools from '../components/List/ListTools';
import ListMyBookings from '../components/List/ListMyBookings';
import ListToolsAdmin from '../components/List/ListToolsAdmin';

let jsonDataTools = {
  "title":"3D Printer",
  "imgSrc":Image,
  "imgAlt":"",
  "course":"HMS"
}

function ToolPage() {
    return (
      <>
        <div className="bg-grey-lighter min-h-screen">
          <Card 
            title={jsonDataTools["title"]}
            imgSrc={jsonDataTools["imgSrc"]}
            imgAlt={jsonDataTools["imgAlt"]} 
            course={jsonDataTools["course"]} 
          />

          <Searchbar />
          <ListTools />

          <Filter />
          <ListBookedBy />

          <ListMyBookings />

          <ListToolsAdmin />
        </div>
      </>
    );
  }
  
 export default ToolPage;