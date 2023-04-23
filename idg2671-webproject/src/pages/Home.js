import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Searchbar from "../components/Searchbar/Searchbar";
import Image from "../assets/img/3d-printer.jpeg";
import ListTools from "../components/List/ListTools";


let bookableToolsFromDB = [
  {
    "name": "3D Printer",
    "imgSrc": Image,
    "imgAlt": "",
    "course": "HMS"
  },
  {
    "name": "Laserkutter",
    "imgSrc": Image,
    "imgAlt": "",
    "course": "HMS"
  },
  {
    "name": "3D Printer 3",
    "imgSrc": Image,
    "imgAlt": "",
    "course": "HMS"
  }
]

function HomePage() {
  return (
    <div className="bg-grey-lighter min-h-screen">
      <section className="flex bg-blue-lighter py-20 px-28 mb-24">
        <div className="w-3/4">
          <h1 className="pt-4 md:text-3xl w-3/4 leading-6 pb-12">Welcome to NTNU Gjøviks official booking page of tools in Verkstedet! </h1>
          <p className="pb-6 w-3/5">The workshop is located at the Mustad builiding at NTNU Gjøvik, for students within the Faculty of Design. On this website you get an overview of all the tools available, where you have the option to book tools you want to use.</p>
          <p className="pb-14 w-3/5">To find the complete list of all tools as well as categories, click the button below, or scroll further down.</p>
          <div className="mb-14">
            <Button title="List of tools" />
          </div>
          {/* <div className="w-3/5">
            <Searchbar />
          </div> */}
        </div>
        <div className="flex items-center">
          <iframe width="330" height="370" frameBorder="0" scrolling="no" src="https://use.mazemap.com/embed.html#v=1&zlevel=1&center=10.675398,60.789690&zoom=17.4&campusid=55&sharepoitype=poi&sharepoi=1000460078&utm_medium=iframe" style={{ borderRadius: '10px', marginRight: '100px' }}></iframe>
        </div>
      </section>


      <div className="flex flex-col items-center pb-28">
        <h2 className="md:text-2xl mb-16">List of bookable tools</h2>
        <div className="flex justify-evenly pb-32">
          {bookableToolsFromDB.map((tool, index) => (
            <Card key={index} title={tool.title} imgSrc={tool.imgSrc} imgAlt={tool.imgAlt} course={tool.course} />
          ))}
        </div>
        <h2 className="md:text-2xl mb-14">List of all tools available</h2>
        <div className="pb-20 w-2/4">
          <Searchbar />
          <ListTools />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
