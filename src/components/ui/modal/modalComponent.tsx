import { Button, Modal } from "@heroui/react";
import React from "react";

export default function ModalComponent({
  children,
  text,
  size,
  title,
  isConfirm,
  confirmText,
  isCancel,
  cancelText,
}: Readonly<{
  children: React.ReactNode;
  size?: string | undefined | null;
  text: string;
  title: string;
  isConfirm: boolean;
  confirmText: string;
  cancelText: string;
  isCancel: boolean;
}>) {
  return (
    <div>
      <Modal>
        <Button variant="secondary">
          {text}
          {/* {placement.charAt(0).toUpperCase() + placement.slice(1)} */}
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto" size={size || "lg"}>
            <Modal.Dialog>
              <Modal.CloseTrigger />
              <Modal.Header className="mt-6 text-primary-500">
                <h1>{title}</h1>
              </Modal.Header>
              <Modal.Body>
                {children}
                <>
                  This modal uses the size variant. On mobile devices, all sizes
                  adapt to near full-width for optimal viewing. On desktop, each
                  size provides a different maximum width to suit various
                  content needs.
                </>
              </Modal.Body>
              <Modal.Footer>
                {isCancel === true ? (
                  <Button slot="close" variant="secondary">
                    {cancelText}
                  </Button>
                ) : (
                  ""
                )}

                {isConfirm === true ? (
                  <Button slot="close">{confirmText}</Button>
                ) : (
                  ""
                )}
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}
