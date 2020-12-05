import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { masterReducer } from "./Redux/combineReducer";
const rootElement = document.getElementById("root");

// creating a store
const store = createStore(masterReducer);
ReactDOM.render(
     <React.StrictMode>
          <Provider store={store}>
               <App />
          </Provider>
     </React.StrictMode>,
     rootElement
);
