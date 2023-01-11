import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../pages/Main";
import Cat from "../pages/Cat";

const MainRoutes = () => {
  return (
    <div class="flex min-h-full items-center bg-gray-800 justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/cat" element={<Cat />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
