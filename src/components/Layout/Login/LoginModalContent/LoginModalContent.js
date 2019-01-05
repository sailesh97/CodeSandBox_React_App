import React , {Component} from "react";
import {NavLink} from "react-router-dom";
import { Consumer } from "../../../../Context";
import classes from "./LoginModalContent.module.css";

class LoginModalContent extends Component  {

  close = (dispatch) => {
    dispatch({ type: "CLOSE_MODAL" });
  }

  switchToLogOut = (dispatch) => {
    dispatch({ type: "SWITCH_LOG" })
  }
  render() {
    return (
      <Consumer>
        {value => {
          return <div className={classes.bg} style={{ position: "relative" }}>
              <div>
                <div className={classes.border}>
                  <p className="text-center">
                    Sign up or Log in to Code Box
                  </p>
                </div>

                <div>
                  <div className="px-2">
                    <NavLink to="/loggedin" exact>
                      <button className={classes.google} onClick={this.switchToLogOut.bind(this, value.dispatch)}>
                        <i className="fab fa-google mr-sm-auto pr-sm-3" />
                        <span className={classes.googleText}>
                          Continue with Google
                        </span>
                      </button>
                    </NavLink>
                    <NavLink to="/loggedin" exact>
                      <button className={classes.facebook} onClick={this.switchToLogOut.bind(this, value.dispatch)}>
                        <i className="fab fa-facebook-f text-white mr-sm-auto pr-sm-3" />
                        <span className={classes.fbText}>
                          {" "}
                          Continue with Facebook
                        </span>
                      </button>
                    </NavLink>
                  </div>
                  <div className={classes.or}>
                    <div className="row px-3">
                      <div className="col-sm-5 border-secondary border-top mt-sm-4" />
                      <div className="col-sm-2 mt-sm-2 text-center">
                        OR
                      </div>
                      <div className="col-sm-5 border-secondary border-top mt-sm-4" />
                    </div>
                    <div />

                    <p className="mt-sm-3 text-center">
                      Use your email address
                    </p>
                    <div className="mt-3">
                      <div className="row mx-auto px-auto">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-center">
                          <NavLink to="/loggedin" exact>
                            <button className={classes.login} onClick={this.switchToLogOut.bind(this, value.dispatch)}>
                              Login
                            </button>
                          </NavLink>
                        </div>
                        <div className="col-sm-5 text-center">
                          <NavLink to="/loggedin" exact>
                            <button className={classes.signup} onClick={this.switchToLogOut.bind(this, value.dispatch)}>
                              SignUp
                            </button>
                          </NavLink>
                        </div>
                        <div className="col-sm-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-white text-center mt-3" style={{ fontSize: "12px" }}>
                By logging in you agree to Code Box's Terms of Service and Privacy Policy
              </p>
              <span className={classes.cross} onClick={this.close.bind(this, value.dispatch)}>
                <i className="fas fa-times" />
              </span>
            </div>;
        }}
      </Consumer>
    );
  }
  
};

export default LoginModalContent;
