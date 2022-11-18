import React from "react";
import Header from "./components/Header";
// import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";

// import App.css 
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}
export default App;
