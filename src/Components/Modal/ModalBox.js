import React from "react";
import "./ModalBox.css";
import Modal from "react-modal";
const ModalBox = ({ open, setOpen, name, homePort, image }) => {
     return (
          <Modal
               ariaHideApp={false}
               isOpen={open}
               onRequestClose={() => setOpen(false)}
               style={{
                    overlay: {
                         display: "flex",
                         justifyContent: "center",
                         alignItems: "center",
                         backgroundColor: "rgba(0,0,0,0.5)",
                    },
                    content: {
                         width: "100%",
                         maxWidth: "500px",
                         height: "430px",
                         margin: "0 auto",
                         backgroundColor: "#00171f",
                    },
               }}
          >
               <div className="resultBoxModal">
                    <img src={image} alt={name} />
                    <div>
                         <p>
                              <strong>{name.toUpperCase()}</strong>
                         </p>
                         <p>
                              <strong>PORT</strong> : {homePort}
                         </p>
                    </div>
                    <button
                         onClick={() => setOpen(false)}
                         style={{
                              cursor: "pointer",
                              backgroundColor: "white",
                              color: "black",
                              outline: "none",
                         }}
                    >
                         Close
                    </button>
               </div>
          </Modal>
     );
};

export default ModalBox;
