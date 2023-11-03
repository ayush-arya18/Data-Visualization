import FilterData from './components/FilterData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";


function App(){
  return(
    <Router>
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/filters' element={<FilterData/>} />
      </Routes>
    </Router>
  );
}
export default App;