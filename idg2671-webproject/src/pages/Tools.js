import Card from '../components/Card/Card';
import Searchbar from '../components/Searchbar/Searchbar';
import Filter from '../components/Filter/Filter';
import List from '../components/List/List'
import Image from '../assets/img/3d-printer.jpeg';

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
          <List />
          <br /><br />
          <Filter />
          <List />
        </div>
      </>
    );
  }
  
 export default ToolPage;