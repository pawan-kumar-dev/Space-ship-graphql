import React from "react";
import searchImg from "../../assets/searchImg.png";
import { useDispatch, useSelector } from "react-redux";
import "./Input.css";
const Input = () => {
     const dispatch = useDispatch();
     const states = useSelector((state) => {
          return state;
     });
     const { search } = states;
     return (
          <div className="input">
               <input
                    type="text"
                    value={search.search}
                    placeholder="Search Ships"
                    onChange={(e) =>
                         dispatch({
                              type: "SEARCH",
                              item: e.target.value.toLowerCase(),
                         })
                    }
               />
               <img src={searchImg} alt="search" />
          </div>
     );
};

export default Input;
