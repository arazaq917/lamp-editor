import './App.css';
import MainEditor from "./fabric-editor/tool-panels/fab-editor";
import React from "react";
import HeaderComponent from "./fabric-editor/Header/HeaderComponent";
const App =()=>{
  return (
    <div className="App">
        <HeaderComponent/>
        <MainEditor/>
    </div>
  );
}

export default App;
