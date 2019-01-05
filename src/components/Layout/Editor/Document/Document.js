import React, { Component } from "react";
import { Consumer } from "../../../../Context";
import classes from "./Document.module.css";

class Document extends Component {
  makeActive = (id, dispatch) => {
    dispatch({ type: "MAKE_ACTIVE", payload: id });
  };
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <span
                className={classes.document}
                onClick={this.makeActive.bind(
                  this,
                  this.props.no,
                  value.dispatch
                )}
              >
                Document {this.props.no}
              </span>  
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Document;
