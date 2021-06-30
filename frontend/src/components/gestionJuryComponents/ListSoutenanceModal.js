import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import axios from "axios";
import { API_URL } from "./../../constants";
import { Table } from "reactstrap";

class ListSoutenanceModel extends Component {
  j_id = this.props.j_id;
  state = {
    modal: false,
   
    jurySnts: [],
    soutenances: []
    
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
      jurySnts:!previous.jurySnts,
      soutenances:!previous.soutenances}))
  };

  getjury_list_soutenance = () => {
    axios
      .get(API_URL + "getjury_list_soutenance/"+this.j_id)
      .then((res) => this.setState({ jurySnts:res.data }));
  }; 

  getSoutenances = () => {
    axios
      .get(API_URL + "getStnListByType/H")
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

    let mapETATS_D = new Map();
    mapETATS_D.set("V", "Validé");
    mapETATS_D.set("R", "Refusé");
    mapETATS_D.set("A", "En attente");

    let mapTYPE = new Map();
    mapTYPE.set('D', "Doctorat");
    mapTYPE.set('H', "Habilitation");
   

    let mapROLE = new Map();
    mapROLE.set('JU', "Jury"); 
    mapROLE.set ('RP', "Rapporteur");
    mapROLE.set('DJ', "Directeur des Jurys");
    mapROLE.set('DR', "Directeur des Rapporteurs");
   
    var title = "Liste des soutenances";
    var  jurySnts = this.state.jurySnts;

    

      return (
        <Fragment>
          <Button color="primary" onClick={() => {
          this.toggle();
          this.getjury_list_soutenance();
          this.getSoutenances();
        }}>
            Affecter a une soutenance
          </Button>

          <Modal onClosed={this.resetState} size="lg" isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
            
            <ModalBody>
       
            <Table light>
        <thead>
          <tr>
          <th>ID</th>
            <th>Nom lauréat</th>
            <th>Thème</th>
            <th>Sujet</th>
            <th>Etat soutenance</th>
            <th>Etat dossier</th>
            
            
           
          </tr>
        </thead>
        <tbody>
          {!this.state.soutenances || this.state.soutenances.length <= 0 ? (
            
              <tr>
                <td colSpan="6" align="center">
                  <b>Aucune soutenance trouvée</b>
                </td>
              </tr>
            ) : (
              this.state.soutenances.map((soutenance) => (
                <tr key={soutenance.s_id}>
                  <td>{soutenance.s_id}</td>
                  <td>{soutenance.laureat_nom}</td>
                  <td>{mapTHEMES.get(soutenance.theme)}</td>
                  <td>{soutenance.sujet}</td>
                
                  <td>{mapETATS.get(soutenance.etat)}</td>
                  <td>{mapETATS_D.get(soutenance.dossier_etat)}</td>
                 
                </tr>
              ))
            )}
        </tbody>
      </Table>
            </ModalBody>
          </Modal>
        </Fragment>
      );
    } 
  }


export default  ListSoutenanceModel;
