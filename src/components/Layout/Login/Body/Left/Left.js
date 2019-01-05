import React from "react";
import classes from './Left.module.css';
import Navimg from "../../../../../assets/navimg.png";

const left = () => {
  return (
    <div className={classes.Left}>
      <div className="pl-5 ml-5 mt-3" style={{ position: "relative" }}>
        <img
          src={Navimg}
          alt="im"
          className="h-75 w-75"
          style={{ opacity: "0.2", zIndex: "1" }}
        />
        <h2
          style={{
            zIndex: "20",
            position: "absolute",
            top: "45%",
            left: "15%",
            fontSize: "50px",
            color: "grey",
            fontWeight: "normal"
          }}
          className={classes.heading}
        >
          Code Box
        </h2>
      </div>
    </div>
  );
};

export default left;
