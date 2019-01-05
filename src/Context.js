import React, { Component } from "react";
// import Document from './components/Layout/Editor/Document/Document';
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    //  SHOW_MODAL :
    //   By clicking Login/Register Modal will appear

    case "SHOW_MODAL":
      return { ...state, modalShow: true };

    // CLOSE_MODAL :
      //By clicking the login in the modal , it will close the modal
    case "CLOSE_MODAL":
      return { ...state, modalShow: false };

    //SWITCH_LOG:
      // It manages the user's login/signup state
    case "SWITCH_LOG":
      return { ...state, auth: "logout", modalShow: false };
    //ADD_NEW
    //BY clicking the add new button it will add a document element in the side bar
    case "ADD_NEW":
      state.lastFileNo2 = state.lastFileNo2 + 1;
      return {
        ...state,
        documents: state.documents2.push({
          fileContent: "",
          id: action.payload
        })
      };

    //MAKE_ACTIVE:
    //By clicking the Document it loads the file content on the right area as well as the id of the document is stored in whichFile state
    case "MAKE_ACTIVE":
      state.documents2.map(docs => {
        if (docs.id === state.whichFile) {
          state.taValue = docs.fileContent;
        }
        return () => {};
      });
      return {
        ...state,
        textBoxStatus: true,
        whichFile: action.payload,
        shouldAdd: true
      };

    
    case "LOAD_CONTENT":
      return { ...state, taValue: action.payload };

    //SAVE_FILE: makes the text area disabled 
    case "SAVE_FILE": {
      state.documents2.map(docs => {
        if (docs.id === state.whichFile) {
          docs.fileContent = state.taValue;
          window.alert("Your File is saved now");
        }
        return () => {};
      });
      return {
        ...state,
        textBoxStatus: true
      };
    }
    //EDIT_FILE: Makes the editable
    case "EDIT_FILE": {
      return { ...state, textBoxStatus: false };
    }

    //FOR DELETING A FILE
    case "DELETE_FILE": {
        // state.documents2.filter(documents2 => documents2.id === state.whichFile);
        // console.log(state.documents2);
        //state.documents2.splice(state.whichFile,1);
        return { 
          ...state,
          documents2: state.documents2.filter(
            doc => doc.id !== state.whichFile
          )
        };
    }
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    modalShow: false,
    auth: "login",
    lastFileNo2: 1,
    documents2: [],
    list: [],
    textBoxStatus: true,
    whichFile: 0,
    taValue: "",
    shouldAdd: false,
    editDisabled:true,
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
