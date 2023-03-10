import DisplayTool from "../components/DisplayTool/DisplayTool";
// import Image from '../assets/img/3d-printer.jpeg'

function DisplayToolPage() {
    return (
      <div className="App">
        <DisplayTool 
            title="Laserkutter" 
            status="OK" 
            course="HMS" 
            imgSrc={Image} 
            imgAlt="" 
            description="Laserkutteren er et verkøty som kan gjøre mange ulike ting. 
                Du kan for eksempel kutte ut ulike ting i ulike meterialer. 
                Lorem ipsum, lorem lorem ipsum." 
        />
      </div>
    );
  }
  
 export default DisplayToolPage;