import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import { EnterpriseForm } from "./EnterpriseForm";

export default function TemporaryDrawer({
  isOpen,
  flipDrawer,
  regenerateComponent,
}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    flipDrawer();
  };

  return (
    <div>
      <SwipeableDrawer
        anchor={"left"}
        open={isOpen}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        <EnterpriseForm regenerateComponent={regenerateComponent} />
      </SwipeableDrawer>
    </div>
  );
}
