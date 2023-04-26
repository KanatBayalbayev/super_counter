import React from "react";
import CounterDisplay from "./components/CounterDisplay";
import "./app.scss";
import CounterSettings from "./components/CounterSettings";
import { useSelector } from "react-redux";

const App = () => {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  console.log(isDarkMode);
  return (
    <div className={`body ${isDarkMode && "darkMode"}`}>
      <div className={`main-container ${isDarkMode && "white"} `}>
        <CounterDisplay />
        <CounterSettings />
      </div>
    </div>
  );
};

export default App;
