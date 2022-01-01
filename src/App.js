import React from "react";
import './App.css';
import Main from "./components/Main";
import StoreContext from "./store/StoreContext";
import Forms from "./store/Forms";

function App() {
  return (
    <StoreContext.Provider  value={Forms}>
      <Main />
    </StoreContext.Provider>
  );
}

export default App;
