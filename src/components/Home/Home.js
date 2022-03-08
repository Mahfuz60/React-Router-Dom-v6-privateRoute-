import React from "react";
import { Outlet } from "react-router-dom";

import background from "../../images/background.jpg";
const Home = () => {
  return (
    <div>
      <h1>HomePage Here Now</h1>
      <Outlet />
      <img src={background} alt="" />
    </div>
  );
};

export default Home;
