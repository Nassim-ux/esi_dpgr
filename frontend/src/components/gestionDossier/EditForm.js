import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

class EditForm extends React.Component {
  state = {
    s_id: 0,
    laureat_nom: "",
    theme: "",
    sujet: "",
    type: "",
    dossier_lien: "",
    dossier_etat: "",
    etat: "",
  };

  componentDidMount() {
    if (this.props.soutenance) {
      const {
        s_id,
        laureat_nom,
        theme,
        sujet,
        type,
        dossier_lien,
        dossier_etat,
        etat,
      } = this.props.soutenance;
      this.setState({
        s_id,
        laureat_nom,
        theme,
        sujet,
        type,
        dossier_lien,
        dossier_etat,
        etat,
      });
    }
  }

  dossier = {
    d_id: this.state.s_id,
    lien: this.dossier_lien,
    etat: this.dossier_etat,
  };

  // updtSoutenance = (e) => {
  //   e.preventDefault();

  //   this.setState(
  //     {
  //       dossier_etat: this.props.etat,
  //     },
  //     () => {
  //       this.dossier.d_id = this.state.s_id;
  //       this.dossier.etat = this.state.dossier_etat;
  //       this.dossier.lien = this.state.dossier_lien;
  //       axios
  //         .put(API_URL + "updtDossierEtat/" + this.state.s_id, this.dossier)
  //         .then(() => {
  //           this.props.resetState();
  //           this.props.toggle();
  //         });
  //     }
  //   );
  // };

  updtSoutenance = (e) => {
    e.preventDefault();

    this.setState(
      {
        dossier_etat: this.props.etat,
      },
      () => {
        let new_data = this.props.data;
        for (let i = 0; i < new_data.length; i++) {
          if (new_data[i].s_id === this.state.s_id) {
            new_data[i].dossier_etat = this.props.etat;
            break;
          }
        }
        this.props.resetStateTmp(new_data);
        this.props.toggle();
      }
    );
  };

  // handleClose = () => {
  //   this.props.resetState();
  //   this.props.toggle();
  // };

  handleClose = () => {
    this.props.resetStateTmp(this.props.data);
    this.props.toggle();
  };

  render() {
    if (this.props.etat === "V") {
      return (
        <Form onSubmit={this.updtSoutenance}>
          <p>Etes-vous sur de vouloir valider ce dossier ?</p>
          <Button color="primary" type="submit">
            Valider
          </Button>
          &nbsp;&nbsp;
          <Button onClick={this.handleClose}>Annuler</Button>
        </Form>
      );
    } else {
      if (this.props.etat === "R") {
        return (
          <Form onSubmit={this.updtSoutenance}>
            <p>Motif de refus:</p>
            <FormGroup style={{ paddingBottom: "10px" }}>
              <Input type="textarea" name="motif" />
            </FormGroup>
            <Button color="danger" type="submit">
              Envoyer
            </Button>
            &nbsp;&nbsp;
            <Button onClick={this.handleClose}>Annuler</Button>
          </Form>
        );
      } else {
        return (
          <Form onSubmit={this.updtSoutenance}>
            <p>Etes-vous sur de vouloir mettre en attente ce dossier ?</p>
            <Button color="warning" type="submit">
              Confirmer
            </Button>
            &nbsp;&nbsp;
            <Button onClick={this.handleClose}>Annuler</Button>
          </Form>
        );
      }
    }
  }
}

export default EditForm;
