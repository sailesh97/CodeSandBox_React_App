import React from "react";
import classes from "./Right.module.css";

const right = () => {
  return (
    <div className={classes.Right}>
      <div className="p-3 pr-5">
        <h1 className="text-white mb-4 pb-2 display-5 font-weight-normal">
          Lorem ipsum
        </h1>
        <p className="text-white mb-4 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, neque
          aperiam impedit a est dolores at, voluptate quae quas ab, iusto saepe.
          Ipsam cum repellendus hic qui voluptate
        </p>
        <p className="text-white mb-4 text-justify">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s Lorem Ipsum
        </p>
        <p className="text-white mb-4 text-justify">
          With the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus
          PageMaker including versions of
        </p>
        <p className="text-white mb-5 text-justify">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <button className={classes.lorem}>Lorem Ipsum</button>
      </div>
    </div>
  );
};

export default right;
