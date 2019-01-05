import React, { Component } from "react";
import { Consumer } from "../../../Context";
import classes from "./Editor.module.css";
import Document from "./Document/Document";

class Editor extends Component {
  addNew = (dispatch, id) => {
    dispatch({ type: "ADD_NEW", payload: id });
  };
  loadContent = (dispatch,event) => {
      console.log(event.target.value);
      dispatch({ type: "LOAD_CONTENT", payload: event.target.value});
  }
  saveFile = (dispatch) => {
    dispatch({ type: "SAVE_FILE"})
  }
  editFile = (dispatch) => {
      dispatch({type: "EDIT_FILE"});
  }
  deleteFile = (dispatch) => {
      dispatch({type:"DELETE_FILE"});
  }
  
  render() {
    let count = 0;

    return (
      <Consumer>
        {value => {

          return (
            <React.Fragment>
              <div className={classes.editor}>
                <div className="row px-2">
                  <div className="col-sm-2 h-100 pt-3 pr-5 pl-4  ">
                    <div>
                      <div className="border-bottom border-secondary px-3 mb-4">
                        <p className="text-white">List Of Files</p>
                      </div>
                      <div className="w-100">
                        {value.documents2.map(doc => {
                          count = count + 1;
                          return (
                            <Document
                              key={doc.id}
                              no={doc.id}
                              content={doc.fileContent}
                            />
                          );
                        })}
                      </div>
                      <button
                        className={classes.border}
                        onClick={this.addNew.bind(
                          this,
                          value.dispatch,
                          value.lastFileNo2
                        )}
                      >
                        <i
                          className="fas fa-plus p-1"
                          style={{ color: "gray", fontSize: "12px" }}
                        />
                        Add New
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-9 p-3 h-100">
                    <textarea
                      rows="15"
                      className="bg-white p-5 m-0 mb-2 mx-4 border-rounded h-100 w-100"
                      disabled={value.textBoxStatus}
                      onChange={this.loadContent.bind(this,value.dispatch)}
                            value={value.taValue}
                    />
                    
                    <div className="row">
                      <div className="col-sm-8" />
                      <div className="col-sm-4 d-flex justify-content-end">
                        <div className="col-sm-2 text-white px-3">
                          <span className={classes.b1} onClick={this.saveFile.bind(this,value.dispatch)}>Save</span>
                        </div>
                        <div className="col-sm-2 text-white px-3">
                          <span className={classes.b1}  onClick={this.editFile.bind(this,value.dispatch)}>Edit</span>
                        </div>
                        <div className="col-sm-2 text-white px-3">
                          <span className={classes.b1} onClick={this.deleteFile.bind(this, value.dispatch)}>Delete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Editor;
