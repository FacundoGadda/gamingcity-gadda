import React from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"

import "./modal.scss"

const ModalComponent = ({ toggle, modal, modalHeader, modalBody, loading }) => {
  return (
    <Modal toggle={toggle} isOpen={modal} backdrop="static" centered>
      {modalHeader && (
        <ModalHeader toggle={loading ? !toggle : toggle}>
          {modalHeader}
        </ModalHeader>
      )}
      <ModalBody>{modalBody}</ModalBody>
    </Modal>
  )
}

export default ModalComponent
