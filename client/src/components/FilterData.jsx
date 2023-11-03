import Sidebar from "./sidebar";
import Header from "./Header";
import Data from "./filterComp/Data";
import Footer from"./Footer";
function FilterData(){
    return(
        <div>
          <Header/>
          <Sidebar/>
          <Data/>
          <Footer />
        </div>
    )
}
export default FilterData;