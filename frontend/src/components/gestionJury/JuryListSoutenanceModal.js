import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import axios from "axios";
import { API_URL } from "./../../constants";
import { Table } from "reactstrap";

class JuryListSoutenanceModal extends Component {
  j_id = this.props.j_id;
  type=this.props.type;
  state = {
    modal: false,

    jurySnts: [],
    soutenances: [],
  };
  componentDidMount() {
    this.resetState();
  }

  resetState = () => {
    this.getjury_list_soutenance();
    this.getSoutenances();
  };

  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
      jurySnts: !previous.jurySnts,
      soutenances: !previous.soutenances,
    }));
  };

  getjury_list_soutenance = () => {
    axios
      .get(API_URL + "getjury_list_soutenance/" + this.j_id)
      .then((res) => this.setState({ jurySnts: res.data }));
  };

  getSoutenances = () => {
    axios
      .get(API_URL + "getStnListByType/" + this.type)
      .then((res) => this.setState({ soutenances: res.data }));
  };

  render() {
    let mapTHEMES = new Map();
    mapTHEMES.set("ML", "Machine Learning");
    mapTHEMES.set("ST", "Systeme d'Information");
    mapTHEMES.set("SQ", "Systeme Informatique");
    mapTHEMES.set("RS", "Réseaux & Sécurité");
    mapTHEMES.set("GL", "Géni-Logiciel");
    let mapETATS = new Map();
    mapETATS.set("A", "Autorisée");
    mapETATS.set("R", "Refusée");
    mapETATS.set("N", "Non définie");
    mapETATS.set("C", "Cloturée");

    let mapTYPE = new Map();
    mapTYPE.set("D", "Doctorat");
    mapTYPE.set("H", "Habilitation");

    let mapROLE = new Map();
    mapROLE.set("JU", "Jury");
    mapROLE.set("RP", "Rapporteur");
    mapROLE.set("DJ", "Directeur des Jurys");
    mapROLE.set("DR", "Directeur des Rapporteurs");

    var title = "Liste des soutenances";

    return (
      <Fragment>
        <Button
          color="primary"
          onClick={() => {
            this.toggle();
            this.getjury_list_soutenance();
            this.getSoutenances();
          }}
        >
          Liste des soutenances
        </Button>

        <Modal
          onClosed={this.resetState}
          size="lg"
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <Table light>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Role</th>
                  <th>Type</th>
                  <th>Thème</th>
                  <th>Sujet</th>
                  <th>Etat soutenance</th>
                </tr>
              </thead>
              
              {!this.state.jurySnts || this.state.jurySnts.length <= 0 ? (
                 <tbody>
                    <td colSpan="6" align="center">
                      <b>Ce jury n'est affecté a aucune soutenance</b>
                    </td>
                  </tbody>
                ) : (!this.state.soutenances ||
                    this.state.soutenances.length <= 0 ? (
                      <tbody>
                      <td colSpan="6" align="center">
                        <b>Ce jury n'est affecté a aucune soutenance</b>
                      </td>
                    </tbody>
                    ) : (
                      this.state.jurySnts.map((jurySnt) => (

                        this.state.soutenances.map(
                          (soutenance) =>
                            soutenance.s_id === jurySnt.soutenance_id && (
                              
                                <tr key={jurySnt.js_id}>
                          <td>{jurySnt.js_id}</td>
                          <td>{mapROLE.get(jurySnt.role)}</td>
                        
                                <td>{mapTYPE.get(soutenance.type)}</td>
                                <td>{mapTHEMES.get(soutenance.theme)}</td>
                                <td>{soutenance.sujet}</td>
                                <td>{mapETATS.get(soutenance.etat)}</td>
                                </tr>
                              
                            )
                        )
                        
                      )




                    )
                ))
                      }
              
            </Table>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default JuryListSoutenanceModal;
