import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Toggler.css";
const Toggler = () => {
     const dispatch = useDispatch();
     const states = useSelector((state) => {
          return state;
     });
     const { dark } = states;
     return (
          <div>
               <div
                    className="toggle-container"
                    onClick={() =>
                         dispatch({
                              type: "TOGGLE_MODE",
                              item: !dark.dark,
                         })
                    }
               >
                    <div
                         className={`dialog-button ${
                              dark.dark ? "" : "disabled"
                         }`}
                    >
                         {dark.dark ? "DARK" : "LIGHT"}
                    </div>
               </div>
          </div>
     );
};

export default Toggler;
