import DisplayTool from "../components/DisplayTool/DisplayTool";
import Image from '../assets/img/3d-printer.jpeg';

// Parsing the data with JSON.parse since we get a long piece of text when receiving 
// some JSON data from an API or from a file
// let jsonData = JSON.parse(jsonString)

let jsonData = {
    "title":"Laserkutter",
    "status":"OK",
    "course":"HMS",
    "imgSrc":Image,
    "imgAlt":"",
    "description":"Laserkutteren er et verkøty som kan gjøre mange ulike ting. Du kan for eksempel kutte ut ulike ting i ulike meterialer. Lorem ipsum, lorem lorem ipsum."
}

function ToolPage() {
    return (
      <div className="bg-grey-lighter min-h-screen p-20">
        <DisplayTool 
            title={jsonData["title"]}
            status={jsonData["status"]}
            course={jsonData["course"]} 
            imgSrc={jsonData["imgSrc"]}
            imgAlt={jsonData["imgAlt"]} 
            description={jsonData["description"]}
        />
      </div>
    );
  }
  
 export default ToolPage;