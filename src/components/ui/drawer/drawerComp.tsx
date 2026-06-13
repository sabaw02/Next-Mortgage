import { Button, Drawer } from "@heroui/react";
import React from "react";

const DrawerComp = () => {
  return (
    <div dir="ltr">
      <Drawer>
        <Button variant="secondary">
          {/* {placement.charAt(0).toUpperCase() + placement.slice(1)} */}
        </Button>
        <Drawer.Backdrop dir="ltr">
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              {/* {placement === "bottom" && <Drawer.Handle />} */}
              <Drawer.Header>
                <Drawer.Heading>
                  {/* {placement.charAt(0).toUpperCase() + placement.slice(1)} Drawer */}
                </Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
                <p>
                  {/* This drawer slides in from the <strong>{placement}</strong> edge of the screen. */}
                </p>
              </Drawer.Body>
              <Drawer.Footer>
                <Button slot="close" variant="secondary">
                  Cancel
                </Button>
                <Button slot="close">Done</Button>
              </Drawer.Footer>
              {/* {placement === "top" && <Drawer.Handle />} */}
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
};

export default DrawerComp;
