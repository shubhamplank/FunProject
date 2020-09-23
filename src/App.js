import React from "react";
import "./App.css";
import Layout from "./Component/Layout";
import Data from './Component/axios';


function App() {
  return (
    <div className="App">
      <Layout />
      <Data />
    </div>
  );
}

export default App;


