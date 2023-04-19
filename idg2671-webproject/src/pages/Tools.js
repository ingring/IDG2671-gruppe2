import Card from '../components/Card/Card';
import Image from '../assets/img/3d-printer.jpeg';

import Searchbar from '../components/Searchbar/Searchbar';
import ListTools from '../components/List/ListTools';

let jsonDataTools = {
  "title": "3D Printer",
  "imgSrc": Image,
  "imgAlt": "",
  "course": "HMS"
}

function ToolPage() {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col items-center">
      <div className="bg-blue-lighter py-14 mb-20 flex flex-col items-center">
        <div className='w-3/5 flex justify-left flex-col'>
          <h1 className="text-3xl pb-12">Tools overview</h1>
          <p className="w-3/5">There are many different tools at Verkstedet. Some tools are bookable, while the more small tools are not bookable and available at any time. Here you will find an overview of all the tools available at Verkstedet, both bookable and unbookable.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-3/5">
        <div className='flex flex-row justify-between mb-32'>
          <Card
            title={jsonDataTools["title"]}
            imgSrc={jsonDataTools["imgSrc"]}
            imgAlt={jsonDataTools["imgAlt"]}
            course={jsonDataTools["course"]}
          />
          <Card
            title={jsonDataTools["title"]}
            imgSrc={jsonDataTools["imgSrc"]}
            imgAlt={jsonDataTools["imgAlt"]}
            course={jsonDataTools["course"]}
          />
          <Card
            title={jsonDataTools["title"]}
            imgSrc={jsonDataTools["imgSrc"]}
            imgAlt={jsonDataTools["imgAlt"]}
            course={jsonDataTools["course"]}
          />
        </div>

        <div className='w-2/4'>
          <Searchbar />
          <ListTools />
        </div>

      </div>
    </div>
  );
}

export default ToolPage;