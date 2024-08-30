import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import SinglePost from "./pages/SinglePost";
import Home from "./pages/Home";
import TopNavigation from "./components/TopNavigation";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post" element={<SinglePost />} />
          <Route path="/404" exact element={<NotFound />} />
        </Route>
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <div className="flex flex-col z-10 ">
      <TopNavigation className="w-full flex items-center justify-between px-4 lg:px-20 py-10   md:py-[55px]" />
      <main className="">
        <Outlet />
      </main>
      <Footer className="w-full h-[264px]" />
    </div>
  );
}

export default App;
