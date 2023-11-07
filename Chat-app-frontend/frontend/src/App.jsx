import { useState } from "react";
import './App.css'
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import ChatArea from "./components/ChatArea/ChatArea";

function App() {
  return (
    <>


<ChatArea/>

      {/* <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/login" element={<Login />}>
            {" "}
          </Route>
          <Route path="/register" element={<Register />}>
            {" "}
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter> */}
    </>
  );
}

export default App;
