import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import JuryList from "./JuryList";
import XTable from "./JuryTable";
import axios from "axios";

import { API_URL } from "./../../constants";

class OngletDesignationJury extends Component {
  
  state = {
    jurys: [],
  };

  componentDidMount() {
    this.resetState();
  }

  getJurys = () => {
    axios
      .get(API_URL + "getJurys/")
      .then((res) => this.setState({ jurys: res.data }));
  };

  resetState = () => {
    this.getJurys();
  };




  
  render() {

   

    const listHeader = [
      {
        Header: "ID",
        className: "text-left",
        accessor: "j_id",
        notShowSortingDisplay: false,
      },
      {
        Header: "Nom",
        accessor: "nom",
        className: "text-left",
      },
      {
        Header: "Prenom",
        accessor: "prenom",
        className: "text-left",
      },
      {
        Header: "Domaine d'expértise",
        accessor: "domaine_xp",
        className: "text-center",
      },
      {
        Header: "Type",
        accessor: "type",
        className: "text-left",
      },
      {
        Header: "Telephone",
        accessor: "tel_num",
        className: "text-left",
      },
      {
        Header: "Note",
        accessor: "note",
        className: "text-left",
      },
      {
        Header: "Adress email",
        accessor: "email",
        className: "text-left",
      },
    ];


    return (
      <Container style={{ marginTop: "0px" }}>
      <Row>
        <Col>
          <XTable
            columns={listHeader}
            loading={false}
            data={this.state.jurys}
            resetState={this.resetState}
            type={this.type}
          />
        </Col>
      </Row>
    </Container>
    );
  }
}

export default OngletDesignationJury;
