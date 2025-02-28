import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import { ContactUs, Personal, Proffesional } from "./Components/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ErrPage from "./Components/ErrPage";

const App = () => {
  return (
    <div>
      <center>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login/:name" element={<Login />} />
            {/* <Route path="/contact" element={<ContactUs />} /> */}

            <Route exact path="/contact" element={<ContactUs />}>
              <Route path="personal" element={<Personal />} />
              <Route path="Proffesional" element={<Proffesional />} />
            </Route>
            <Route path="*" element={<ErrPage />} />
          </Routes>
        </BrowserRouter>
      </center>
    </div>
  );
};

export default App;
