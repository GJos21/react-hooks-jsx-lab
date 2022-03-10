import React from "react";
import { name, city } from "../data/data.js";

const style = {
  color: 'firebrick'
}

function Home() {
  return (
    <div id="home">
      <h1 style={style}>Your {name} is a Web Developer from Your {city}</h1>
    </div>
  );
}

export default Home;
