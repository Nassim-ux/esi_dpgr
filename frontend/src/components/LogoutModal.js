import React from "react";
import { Button } from "reactstrap";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";

class LogoutModal extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>
            Voulez-vous déconnecter ?
          </ModalHeader>

          <ModalBody>
            <Link to="/login">
              <Button color="danger">Se déconnecter</Button>
            </Link>
            &nbsp;&nbsp;
            <Button onClick={this.props.toggle}>Annuler</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default LogoutModal;
