import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Destination from "./Components/Destination/Destination";
import Crew from "./Components/Crew/Crew";
import Technology from "./Components/Technology/Technology";
// import DestinationProps from "./Components/PropsPages/DestinationProps/DestinationProps";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          {/* <Route path="/destination/moon" element={<DestinationProps />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
