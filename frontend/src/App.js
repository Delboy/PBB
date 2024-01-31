import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {

  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname !== '/' ? <div style={{paddingTop: "4.5rem" }}></div> : null}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
