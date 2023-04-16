import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Searchbar from "../components/Searchbar/Searchbar";
import Image from "../assets/img/3d-printer.jpeg"
import ListTools from "../components/List/ListTools";


let bookableToolsFromDB = [
  {
    "title": "3D Printer",
    "imgSrc": Image,
    "imgAlt": "",
    "course": "HMS"
  },
  {
    "title": "Laserkutter",
    "imgSrc": Image,
    "imgAlt": "",
    "course": "HMS"
  },
  {
    "title": "3D Printer 2",
    "imgSrc": Image,
    "imgAlt": "",
    "course": "HMS"
  },
  {
    "title": "3D Printer 2",
    "imgSrc": Image,
    "imgAlt": "",
    "course": "HMS"
  }
]

function HomePage() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <section className="bg-blue-lighter p-20 mb-24">
        <h1 className="pt-4 md:text-3xl w-2/4 leading-6 pb-12">Welcome to NTNU Gjøviks official booking page of tools in Verkstedet! </h1>
        <p className="pb-12 w-2/5">We have many different tools available. To find the complete list of tools as well as categories click the button below, or use the search menu to search for a tool.</p>
        <div className="mb-12">
          <Button title="List of tools" className="pb-12" />
        </div>
        <Searchbar />
      </section>


      <div className="flex flex-col items-center mx-40 pb-28">
        <h2 className="md:text-2xl mb-14">Book a tool</h2>
        <div className="flex justify-evenly pb-28">
          {bookableToolsFromDB.map((tool, index) => (
            <Card key={index} title={tool.title} imgSrc={tool.imgSrc} imgAlt={tool.imgAlt} course={tool.course} />
          ))}
        </div>
        <h2 className="md:text-2xl mb-14">List of tools</h2>
        <div className="pb-20 w-2/4">
          <ListTools />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
