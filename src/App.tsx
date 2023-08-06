import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import "./assets/styles/index.scss";
import Blogs from "./pages/blogs";
import Dashboard from "./pages/dashboard";
import MainLayout from "./layouts/main";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* <Route path="/" element={<MainLayout />}> */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/blogs"
          element={
            <MainLayout>
              <Blogs />
            </MainLayout>
          }
        />
        {/* </Route> */}
      </Routes>
    </AnimatePresence>
  );
};

export default App;
