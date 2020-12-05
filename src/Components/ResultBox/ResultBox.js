import React, { useState } from "react";
import ModalBox from "../Modal/ModalBox";
import "./ResultBox.css";
const ResultBox = ({ name, homePort, image }) => {
     const [open, setOpen] = useState(false);
     return (
          <abbr title="Click Here">
               <ModalBox
                    open={open}
                    setOpen={setOpen}
                    name={name}
                    homePort={homePort}
                    image={image}
               />
               <div className="resultBox" onClick={() => setOpen(true)}>
                    <img src={image} alt={name} />
                    <div>
                         <p className="resultBox__name">
                              <strong>{name.toUpperCase()}</strong>
                         </p>
                         <p className="resultBox__port">
                              <strong>PORT</strong> : {homePort}
                         </p>
                    </div>
               </div>
          </abbr>
     );
};

export default ResultBox;
