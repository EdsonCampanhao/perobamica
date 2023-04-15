import {  Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import BedRoom from "pages/BedRoom.jsx";
import BathRoom from "pages/BathRoom.jsx";
import LivingRoom from "pages/LivingRoom.jsx";
import Kitchen from "pages/Kitchen.jsx";
import Budget from "pages/Budget.jsx";

const App = () => {
return (
 
    <Routes>
      
      <Route path={"/"} element={<Home />} />
      <Route path="Orçamento" element={<Budget/>}/>


      <Route path="/livingRoom" element={<LivingRoom />} />
      <Route path="/bedroom" element={<BedRoom/>} />
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/bathroom" element={<BathRoom/>} />
      <Route path="*" element={<h1>achei nao</h1>} />
    </Routes>
  
)
}
export default App;