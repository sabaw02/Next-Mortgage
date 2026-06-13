import { Button, Modal } from "@heroui/react";
import React from "react";

const ModalComponent = () => {
  return (
    <div>
      <Modal>
        <Button variant="secondary">
          sss {/* {placement.charAt(0).toUpperCase() + placement.slice(1)} */}
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-[360px]">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-default text-foreground">
                  {/* <Rocket className="size-5" /> */}
                </Modal.Icon>
                <Modal.Heading>
                  {/* Placement: {placement.charAt(0).toUpperCase() + placement.slice(1)} */}
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <p>
                  This modal uses the <code>"right"</code> placement option. Try
                  different placements to see how the modal positions itself on
                  the screen.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button className="w-full" slot="close">
                  Continue
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ModalComponent;
