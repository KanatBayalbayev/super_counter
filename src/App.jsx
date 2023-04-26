import React from "react";
import CounterDisplay from "./components/CounterDisplay";
import "./app.scss";
import CounterSettings from "./components/CounterSettings";

const App = () => {
  return (
    <div className="main-container">
      <CounterDisplay />
      <CounterSettings/>
    </div>
  );
};

export default App;
