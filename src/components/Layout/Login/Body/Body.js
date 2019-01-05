import React from "react";
import Left from "./Left/Left";
import Right from "./Right/Right";

const body = () => {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-sm-6">
          <Left />
        </div>
        <div className="col-sm-6 border-left py-4">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default body;
