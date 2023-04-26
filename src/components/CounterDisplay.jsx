import {
  faCircleInfo,
  faGear,
  faMinus,
  faPlus,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counterSlice";

const CounterDisplay = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);
  const zero = 0
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const resetHandler = () => {
    dispatch(counterActions.reset());
  };
  const displaySettingsHandler = () => {
    dispatch(counterActions.displaySettings());
  };
  return (
    <div className="counterDisplay">
      <div className="settings">
        <FontAwesomeIcon icon={faCircleInfo} className="icon" />
        <FontAwesomeIcon
          icon={faGear}
          className="icon"
          onClick={displaySettingsHandler}
        />
        <FontAwesomeIcon
          icon={faRotateRight}
          className="icon"
          onClick={resetHandler}
        />
      </div>
      <h1 className="count">{value || zero}</h1>
      <div className="buttons">
        <button onClick={decrementHandler}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button onClick={incrementHandler}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default CounterDisplay;
