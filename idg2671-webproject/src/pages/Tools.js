import Card from '../components/Card/Card';
import Searchbar from '../components/Searchbar/Searchbar';
import Filter from '../components/Filter/Filter';
import List from '../components/List/List'

function ToolPage() {
    return (
      <>
        <div className="bg-grey-lighter min-h-screen">
          <Card />

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