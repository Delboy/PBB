import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {

  const location = useLocation();

  console.log(location.pathname)

  return (
    <>
      <Header />
      {location.pathname !== '/' ? <div style={{paddingTop: "4rem"}}></div> : null}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
