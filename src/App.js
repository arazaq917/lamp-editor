import './App.css';
import MainEditor from "./fabric-editor/tool-panels/fab-editor";
import React from "react";
import HeaderComponent from "./fabric-editor/Header/HeaderComponent";
import 'bootstrap/dist/css/bootstrap.min.css';

const App =()=>{
  return (
    <div className="App">
        <HeaderComponent/>
        <MainEditor/>
    </div>
  );
}

export default App;
