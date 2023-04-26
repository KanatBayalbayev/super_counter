import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counterSlice";

const CounterSettings = () => {
  const dispatch = useDispatch();
  const visibility = useSelector((state) => state.isSettingsDisplayed);
  const value = useSelector((state) => state.value);
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const setCountHandler = (event) => {
    dispatch(counterActions.setCount(event.target.value));
  };
  const darkModeToggle = (event) => {
    dispatch(counterActions.setDarkMode(event.target.checked));
  };
  return (
    <>
      {visibility && (
        <div className="counterSettings">
          <h1 className="name">Settings</h1>
          <div className="settings-container">
            <div className="div1">
              <label htmlFor="count">Set count =</label>
              <input
                type="number"
                id="count"
                value={value}
                maxLength={2}
                onInput={setCountHandler}
              />
            </div>
            <div className="div2">
              <div className="switchToogle">
                <label htmlFor="">Limits OFF/ON </label>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="max">
                <label htmlFor="maximum">Maximum = </label>
                <input type="number" id="maximum" />
              </div>
            </div>
            <div className="div3">
              <label htmlFor="theme" className="theme">
                <span className="theme__toggle-wrap">
                  <input
                    id="theme"
                    className="theme__toggle"
                    type="checkbox"
                    role="switch"
                    name="theme"
                    value={isDarkMode}
                    onClick={darkModeToggle}
                  />
                  <span className="theme__fill"></span>
                  <span className="theme__icon">
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CounterSettings;
