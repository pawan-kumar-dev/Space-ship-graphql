import React from "react";
import ResultBox from "../ResultBox/ResultBox";

const Results = ({ filteredData }) => {
     return (
          <div style={{ width: "100%", maxWidth: "600px" }}>
               <h1 style={{ textAlign: "left", margin: "10px 0" }}>
                    TOTAL COUNT : {filteredData.length}
               </h1>
               {filteredData.map(({ name, home_port, image }) => {
                    return (
                         <ResultBox
                              key={name}
                              name={name}
                              homePort={home_port}
                              image={image}
                         />
                    );
               })}
          </div>
     );
};

export default Results;
