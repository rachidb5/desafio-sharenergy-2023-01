import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../pages/Main";
import Cat from "../pages/Cat";
import Dog from "../pages/Dog";
import Clients from "../pages/Clients";

const MainRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/clientes" element={<Clients />} />
      </Routes>
  );
};

export default MainRoutes;
