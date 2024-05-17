import { AllRoutes } from './AllRoutes';
import './App.css';
import {Navbar} from "./Components/Navbar";
import {Slider1} from "./Components/Slider1";
import {Footer1} from "./Pages/Footer1";
// import {} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Slider1/>
      <Navbar/>
      <AllRoutes/>
      <Footer1/>
    </div>
  );
}

export default App;
