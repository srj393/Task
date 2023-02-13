import { BrowserRouter as Router , Route, Routes} from "react-router-dom";




import Home from "./components/home/Home";
import NavBar2 from "./components/home/navbar2/NavBar2";


function App() {
  return (
    <Router>

    
    <Routes>
      <Route path="/" element={<Home />} / > 
   
      
     
    </Routes>
   
  </Router>
  );
}

export default App;
