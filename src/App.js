import React, { useEffect, useState } from "react";
import "./styles.css";
import gql from "graphql-tag";
import request from "./utils/request";
import { useDispatch, useSelector } from "react-redux";

import Input from "./Components/Input/Input";
import Header from "./Components/Header/Header";
import Results from "./Components/Results/Results";
import Loading from "./Components/Loader/Loading";
export default function App() {
     const [loader, setLoader] = useState(true);
     const states = useSelector((state) => {
          return state;
     });
     const dispatch = useDispatch();
     const { search, dark } = states;
     let [filtered, setFiltered] = useState([]);
     const fetchShips = async () => {
          const response = await request(gql`
               {
                    ships {
                         name
                         home_port
                         image
                    }
               }
          `);
          dispatch({ type: "FETCH_DATA", item: response?.data.ships });
          setLoader(false);
          setFiltered(response?.data.ships);
     };

     useEffect(() => {
          fetchShips();
     }, []);

     filtered = filtered.filter(({ name }) => {
          return name.toLowerCase().includes(search.search);
     });
     return (
          <>
               {!loader ? (
                    <div className={`app ${!dark.dark && "light"} `}>
                         <div className="main">
                              <Header />
                              <Input />
                              <Results filteredData={filtered} />
                         </div>
                    </div>
               ) : (
                    <Loading />
               )}
          </>
     );
}
