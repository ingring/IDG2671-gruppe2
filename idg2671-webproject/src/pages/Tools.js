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
    <div className="bg-grey-lighter min-h-screen p-20 flex flex-col items-center">
      <h1 className='text-3xl pb-32'>Tools overview</h1>
      <div className='flex flex-row justify-evenly mb-32'>
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
  );
}

export default ToolPage;