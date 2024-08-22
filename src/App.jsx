import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css'


import SinglePost from "./pages/SinglePost";
import Home from "./pages/Home";
import TopNavigation from "./components/TopNavigation";
import Footer from './components/Footer'

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
    <div className="relative h-screen">
      <TopNavigation />
      
      <main className="mb-16"> {/* pb-16 to avoid overlapping footer */}
        <Outlet />
      </main>
     
      <Footer />
    </div>
  );
}

export default App;
