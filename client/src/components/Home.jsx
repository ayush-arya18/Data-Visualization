import Sidebar from "./sidebar";
import Header from "./Header";
import Data from "./Data";
import Footer from"./Footer";
function Home(){
    return(
        <div>
          <Header/>
          <Sidebar/>
          <Data/>
          <Footer />
        </div>
    )
}
export default Home;