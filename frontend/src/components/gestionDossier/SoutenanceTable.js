import React, { useState } from "react";
import { Table, Button } from "reactstrap";

import {
  useTable,
  useSortBy,
  usePagination,
  useFilters,
  useGlobalFilter,
  // useAsyncDebounce,
} from "react-table";

import {
  Label,
  Input,
  CustomInput,
  FormGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import axios from "axios";

import { API_URL } from "../../constants";

import { matchSorter } from "match-sorter";
import classNames from "classnames";
import "../../css/Table.css";
import sortasc from "../../images/sort_asc.png";
import sortdesc from "../../images/sort_desc.png";
import sortboth from "../../images/sort_both.png";
import loaderimage from "../../images/loader-table.gif";

import ValidDossierModal from "./ValidDossierModal";
import RefusDossierModal from "./RefusDossierModal";

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  return (
    <Input
      type="text"
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder="Rechercher..."
      style={{
        width: "120px",
        fontSize: "10px",
      }}
    />
  );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

fuzzyTextFilterFn.autoRemove = (val) => !val;

const XTable = ({
  resetState,
  resetStateTmp,
  type,
  columns,
  data,
  data_tmp,
  loading = true,
}) => {
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

  const pushUpdates = (e) => {
    e.preventDefault();
    for (let i = 0; i < data.length; i++) {
      let dossier = {
        d_id: data[i].s_id,
        lien: data[i].dossier_lien,
        etat: data[i].dossier_etat,
      };

      axios
        .put(API_URL + "updtDossierEtat/" + dossier.d_id, dossier)
        .then(() => {
          resetState();
        });
    }
  };

  const [switchSearch, setSwitchSearch] = useState(false);
  const toggleSwitchSearch = () => {
    setAllFilters([]);
    setSwitchSearch(!switchSearch);
  };
  const filterTypes = React.useMemo(
    () => ({
      fuzzyText: fuzzyTextFilterFn,
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setAllFilters,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  data = data_tmp;

  return (
    <div style={{ width: "1200px" }}>
      <div>
        <span className="float-right ">
          <CustomInput
            checked={switchSearch}
            className="table-search-switch"
            type="switch"
            name="customSwitch"
            id="customSwitch"
            onClick={toggleSwitchSearch}
            label="Filtrer la liste"
          />
        </span>
      </div>
      <Table
        {...getTableProps()}
        hover
        dark
        responsive
        style={{
          width: "1200px",
        }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <>
              <tr className="theader" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}

                    <span
                      className="float-right"
                      style={{ float: "right", textAlign: "right" }}
                    >
                      {!column.notShowSortingDisplay ? (
                        column.isSorted ? (
                          column.isSortedDesc ? (
                            <img src={sortdesc} alt="descending" />
                          ) : (
                            <img src={sortasc} alt="ascending" />
                          )
                        ) : (
                          <img src={sortboth} alt="sorting" />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
                <th></th>
              </tr>
              {switchSearch ? (
                <tr style={{ backgroundColor: "aliceBlue" }}>
                  {headerGroup.headers.map((column, index) => (
                    <th className="tfilter">
                      {column.canFilter ? (
                        <FormGroup className="mb-1">
                          <Label className="divFilter mb-0">
                            Filtrer {column.render("Header")} :
                          </Label>
                          {column.render("Filter")}
                        </FormGroup>
                      ) : null}
                    </th>
                  ))}
                  <th></th>
                </tr>
              ) : (
                ""
              )}
            </>
          ))}
        </thead>
        {loading ? (
          <tbody>
            <tr>
              <td colSpan="10000" className="text-center">
                <img src={loaderimage} alt="Loading..." />
              </td>
            </tr>
          </tbody>
        ) : (
          <>
            {page.length === 0 ? (
              <tbody>
                <tr>
                  <td colSpan="10000" className="text-left">
                    Aucune soutenance trouvée.
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {page.map((row, i) => {
                  prepareRow(row);
                  const soutenance = row.original;
                  return (
                    <tr>
                      {row.cells.map((cell) => {
                        switch (cell.column.id) {
                          case "dossier_etat":
                            return (
                              <td>
                                {mapETATS_D.get(cell.row.original.dossier_etat)}
                              </td>
                            );
                          case "etat":
                            return (
                              <td>{mapETATS.get(cell.row.original.etat)}</td>
                            );
                          case "theme":
                            return (
                              <td>{mapTHEMES.get(cell.row.original.theme)}</td>
                            );

                          case "dossier_lien":
                            return (
                              <td>
                                <a href={cell.row.original.dossier_lien}>
                                  dossier
                                </a>
                              </td>
                            );

                          default:
                            return <td>{cell.render("Cell")}</td>;
                        }
                      })}
                      <td align="center">
                        <ValidDossierModal
                          data={data_tmp}
                          soutenance={soutenance}
                          resetState={resetState}
                          resetStateTmp={resetStateTmp}
                          type={type}
                        />
                        <RefusDossierModal
                          data={data_tmp}
                          soutenance={soutenance}
                          resetState={resetState}
                          resetStateTmp={resetStateTmp}
                          type={type}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </>
        )}
      </Table>

      {page.length > 0 && (
        <div className={classNames("div-pagination", { "d-none": loading })}>
          <div className="div-pagination-1">
            Page : {pageIndex + 1} de {pageOptions.length}{" "}
            <Pagination className="pagina">
              <PaginationItem disabled={!canPreviousPage}>
                <PaginationLink onClick={() => gotoPage(0)}>
                  {"<<"}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={!canPreviousPage}>
                <PaginationLink onClick={() => previousPage()}>
                  {"<"}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={!canNextPage}>
                <PaginationLink onClick={() => nextPage()}>
                  {">"}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem disabled={!canNextPage}>
                <PaginationLink onClick={() => gotoPage(pageCount - 1)}>
                  {">>"}
                </PaginationLink>
              </PaginationItem>
            </Pagination>
            <div className="div-pagination-2-1">
              Aller vers la page {" : "}
              <input
                className="inputan"
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
              />
            </div>
          </div>
          <div className="div-pagination-2">
            <div className="div-pagination-2-2">
              Affichage de
              <select
                className="selectan"
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 50, 100].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
              soutenance par page
            </div>
          </div>

          <div className="div-pagination-3">
            <Button
              color="primary"
              //className="float-right"
              onClick={pushUpdates}
              style={{ marginRight: "10px" }}
            >
              Enregistrer
            </Button>
            <Button
              outline
              color="secondary"
              //className="float-right"
              onClick={resetState}
            >
              Annuler
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default XTable;
