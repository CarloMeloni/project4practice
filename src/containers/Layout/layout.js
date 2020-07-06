import React, { Component } from "react";

import classes from "./layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidedrawer from "../../components/Navigation/SideDrawer.js/Sidedrawer";

class Layout extends Component {
  state = {
    showSideSdrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideSdrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideSdrawer: !prevState.showSideSdrawer };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <Sidedrawer
          open={this.state.showSideSdrawer}
          closed={this.sideDrawerClosedHandler}
          opened={this.sideDrawerOpenedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
