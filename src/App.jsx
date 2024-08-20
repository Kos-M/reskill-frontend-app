import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css'


import SinglePost from "./pages/SinglePost";
import Home from "./pages/Home";
import TopNavigation from "./components/TopNavigation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post" element={<SinglePost />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <div>
      <TopNavigation/>
      {/* <hr /> */}
      <Outlet />
    </div>
  );
}

export default App;
