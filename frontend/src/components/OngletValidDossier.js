import React, { Component } from "react";
import { Container } from "reactstrap";
import XTable from "./SoutenanceTable";

import axios from "axios";

import { API_URL } from "../constants";

class OngletValidDossier extends Component {
  type = this.props.type;

  state = {
    soutenances: [],
    soutenances_tmp: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getSoutenances = () => {
    axios
      .get(API_URL + "getStnListByType/" + this.type)
      .then((res) =>
        this.setState({ soutenances: res.data, soutenances_tmp: res.data })
      );
  };

  resetState = () => {
    this.getSoutenances();
  };

  resetStateTmp = (data) => {
    this.setState({ soutenances_tmp: data });
  };

  render() {
    const listHeader = [
      {
        Header: "ID",
        className: "text-left",
        accessor: "s_id",
        notShowSortingDisplay: false,
      },
      {
        Header: "Nom Lauréat",
        accessor: "laureat_nom",
        className: "text-left",
      },
      {
        Header: "Thème",
        accessor: "theme",
        className: "text-left",
      },
      {
        Header: "Sujet",
        accessor: "sujet",
        className: "text-center",
      },
      {
        Header: "Dossier",
        accessor: "dossier_lien",
        className: "text-left",
      },
      {
        Header: "Etat",
        accessor: "etat",
        className: "text-left",
      },
      {
        Header: "Etat du dossier",
        accessor: "dossier_etat",
        className: "text-left",
      },
    ];

    return (
      <Container
        style={{
          marginTop: "0px",
          marginLeft: "10px",
        }}
      >
        <XTable
          columns={listHeader}
          loading={false}
          data={this.state.soutenances}
          data_tmp={this.state.soutenances_tmp}
          resetState={this.resetState}
          resetStateTmp={this.resetStateTmp}
          type={this.type}
        />
      </Container>
    );
  }
}

export default OngletValidDossier;
