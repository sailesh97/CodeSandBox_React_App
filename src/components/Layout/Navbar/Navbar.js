import React, { Component } from "react";
import { Consumer } from "../../../Context";
import {withRouter} from 'react-router-dom';
import Modal from "../../../UI/Modal/Modal";
import LoginModalContent from "../Login/LoginModalContent/LoginModalContent";
import Navimg from "../../../assets/navimg.png";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  showTheModal = (dispatch, e) => {
    e.preventDefault();
    dispatch({ type: "SHOW_MODAL" });
  };

  closeTheModal = dispatch => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  render() {
    console.log(this.props);
    let loginModal = null;
    let log = null;
    loginModal = <LoginModalContent />;
    return (
      <Consumer>
        {value => {
          if (this.props.location.pathname === '/loggedin') {
            log = (<NavLink
              to="/home"
              className="text-white ml-auto p-2 mr-1 text-decoration-none"
            >
              Log Out
              </NavLink>);            
          } else {
            log = <NavLink to="/home" className="text-white ml-auto p-2 mr-1 text-decoration-none" onClick={this.showTheModal.bind(this, value.dispatch)}>
                Log In / Register
              </NavLink>;
          }
          return (
            <div>
              <nav className="navbar shadow-lg pb-3 mb-5 rounded">
                <NavLink className="navbar-brand" to="/home">
                  <img
                    src={Navimg}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mr-1"
                    alt="svg"
                  />
                  <span className="text-white">Code Box</span>
                </NavLink>

                {log}

                <Modal
                  show={value.modalShow}
                  modalClosed={this.closeTheModal.bind(this, value.dispatch)}
                >
                  {loginModal}
                </Modal>
              </nav>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default withRouter(Navbar);
