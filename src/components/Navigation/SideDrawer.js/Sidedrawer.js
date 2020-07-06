import React from "react";

import classes from "./Sidedrawer.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Sidedrawer = (props) => {
  let attachClasses = [classes.Sidedrawer, classes.Close];
  if (props.open) {
    attachClasses = [classes.Sidedrawer, classes.Open];
  }

  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachClasses.join(" ")}>
        <Logo className={classes.Logo} height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Sidedrawer;
