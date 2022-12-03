import React, { useState, useReducer, useContext } from "react";
import reducer from "./reducer";
import { DISPLAY_POPUP,CLEAR_POPUP } from "./actions";
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  showPopup:""
};
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayPopup = () => {
    dispatch({
      type: DISPLAY_POPUP,
    });
  };

  const clearPopup = () => {
    dispatch({
      type: CLEAR_POPUP,
    });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayPopup,
        clearPopup
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
const useAppContext = () => {
  return useContext(AppContext);
};
export { AppProvider, initialState, useAppContext };
