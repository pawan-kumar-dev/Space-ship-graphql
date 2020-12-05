import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
     return (
          <div
               style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#00171f",
               }}
          >
               <Loader
                    type="Circles"
                    color="#1ac9e8"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
               />
          </div>
     );
};
export default Loading;
