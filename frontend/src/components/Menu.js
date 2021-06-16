import React, { Component } from "react";
import "../css/Menu.css";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="card-container">
        <Paper
          component={Link}
          style={{ textDecoration: "unset" }}
          to={this.props.type + "/gestdossier"}
          className="card"
          elevation={3}
        >
          <div className="e1">
            <h5 className="text">Gestion des dossiers de soutenance</h5>
          </div>
          <div className="e2">
            <img
              className="img"
              alt=""
              style={{ height: "80px", width: "80px" }}
              src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSItMTAgMSA1MTEgNTExLjk5OTk4IiB3aWR0aD0iNTExcHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTMwMy40Mzc1IDE4MC4zMjgxMjVjMCAxNS45ODQzNzUtMTIuOTU3MDMxIDI4Ljk0NTMxMy0yOC45NDE0MDYgMjguOTQ1MzEzaC0xODMuMDE5NTMyYy0xNS45ODgyODEgMC0yOC45NDUzMTIgMTIuOTU3MDMxLTI4Ljk0NTMxMiAyOC45NDUzMTJ2MjQ0LjgzNTkzOGMwIDE1Ljk4ODI4MSAxMi45NTcwMzEgMjguOTQ1MzEyIDI4Ljk0NTMxMiAyOC45NDUzMTJoMzcxLjkxNzk2OWMxNS45ODgyODEgMCAyOC45NDUzMTMtMTIuOTU3MDMxIDI4Ljk0NTMxMy0yOC45NDUzMTJ2LTMwMi43MjY1NjNjMC0xNS45ODgyODEtMTIuOTU3MDMyLTI4Ljk0NTMxMy0yOC45NDUzMTMtMjguOTQ1MzEzaC0xMzEuMDExNzE5Yy0xNS45ODQzNzQgMC0yOC45NDUzMTIgMTIuOTU3MDMyLTI4Ljk0NTMxMiAyOC45NDUzMTN6bTAgMCIgZmlsbD0iI2U1OGUxMyIvPjxwYXRoIGQ9Im0xNDUuMDcwMzEyIDc3LjcxODc1aDMxMy40NTMxMjZ2NDAwLjU1NDY4OGgtMzEzLjQ1MzEyNnptMCAwIiBmaWxsPSIjYjNiM2IzIi8+PHBhdGggZD0ibTk0LjY0MDYyNSAwaDMxMy40NTMxMjV2MjY1Ljc4OTA2MmgtMzEzLjQ1MzEyNXptMCAwIiBmaWxsPSIjY2JjYmNiIi8+PHBhdGggZD0ibTk0LjY0MDYyNSAwaDMxMy40NTMxMjV2NTYuNzA3MDMxaC0zMTMuNDUzMTI1em0wIDAiIGZpbGw9IiNlNmU2ZTYiLz48cGF0aCBkPSJtNDQuMjA3MDMxIDc3LjcxODc1aDMxMy40NTMxMjV2MTg4LjA3MDMxMmgtMzEzLjQ1MzEyNXptMCAwIiBmaWxsPSIjZTZlNmU2Ii8+PHBhdGggZD0ibTQzMC4zMDg1OTQgMTgwLjMyODEyNXYzMDIuNzI2NTYzYzAgMTUuOTg4MjgxLTEyLjk1NzAzMiAyOC45NDUzMTItMjguOTQ1MzEzIDI4Ljk0NTMxMmgtMzcxLjkxNzk2OWMtMTUuOTc2NTYyIDAtMjguOTQ1MzEyLTEyLjk1NzAzMS0yOC45NDUzMTItMjguOTQ1MzEydi0yNDQuODM5ODQ0YzAtMTUuOTg4MjgyIDEyLjk2ODc1LTI4Ljk0NTMxMyAyOC45NDUzMTItMjguOTQ1MzEzaDE4My4wMjM0MzhjMTUuOTg0Mzc1IDAgMjguOTQxNDA2LTEyLjk1NzAzMSAyOC45NDE0MDYtMjguOTQxNDA2IDAtMTUuOTg4MjgxIDEyLjk1NzAzMi0yOC45NDUzMTMgMjguOTQ1MzEzLTI4Ljk0NTMxM2gxMzEuMDA3ODEyYzE1Ljk4ODI4MSAwIDI4Ljk0NTMxMyAxMi45NTcwMzIgMjguOTQ1MzEzIDI4Ljk0NTMxM3ptMCAwIiBmaWxsPSIjZTU4ZTEzIi8+PHBhdGggZD0ibTQxNy43Njk1MzEgMTgwLjMyODEyNXYzMDIuNzI2NTYzYzAgMTUuOTg4MjgxLTEyLjk1NzAzMSAyOC45NDUzMTItMjguOTQ1MzEyIDI4Ljk0NTMxMmgtMzU5LjM3ODkwN2MtMTUuOTc2NTYyIDAtMjguOTQ1MzEyLTEyLjk1NzAzMS0yOC45NDUzMTItMjguOTQ1MzEydi0yNDQuODM5ODQ0YzAtMTUuOTg4MjgyIDEyLjk2ODc1LTI4Ljk0NTMxMyAyOC45NDUzMTItMjguOTQ1MzEzaDE4My4wMjM0MzhjMTUuOTg0Mzc1IDAgMjguOTQxNDA2LTEyLjk1NzAzMSAyOC45NDE0MDYtMjguOTQxNDA2IDAtMTUuOTg4MjgxIDEyLjk1NzAzMi0yOC45NDUzMTMgMjguOTQ1MzEzLTI4Ljk0NTMxM2gxMTguNDY4NzVjMTUuOTg4MjgxIDAgMjguOTQ1MzEyIDEyLjk1NzAzMiAyOC45NDUzMTIgMjguOTQ1MzEzem0wIDAiIGZpbGw9IiNmN2QzNjAiLz48cGF0aCBkPSJtMjgxLjQyMTg3NSAxMjYuMzA0Njg4aC0xODguMDcwMzEzYy00LjMyODEyNCAwLTcuODM5ODQzLTMuNTA3ODEzLTcuODM5ODQzLTcuODM1OTM4czMuNTExNzE5LTcuODM1OTM4IDcuODM5ODQzLTcuODM1OTM4aDE4OC4wNzAzMTNjNC4zMjgxMjUgMCA3LjgzNTkzNyAzLjUwNzgxMyA3LjgzNTkzNyA3LjgzNTkzOHMtMy41MDc4MTIgNy44MzU5MzgtNy44MzU5MzcgNy44MzU5Mzh6bTAgMCIgZmlsbD0iIzYxOThjZSIvPjxwYXRoIGQ9Im0yMDAuOTMzNTk0IDE2NS40ODgyODFoLTEwNy41ODIwMzJjLTQuMzI4MTI0IDAtNy44Mzk4NDMtMy41MDc4MTItNy44Mzk4NDMtNy44MzU5MzdzMy41MTE3MTktNy44Mzk4NDQgNy44Mzk4NDMtNy44Mzk4NDRoMTA3LjU4MjAzMmM0LjMyODEyNSAwIDcuODM1OTM3IDMuNTExNzE5IDcuODM1OTM3IDcuODM5ODQ0cy0zLjUwNzgxMiA3LjgzNTkzNy03LjgzNTkzNyA3LjgzNTkzN3ptMCAwIiBmaWxsPSIjNjE5OGNlIi8+PHBhdGggZD0ibTM4MS45MTc5NjkgMzA5LjY3NTc4MWgtMTQxLjQzMzU5NGMtNS45NTcwMzEgMC0xMC43ODEyNS00LjgyODEyNS0xMC43ODEyNS0xMC43ODEyNXYtMzYuNDI1NzgxYzAtNS45NTMxMjUgNC44MjQyMTktMTAuNzgxMjUgMTAuNzgxMjUtMTAuNzgxMjVoMTQxLjQyOTY4N2M1Ljk1NzAzMiAwIDEwLjc4MTI1IDQuODI4MTI1IDEwLjc4MTI1IDEwLjc4MTI1djM2LjQyNTc4MWMuMDAzOTA3IDUuOTU3MDMxLTQuODI0MjE4IDEwLjc4MTI1LTEwLjc3NzM0MyAxMC43ODEyNXptMCAwIiBmaWxsPSIjZmM1ZjYxIi8+PC9zdmc+"
            />
          </div>
        </Paper>
        <Paper
          component={Link}
          style={{ textDecoration: "unset" }}
          to={this.props.type + "/gestjury"}
          className="card"
          elevation={3}
        >
          <div className="e1">
            <img
              className="img"
              alt=""
              style={{ height: "80px", width: "80px" }}
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM1NTM3MzI7IiBkPSJNMTQxLjI0MSw2MS43OTNINzAuNjIxVjM1LjMxYzAtMTQuNjI2LDExLjg1Ny0yNi40ODMsMjYuNDgzLTI2LjQ4M2gxNy42NTUNCgkJYzE0LjYyNiwwLDI2LjQ4MywxMS44NTcsMjYuNDgzLDI2LjQ4M1Y2MS43OTN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzU1MzczMjsiIGQ9Ik0yNTYuMDE5LDBoLTAuMDM4Yy0yNC43OTksMC00NS4zMjQsMTkuMjgzLTQ2Ljg3MSw0NC4wMzNsLTYuMDc2LDk3LjIwOGgxMDUuOTMxbC02LjA3Ni05Ny4yMDgNCgkJQzMwMS4zNDMsMTkuMjgzLDI4MC44MTgsMCwyNTYuMDE5LDB6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojNzNCNEI5OyIgZD0iTTI1NiwxMDUuOTMxbC01My40MzcsMjAuMDM5Yy0xMC4zMzYsMy44NzYtMTcuMTg0LDEzLjc1OC0xNy4xODQsMjQuNzk3djQzLjQ0MWgxNDEuMjQxdi00My40NDENCgljMC0xMS4wMzktNi44NDgtMjAuOTItMTcuMTg0LTI0Ljc5N0wyNTYsMTA1LjkzMXoiLz4NCjxnPg0KCTxyZWN0IHg9IjE3LjY1NSIgeT0iMjIwLjY5IiBzdHlsZT0iZmlsbDojQUE2OTU1OyIgd2lkdGg9IjQ3Ni42OSIgaGVpZ2h0PSIyNjQuODI4Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0FBNjk1NTsiIGQ9Ik01MDMuMTcyLDIyOS41MTdIOC44MjhjLTQuODc1LDAtOC44MjgtMy45NTMtOC44MjgtOC44Mjh2LTE3LjY1NWMwLTQuODc1LDMuOTUzLTguODI4LDguODI4LTguODI4DQoJCWg0OTQuMzQ1YzQuODc1LDAsOC44MjgsMy45NTMsOC44MjgsOC44Mjh2MTcuNjU1QzUxMiwyMjUuNTY1LDUwOC4wNDcsMjI5LjUxNyw1MDMuMTcyLDIyOS41MTd6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojQjk3ODVGOyIgZD0iTTQ5NC4zNDUsMjQ3LjE3MkgxNy42NTVjLTQuODc1LDAtOC44MjgtMy45NTMtOC44MjgtOC44Mjh2LTguODI4aDQ5NC4zNDV2OC44MjgNCglDNTAzLjE3MiwyNDMuMjIsNDk5LjIyLDI0Ny4xNzIsNDk0LjM0NSwyNDcuMTcyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0FBNjk1NTsiIGQ9Ik04LjgyOCw0NzYuNjloNDk0LjM0NWM0Ljg3NSwwLDguODI4LDMuOTUzLDguODI4LDguODI4djE3LjY1NWMwLDQuODc1LTMuOTUzLDguODI4LTguODI4LDguODI4DQoJSDguODI4QzMuOTUzLDUxMiwwLDUwOC4wNDcsMCw1MDMuMTcydi0xNy42NTVDMCw0ODAuNjQyLDMuOTUzLDQ3Ni42OSw4LjgyOCw0NzYuNjl6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojQjk3ODVGOyIgZD0iTTE3LjY1NSw0NTkuMDM0aDQ3Ni42OWM0Ljg3NSwwLDguODI4LDMuOTUzLDguODI4LDguODI4djguODI4SDguODI4di04LjgyOA0KCQlDOC44MjgsNDYyLjk4NywxMi43OCw0NTkuMDM0LDE3LjY1NSw0NTkuMDM0eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNCOTc4NUY7IiBkPSJNMzA4Ljk2Niw0NDEuMzc5SDIwMy4wMzRjLTQuODc1LDAtOC44MjgtMy45NTMtOC44MjgtOC44MjhWMjczLjY1NQ0KCQljMC00Ljg3NSwzLjk1My04LjgyOCw4LjgyOC04LjgyOGgxMDUuOTMxYzQuODc1LDAsOC44MjgsMy45NTMsOC44MjgsOC44Mjh2MTU4Ljg5Nw0KCQlDMzE3Ljc5Myw0MzcuNDI3LDMxMy44NDEsNDQxLjM3OSwzMDguOTY2LDQ0MS4zNzl6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojRDdERUVEOyIgZD0iTTI4Mi40ODMsMzA4Ljk2NmgtNTIuOTY2Yy00Ljg3NSwwLTguODI4LTMuOTUzLTguODI4LTguODI4di04LjgyOGMwLTQuODc1LDMuOTUzLTguODI4LDguODI4LTguODI4DQoJaDUyLjk2NmM0Ljg3NSwwLDguODI4LDMuOTUzLDguODI4LDguODI4djguODI4QzI5MS4zMSwzMDUuMDEzLDI4Ny4zNTgsMzA4Ljk2NiwyODIuNDgzLDMwOC45NjZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojQjk3ODVGOyIgZD0iTTQ1OS4wMzQsNDQxLjM3OUgzNTMuMTAzYy00Ljg3NSwwLTguODI4LTMuOTUzLTguODI4LTguODI4VjI3My42NTVjMC00Ljg3NSwzLjk1My04LjgyOCw4LjgyOC04LjgyOA0KCWgxMDUuOTMxYzQuODc1LDAsOC44MjgsMy45NTMsOC44MjgsOC44Mjh2MTU4Ljg5N0M0NjcuODYyLDQzNy40MjcsNDYzLjkxLDQ0MS4zNzksNDU5LjAzNCw0NDEuMzc5eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Q3REVFRDsiIGQ9Ik00MzIuNTUyLDMwOC45NjZoLTUyLjk2NmMtNC44NzUsMC04LjgyOC0zLjk1My04LjgyOC04LjgyOHYtOC44MjhjMC00Ljg3NSwzLjk1My04LjgyOCw4LjgyOC04LjgyOA0KCWg1Mi45NjZjNC44NzUsMCw4LjgyOCwzLjk1Myw4LjgyOCw4LjgyOHY4LjgyOEM0NDEuMzc5LDMwNS4wMTMsNDM3LjQyNywzMDguOTY2LDQzMi41NTIsMzA4Ljk2NnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNCOTc4NUY7IiBkPSJNMTU4Ljg5Nyw0NDEuMzc5SDUyLjk2NmMtNC44NzUsMC04LjgyOC0zLjk1My04LjgyOC04LjgyOFYyNzMuNjU1YzAtNC44NzUsMy45NTMtOC44MjgsOC44MjgtOC44MjgNCgloMTA1LjkzMWM0Ljg3NSwwLDguODI4LDMuOTUzLDguODI4LDguODI4djE1OC44OTdDMTY3LjcyNCw0MzcuNDI3LDE2My43NzIsNDQxLjM3OSwxNTguODk3LDQ0MS4zNzl6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRDdERUVEOyIgZD0iTTEzMi40MTQsMzA4Ljk2Nkg3OS40NDhjLTQuODc1LDAtOC44MjgtMy45NTMtOC44MjgtOC44Mjh2LTguODI4YzAtNC44NzUsMy45NTMtOC44MjgsOC44MjgtOC44MjgNCgloNTIuOTY2YzQuODc1LDAsOC44MjgsMy45NTMsOC44MjgsOC44Mjh2OC44MjhDMTQxLjI0MSwzMDUuMDEzLDEzNy4yODksMzA4Ljk2NiwxMzIuNDE0LDMwOC45NjZ6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNjRBNUFGOyIgZD0iTTIxMS44NjIsMTY2LjIwOWMwLTQuNjgzLTEuODYtOS4xNzMtNS4xNzItMTIuNDg0bC0xNy4xMzEtMTcuMTMxDQoJCWMtMi42NDEsNC4xNTQtNC4xOCw5LjAyMi00LjE4LDE0LjE3M3Y0My40NDFoMjYuNDgzTDIxMS44NjIsMTY2LjIwOUwyMTEuODYyLDE2Ni4yMDl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzY0QTVBRjsiIGQ9Ik0zMDAuMTM4LDE2Ni4yMDljMC00LjY4MywxLjg2LTkuMTczLDUuMTcyLTEyLjQ4NGwxNy4xMzEtMTcuMTMxDQoJCWMyLjY0MSw0LjE1NCw0LjE4LDkuMDIyLDQuMTgsMTQuMTczdjQzLjQ0MWgtMjYuNDgzVjE2Ni4yMDl6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkFEN0E1OyIgZD0iTTI3My42NTUsMTEyLjU1MlY4OC4yNzZoLTM1LjMxdjI0LjI3NmwtMjAuODY1LDcuODI1bDI2LjAzNiwyNi4wMzYNCgljNi44OTQsNi44OTQsMTguMDczLDYuODk0LDI0Ljk2OCwwbDI2LjAzNi0yNi4wMzZMMjczLjY1NSwxMTIuNTUyeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRTFCNDsiIGQ9Ik0yMjAuNjksNDQuMTM4djM0LjY4OWMwLDUuOTAzLDIuNzIzLDExLjQxNSw3LjI1NywxNC42OWwxMy4wODIsOS40NDkNCgljMi42NzcsMS45MzMsNS44MjMsMi45NjUsOS4wMzksMi45NjVoMTEuODYxYzMuMjE4LDAsNi4zNjItMS4wMzIsOS4wMzktMi45NjVsMTMuMDgyLTkuNDQ5YzQuNTM0LTMuMjc0LDcuMjU3LTguNzg3LDcuMjU3LTE0LjY5DQoJdi04LjIwNkMyODIuNDgzLDQ0LjEzOCwyMjAuNjksNDQuMTM4LDIyMC42OSw0NC4xMzh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTU2RUEwOyIgZD0iTTEzMi40MTQsMTE0Ljc1OUg3OS40NDhMMzguNTU0LDEyOC4zOWMtNy4yMDksMi40MDMtMTIuMDcyLDkuMTUtMTIuMDcyLDE2Ljc0OXY0OS4wNjhoMTU4Ljg5Nw0KCXYtNDkuMDY4YzAtNy41OTktNC44NjMtMTQuMzQ2LTEyLjA3Mi0xNi43NDlMMTMyLjQxNCwxMTQuNzU5eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0Q3REVFRDsiIGQ9Ik0xNDkuNDk1LDEyMC40NTJsLTE3LjA4MS01LjY5NEg3OS40NDhsLTE3LjA4MSw1LjY5NGMyLjgxOSwyMS42NTcsNDMuNTY0LDQ3LjI3Miw0My41NjQsNDcuMjcyDQoJUzE0Ni42NzYsMTQyLjExLDE0OS40OTUsMTIwLjQ1MnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM1QjVENkU7IiBkPSJNMTA1LjkzMSwxNjcuNzI0YzAsMCwzLjY2My0yLjMxNSw4LjgyOC02LjA5di0zOC4wNDhIOTcuMTAzdjM4LjA0OA0KCUMxMDIuMjY4LDE2NS40MDksMTA1LjkzMSwxNjcuNzI0LDEwNS45MzEsMTY3LjcyNHoiLz4NCjxyZWN0IHg9Ijc5LjQ0OCIgeT0iODguMjc2IiBzdHlsZT0iZmlsbDojQjQ4NzY0OyIgd2lkdGg9IjUyLjk2NiIgaGVpZ2h0PSIzNS4zMSIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0MzOTc3MjsiIGQ9Ik03MC42MjEsNDQuMTM4djM0LjY4OWMwLDUuOTAzLDIuNzIzLDExLjQxNSw3LjI1NywxNC42OWwxMy4wODIsOS40NDkNCgljMi42NzcsMS45MzMsNS44MjMsMi45NjUsOS4wNDEsMi45NjVoMTEuODYxYzMuMjE4LDAsNi4zNjItMS4wMzIsOS4wMzktMi45NjVsMTMuMDgyLTkuNDQ5YzQuNTM0LTMuMjc0LDcuMjU3LTguNzg3LDcuMjU3LTE0LjY5DQoJVjUyLjk2NkM5Ny4xMDMsNTIuOTY2LDcwLjYyMSw0NC4xMzgsNzAuNjIxLDQ0LjEzOHoiLz4NCjxnPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNFNEVBRjY7IiBwb2ludHM9IjcwLjYyMSwxMjMuNTg2IDk3LjEwMywxNDEuMjQxIDEwNS45MzEsMTIzLjU4NiA3OS40NDgsMTA1LjkzMSAJIi8+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0U0RUFGNjsiIHBvaW50cz0iMTA1LjkzMSwxMjMuNTg2IDExNC43NTksMTQxLjI0MSAxNDEuMjQxLDEyMy41ODYgMTMyLjQxNCwxMDUuOTMxIAkiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM0QjVGOTE7IiBkPSJNMTU4Ljg5NywxOTQuMjA3aDI2LjQ4M3YtNDkuMDY4YzAtMy41NTgtMS4xNDYtNi44ODEtMy4wMTktOS43MDZsLTE4LjI5MywxOC4yOTMNCgkJYy0zLjMxMSwzLjMxMS01LjE3MSw3LjgwMS01LjE3MSwxMi40ODRWMTk0LjIwN3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNEI1RjkxOyIgZD0iTTUyLjk2NiwxOTQuMjA3SDI2LjQ4M3YtNDkuMDY4YzAtMy41NTgsMS4xNDYtNi44ODEsMy4wMTktOS43MDZsMTguMjkzLDE4LjI5Mw0KCQljMy4zMTEsMy4zMTEsNS4xNzEsNy44MDEsNS4xNzEsMTIuNDg0VjE5NC4yMDd6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojNTUzNzMyOyIgZD0iTTQ0MS4zNzksNjEuNzkzaC03MC42MjFWMzUuMzFjMC0xNC42MjYsMTEuODU3LTI2LjQ4MywyNi40ODMtMjYuNDgzaDE3LjY1NQ0KCWMxNC42MjYsMCwyNi40ODMsMTEuODU3LDI2LjQ4MywyNi40ODNWNjEuNzkzeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzcwNzQ4NzsiIGQ9Ik00MzIuNTUyLDExNC43NTloLTUyLjk2NmwtNDAuODk0LDEzLjYzMWMtNy4yMDksMi40MDMtMTIuMDcyLDkuMTUtMTIuMDcyLDE2Ljc0OXY0OS4wNjhoMTU4Ljg5Nw0KCXYtNDkuMDY4YzAtNy41OTktNC44NjMtMTQuMzQ2LTEyLjA3Mi0xNi43NDlMNDMyLjU1MiwxMTQuNzU5eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0U2QjQ3RDsiIGQ9Ik00MDYuMDY5LDE0MS4yNDFMNDA2LjA2OSwxNDEuMjQxYy0xNC42MjYsMC0yNi40ODMtMTEuODU3LTI2LjQ4My0yNi40ODNWODguMjc2aDUyLjk2NnYyNi40ODMNCglDNDMyLjU1MiwxMjkuMzg1LDQyMC42OTUsMTQxLjI0MSw0MDYuMDY5LDE0MS4yNDF6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRjBDODkxOyIgZD0iTTM3MC43NTksNDQuMTM4djM0LjY4OWMwLDUuOTAzLDIuNzIzLDExLjQxNSw3LjI1NywxNC42OWwxMy4wODIsOS40NDkNCgljMi42NzcsMS45MzMsNS44MjMsMi45NjUsOS4wMzksMi45NjVoMTEuODYxYzMuMjE4LDAsNi4zNjItMS4wMzIsOS4wNDEtMi45NjVsMTMuMDgyLTkuNDQ5YzQuNTM0LTMuMjc0LDcuMjU3LTguNzg3LDcuMjU3LTE0LjY5DQoJVjUyLjk2NkMzOTcuMjQxLDUyLjk2NiwzNzAuNzU5LDQ0LjEzOCwzNzAuNzU5LDQ0LjEzOHoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM1QjVENkU7IiBkPSJNNDU5LjAzNCwxOTQuMjA3aDI2LjQ4M3YtNDkuMDY4YzAtMy41NTgtMS4xNDYtNi44ODEtMy4wMTktOS43MDZsLTE4LjI5MywxOC4yOTMNCgkJYy0zLjMxMSwzLjMxMS01LjE3MSw3LjgwMS01LjE3MSwxMi40ODRWMTk0LjIwN3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNUI1RDZFOyIgZD0iTTM1My4xMDMsMTk0LjIwN2gtMjYuNDgzdi00OS4wNjhjMC0zLjU1OCwxLjE0Ni02Ljg4MSwzLjAxOS05LjcwNmwxOC4yOTMsMTguMjkzDQoJCWMzLjMxMSwzLjMxMSw1LjE3MSw3LjgwMSw1LjE3MSwxMi40ODRWMTk0LjIwN3oiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
            />
          </div>
          <div className="e2">
            <h5 className="text">Gestion des Jurys</h5>
          </div>
        </Paper>
        <Paper
          component={Link}
          style={{ textDecoration: "unset" }}
          to={this.props.type + "/planning"}
          className="card"
          elevation={3}
        >
          <div className="e1">
            <h5 className="text">Planning des soutenances</h5>
          </div>
          <div className="e2">
            <img
              className="img"
              alt=""
              style={{ height: "80px", width: "80px" }}
              src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PHBhdGggZD0ibTI0Ni4yMyA0MjYuNjY2aC0xOTUuMDM5Yy0xOC44NTEgMC0zNC4xMzItMTUuMjgyLTM0LjEzMi0zNC4xMzJ2LTM0LjEzNGgyNjEuOTU3eiIgZmlsbD0iI2QzZGNmYiIvPjxwYXRoIGQ9Im00NjAuODI1IDE1My42djE0My4zOTggOTUuNTM0aC00MDkuNjM0Yy0xOC44NTEgMC0zNC4xMzItMTUuMjgyLTM0LjEzMi0zNC4xMzN2LTIwNC43OTlsMjM4Ljk1LTg1LjMzNHoiIGZpbGw9IiNlYmY1ZmMiLz48ZyBmaWxsPSIjM2M1OGEwIj48cGF0aCBkPSJtNzcuMzM2IDIyMS44NjdoLTE4LjEzM2MtNC40MTggMC04LTMuNTgyLTgtOHYtMTguMTMzYzAtNC40MTggMy41ODItOCA4LThoMTguMTMzYzQuNDE4IDAgOCAzLjU4MiA4IDh2MTguMTMzYzAgNC40MTgtMy41ODIgOC04IDh6Ii8+PHBhdGggZD0ibTE0NS42MDMgMjIxLjg2N2gtMTguMTMzYy00LjQxOCAwLTgtMy41ODItOC04di0xOC4xMzNjMC00LjQxOCAzLjU4Mi04IDgtOGgxOC4xMzNjNC40MTggMCA4IDMuNTgyIDggOHYxOC4xMzNjMCA0LjQxOC0zLjU4MiA4LTggOHoiLz48cGF0aCBkPSJtMjEzLjg2OSAyMjEuODY3aC0xOC4xMzNjLTQuNDE4IDAtOC0zLjU4Mi04LTh2LTE4LjEzM2MwLTQuNDE4IDMuNTgyLTggOC04aDE4LjEzM2M0LjQxOCAwIDggMy41ODIgOCA4djE4LjEzM2MwIDQuNDE4LTMuNTgxIDgtOCA4eiIvPjxwYXRoIGQ9Im0yODIuMTM2IDIyMS44NjdoLTE4LjEzM2MtNC40MTggMC04LTMuNTgyLTgtOHYtMTguMTMzYzAtNC40MTggMy41ODItOCA4LThoMTguMTMzYzQuNDE4IDAgOCAzLjU4MiA4IDh2MTguMTMzYzAgNC40MTgtMy41ODIgOC04IDh6Ii8+PHBhdGggZD0ibTM1MC4zOTEgMjIxLjg2N2gtMTguMTMzYy00LjQxOCAwLTgtMy41ODItOC04di0xOC4xMzNjMC00LjQxOCAzLjU4Mi04IDgtOGgxOC4xMzNjNC40MTggMCA4IDMuNTgyIDggOHYxOC4xMzNjMCA0LjQxOC0zLjU4MSA4LTggOHoiLz48cGF0aCBkPSJtNDE4LjY1OCAyMjEuODY3aC0xOC4xMzNjLTQuNDE4IDAtOC0zLjU4Mi04LTh2LTE4LjEzM2MwLTQuNDE4IDMuNTgyLTggOC04aDE4LjEzM2M0LjQxOCAwIDggMy41ODIgOCA4djE4LjEzM2MwIDQuNDE4LTMuNTgyIDgtOCA4eiIvPjxwYXRoIGQ9Im03Ny4zMzYgMjkwLjEzM2gtMTguMTMzYy00LjQxOCAwLTgtMy41ODItOC04di0xOC4xMzNjMC00LjQxOCAzLjU4Mi04IDgtOGgxOC4xMzNjNC40MTggMCA4IDMuNTgyIDggOHYxOC4xMzNjMCA0LjQxOS0zLjU4MiA4LTggOHoiLz48cGF0aCBkPSJtMTQ1LjYwMyAyOTAuMTMzaC0xOC4xMzNjLTQuNDE4IDAtOC0zLjU4Mi04LTh2LTE4LjEzM2MwLTQuNDE4IDMuNTgyLTggOC04aDE4LjEzM2M0LjQxOCAwIDggMy41ODIgOCA4djE4LjEzM2MwIDQuNDE5LTMuNTgyIDgtOCA4eiIvPjxwYXRoIGQ9Im0yMTMuODY5IDI5MC4xMzNoLTE4LjEzM2MtNC40MTggMC04LTMuNTgyLTgtOHYtMTguMTMzYzAtNC40MTggMy41ODItOCA4LThoMTguMTMzYzQuNDE4IDAgOCAzLjU4MiA4IDh2MTguMTMzYzAgNC40MTktMy41ODEgOC04IDh6Ii8+PHBhdGggZD0ibTI5MC4xMzYgMjkwLjEzM3YtMjUuNmMwLTQuNzEzLTMuODItOC41MzMtOC41MzMtOC41MzNoLTE3LjA2N2MtNC43MTMgMC04LjUzMyAzLjgyLTguNTMzIDguNTMzdjE3LjA2N2MwIDQuNzEzIDMuODIxIDguNTMzIDguNTMzIDguNTMzeiIvPjxwYXRoIGQ9Im03Ny4zMzYgMzU4LjRoLTE4LjEzM2MtNC40MTggMC04LTMuNTgyLTgtOHYtMTguMTMzYzAtNC40MTggMy41ODItOCA4LThoMTguMTMzYzQuNDE4IDAgOCAzLjU4MiA4IDh2MTguMTMzYzAgNC40MTgtMy41ODIgOC04IDh6Ii8+PHBhdGggZD0ibTE0NS42MDMgMzU4LjRoLTE4LjEzM2MtNC40MTggMC04LTMuNTgyLTgtOHYtMTguMTMzYzAtNC40MTggMy41ODItOCA4LThoMTguMTMzYzQuNDE4IDAgOCAzLjU4MiA4IDh2MTguMTMzYzAgNC40MTgtMy41ODIgOC04IDh6Ii8+PHBhdGggZD0ibTIxMy44NjkgMzU4LjRoLTE4LjEzM2MtNC40MTggMC04LTMuNTgyLTgtOHYtMTguMTMzYzAtNC40MTggMy41ODItOCA4LThoMTguMTMzYzQuNDE4IDAgOCAzLjU4MiA4IDh2MTguMTMzYzAgNC40MTgtMy41ODEgOC04IDh6Ii8+PC9nPjxwYXRoIGQ9Im00MTguNDE3IDE4Ny43MzNoLTE3LjY1Yy0xLjA2OCAwLTIuMDg1LjIxLTMuMDIyLjU3OSAzLjA1NSAxLjIwNiA1LjIxOSA0LjE3OCA1LjIxOSA3LjY2MnYxNy42NWMwIDMuNDg0LTIuMTY1IDYuNDU2LTUuMjE5IDcuNjYyLjkzNy4zNyAxLjk1NC41OCAzLjAyMi41OGgxNy42NWM0LjU1MiAwIDguMjQyLTMuNjkgOC4yNDItOC4yNDF2LTE3LjY1Yy0uMDAxLTQuNTUyLTMuNjkxLTguMjQyLTguMjQyLTguMjQyeiIgZmlsbD0iIzJhNDI4YyIvPjxwYXRoIGQ9Im0zNTAuMTUgMTg3LjczM2gtMTcuNjVjLTEuMDY4IDAtMi4wODUuMjEtMy4wMjIuNTc5IDMuMDU1IDEuMjA2IDUuMjE5IDQuMTc4IDUuMjE5IDcuNjYydjE3LjY1YzAgMy40ODQtMi4xNjUgNi40NTYtNS4yMTkgNy42NjIuOTM3LjM3IDEuOTU0LjU4IDMuMDIyLjU4aDE3LjY1YzQuNTUyIDAgOC4yNDEtMy42OSA4LjI0MS04LjI0MXYtMTcuNjVjMC00LjU1Mi0zLjY4OS04LjI0Mi04LjI0MS04LjI0MnoiIGZpbGw9IiMyYTQyOGMiLz48cGF0aCBkPSJtMjgxLjg5NSAxODcuNzMzaC0xNy42NWMtMS4wNjggMC0yLjA4NS4yMS0zLjAyMi41NzkgMy4wNTUgMS4yMDYgNS4yMiA0LjE3OCA1LjIyIDcuNjYydjE3LjY1YzAgMy40ODQtMi4xNjUgNi40NTYtNS4yMiA3LjY2Mi45MzcuMzcgMS45NTQuNTggMy4wMjIuNThoMTcuNjVjNC41NTIgMCA4LjI0Mi0zLjY5IDguMjQyLTguMjQxdi0xNy42NWMtLjAwMS00LjU1Mi0zLjY5MS04LjI0Mi04LjI0Mi04LjI0MnoiIGZpbGw9IiMyYTQyOGMiLz48cGF0aCBkPSJtMjEzLjYyOCAxODcuNzMzaC0xNy42NWMtMS4wNjggMC0yLjA4NS4yMS0zLjAyMi41NzkgMy4wNTUgMS4yMDYgNS4yMiA0LjE3OCA1LjIyIDcuNjYydjE3LjY1YzAgMy40ODQtMi4xNjUgNi40NTYtNS4yMiA3LjY2Mi45MzcuMzcgMS45NTQuNTggMy4wMjIuNThoMTcuNjVjNC41NTIgMCA4LjI0Mi0zLjY5IDguMjQyLTguMjQxdi0xNy42NWMtLjAwMS00LjU1Mi0zLjY5LTguMjQyLTguMjQyLTguMjQyeiIgZmlsbD0iIzJhNDI4YyIvPjxwYXRoIGQ9Im0xNDUuMzYxIDE4Ny43MzNoLTE3LjY1Yy0xLjA2OCAwLTIuMDg1LjIxLTMuMDIyLjU3OSAzLjA1NSAxLjIwNiA1LjIxOSA0LjE3OCA1LjIxOSA3LjY2MnYxNy42NWMwIDMuNDg0LTIuMTY1IDYuNDU2LTUuMjE5IDcuNjYyLjkzNy4zNyAxLjk1NC41OCAzLjAyMi41OGgxNy42NWM0LjU1MiAwIDguMjQyLTMuNjkgOC4yNDItOC4yNDF2LTE3LjY1YzAtNC41NTItMy42OS04LjI0Mi04LjI0Mi04LjI0MnoiIGZpbGw9IiMyYTQyOGMiLz48cGF0aCBkPSJtNzcuMDk1IDE4Ny43MzNoLTE3LjY1Yy0xLjA2OCAwLTIuMDg1LjIxLTMuMDIyLjU3OSAzLjA1NSAxLjIwNiA1LjIyIDQuMTc4IDUuMjIgNy42NjJ2MTcuNjVjMCAzLjQ4NC0yLjE2NSA2LjQ1Ni01LjIyIDcuNjYyLjkzNy4zNyAxLjk1NC41OCAzLjAyMi41OGgxNy42NWM0LjU1MiAwIDguMjQyLTMuNjkgOC4yNDItOC4yNDF2LTE3LjY1Yy0uMDAxLTQuNTUyLTMuNjkxLTguMjQyLTguMjQyLTguMjQyeiIgZmlsbD0iIzJhNDI4YyIvPjxwYXRoIGQ9Im03Ny4wOTUgMjU2aC0xNy42NWMtMS4wNjggMC0yLjA4NS4yMS0zLjAyMi41NzkgMy4wNTUgMS4yMDYgNS4yMiA0LjE3OCA1LjIyIDcuNjYydjE3LjY1MWMwIDMuNDg0LTIuMTY1IDYuNDU2LTUuMjIgNy42NjIuOTM3LjM3IDEuOTU0LjU4IDMuMDIyLjU4aDE3LjY1YzQuNTUyIDAgOC4yNDItMy42OSA4LjI0Mi04LjI0MXYtMTcuNjUxYy0uMDAxLTQuNTUyLTMuNjkxLTguMjQyLTguMjQyLTguMjQyeiIgZmlsbD0iIzJhNDI4YyIvPjxwYXRoIGQ9Im03Ny4wOTUgMzI0LjI2N2gtMTcuNjVjLTEuMDY4IDAtMi4wODUuMjEtMy4wMjIuNTc5IDMuMDU1IDEuMjA2IDUuMjIgNC4xNzggNS4yMiA3LjY2MnYxNy42NTFjMCAzLjQ4NC0yLjE2NSA2LjQ1Ni01LjIyIDcuNjYyLjkzNy4zNyAxLjk1NC41OCAzLjAyMi41OGgxNy42NWM0LjU1MiAwIDguMjQyLTMuNjkgOC4yNDItOC4yNDF2LTE3LjY1MWMtLjAwMS00LjU1My0zLjY5MS04LjI0Mi04LjI0Mi04LjI0MnoiIGZpbGw9IiMyYTQyOGMiLz48cGF0aCBkPSJtMTQ1LjM2MSAyNTZoLTE3LjY1Yy0xLjA2OCAwLTIuMDg1LjIxLTMuMDIyLjU3OSAzLjA1NSAxLjIwNiA1LjIxOSA0LjE3OCA1LjIxOSA3LjY2MnYxNy42NTFjMCAzLjQ4NC0yLjE2NSA2LjQ1Ni01LjIxOSA3LjY2Mi45MzcuMzcgMS45NTQuNTggMy4wMjIuNThoMTcuNjVjNC41NTIgMCA4LjI0Mi0zLjY5IDguMjQyLTguMjQxdi0xNy42NTFjMC00LjU1Mi0zLjY5LTguMjQyLTguMjQyLTguMjQyeiIgZmlsbD0iIzJhNDI4YyIvPjxwYXRoIGQ9Im0xNDUuMzYxIDMyNC4yNjdoLTE3LjY1Yy0xLjA2OCAwLTIuMDg1LjIxLTMuMDIyLjU3OSAzLjA1NSAxLjIwNiA1LjIxOSA0LjE3OCA1LjIxOSA3LjY2MnYxNy42NTFjMCAzLjQ4NC0yLjE2NSA2LjQ1Ni01LjIxOSA3LjY2Mi45MzcuMzcgMS45NTQuNTggMy4wMjIuNThoMTcuNjVjNC41NTIgMCA4LjI0Mi0zLjY5IDguMjQyLTguMjQxdi0xNy42NTFjMC00LjU1My0zLjY5LTguMjQyLTguMjQyLTguMjQyeiIgZmlsbD0iIzJhNDI4YyIvPjxwYXRoIGQ9Im0yMTMuNjI4IDI1NmgtMTcuNjVjLTEuMDY4IDAtMi4wODUuMjEtMy4wMjIuNTc5IDMuMDU1IDEuMjA2IDUuMjIgNC4xNzggNS4yMiA3LjY2MnYxNy42NTFjMCAzLjQ4NC0yLjE2NSA2LjQ1Ni01LjIyIDcuNjYyLjkzNy4zNyAxLjk1NC41OCAzLjAyMi41OGgxNy42NWM0LjU1MiAwIDguMjQyLTMuNjkgOC4yNDItOC4yNDF2LTE3LjY1MWMtLjAwMS00LjU1Mi0zLjY5LTguMjQyLTguMjQyLTguMjQyeiIgZmlsbD0iIzJhNDI4YyIvPjxwYXRoIGQ9Im0yOTAuMTM2IDI5MC4xMzN2LTI1Ljg5MmMwLTQuNTUyLTMuNjktOC4yNDEtOC4yNDItOC4yNDFoLTE3LjY1Yy0xLjA2OCAwLTIuMDg1LjIxLTMuMDIyLjU3OSAzLjA1NSAxLjIwNiA1LjIyIDQuMTc4IDUuMjIgNy42NjJ2MTcuNjUxYzAgMy40ODQtMi4xNjUgNi40NTYtNS4yMiA3LjY2Mi45MzcuMzcgMS45NTQuNTggMy4wMjIuNThoMjUuODkyeiIgZmlsbD0iIzJhNDI4YyIvPjxwYXRoIGQ9Im0yMTMuNjI4IDMyNC4yNjdoLTE3LjY1Yy0xLjA2OCAwLTIuMDg1LjIxLTMuMDIyLjU3OSAzLjA1NSAxLjIwNiA1LjIyIDQuMTc4IDUuMjIgNy42NjJ2MTcuNjUxYzAgMy40ODQtMi4xNjUgNi40NTYtNS4yMiA3LjY2Mi45MzcuMzcgMS45NTQuNTggMy4wMjIuNThoMTcuNjVjNC41NTIgMCA4LjI0Mi0zLjY5IDguMjQyLTguMjQxdi0xNy42NTFjLS4wMDEtNC41NTMtMy42OS04LjI0Mi04LjI0Mi04LjI0MnoiIGZpbGw9IiMyYTQyOGMiLz48cGF0aCBkPSJtNDM3LjExNCAxNDMuNzIxdjE1My4yNzcgOTUuNTM1aDIzLjcxMXYtOTUuNTM1LTE0My4zOTh6IiBmaWxsPSIjZDNkY2ZiIi8+PHBhdGggZD0ibTQ2MC44MjUgMTUzLjZ2LTg1LjMzNGMwLTE4Ljg1MS0xNS4yODItMzQuMTMyLTM0LjEzMi0zNC4xMzJoLTM3NS41MDJjLTE4Ljg1MSAwLTM0LjEzMiAxNS4yODEtMzQuMTMyIDM0LjEzMnY4NS4zMzR6IiBmaWxsPSIjZmY0MTU1Ii8+PGc+PGc+PGc+PHBhdGggZD0ibTEyNC42MDkgNzUuOTkzaC0yMi4yMTdjLTQuMjY4IDAtNy43MjYtMy40NTktNy43MjYtNy43MjZzMy40NTktNy43MjYgNy43MjYtNy43MjZoMjIuMjE3YzQuMjY4IDAgNy43MjYgMy40NTkgNy43MjYgNy43MjZzLTMuNDU5IDcuNzI2LTcuNzI2IDcuNzI2eiIgZmlsbD0iI2U4MDA1NCIvPjwvZz48Zz48cGF0aCBkPSJtMTc5LjE5MSA3NS45OTNoLTIyLjIxN2MtNC4yNjggMC03LjcyNi0zLjQ1OS03LjcyNi03LjcyNnMzLjQ1OS03LjcyNiA3LjcyNi03LjcyNmgyMi4yMTdjNC4yNjggMCA3LjcyNiAzLjQ1OSA3LjcyNiA3LjcyNnMtMy40NTggNy43MjYtNy43MjYgNy43MjZ6IiBmaWxsPSIjZTgwMDU0Ii8+PC9nPjxnPjxwYXRoIGQ9Im0zMjAuODg3IDc1Ljk5M2gtMjIuMjE4Yy00LjI2OCAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDIyLjIxOGM0LjI2OCAwIDcuNzI2IDMuNDU5IDcuNzI2IDcuNzI2cy0zLjQ1OCA3LjcyNi03LjcyNiA3LjcyNnoiIGZpbGw9IiNlODAwNTQiLz48L2c+PGc+PHBhdGggZD0ibTM3NS40NyA3NS45OTNoLTIyLjIxOGMtNC4yNjggMC03LjcyNi0zLjQ1OS03LjcyNi03LjcyNnMzLjQ1OS03LjcyNiA3LjcyNi03LjcyNmgyMi4yMThjNC4yNjggMCA3LjcyNiAzLjQ1OSA3LjcyNiA3LjcyNnMtMy40NTkgNy43MjYtNy43MjYgNy43MjZ6IiBmaWxsPSIjZTgwMDU0Ii8+PC9nPjwvZz48L2c+PHBhdGggZD0ibTE2Mi4xMjUgNjRjMCAxMS43ODItOS41NTEgMjEuMzMzLTIxLjMzMyAyMS4zMzNzLTIxLjMzMy05LjU1MS0yMS4zMzMtMjEuMzMzdi00Mi42NjdjLS4wMDEtMTEuNzgyIDkuNTUtMjEuMzMzIDIxLjMzMi0yMS4zMzNzMjEuMzMzIDkuNTUxIDIxLjMzMyAyMS4zMzN2NDIuNjY3eiIgZmlsbD0iI2ViZjVmYyIvPjxwYXRoIGQ9Im0zNTguNDAzIDY0YzAgMTEuNzgyLTkuNTUxIDIxLjMzMy0yMS4zMzMgMjEuMzMzcy0yMS4zMzQtOS41NTEtMjEuMzM0LTIxLjMzM3YtNDIuNjY3YzAtMTEuNzgyIDkuNTUxLTIxLjMzMyAyMS4zMzMtMjEuMzMzczIxLjMzMyA5LjU1MSAyMS4zMzMgMjEuMzMzdjQyLjY2N3oiIGZpbGw9IiNlYmY1ZmMiLz48cGF0aCBkPSJtMzM3LjA2OSAwYy00LjM4IDAtOC40NDggMS4zMjQtMTEuODM2IDMuNTg4IDUuNzI1IDMuODI2IDkuNDk4IDEwLjM0MyA5LjQ5OCAxNy43NDZ2NDIuNjY2YzAgNy40MDItMy43NzMgMTMuOTItOS40OTggMTcuNzQ2IDMuMzg3IDIuMjYzIDcuNDU2IDMuNTg4IDExLjgzNiAzLjU4OCAxMS43ODIgMCAyMS4zMzMtOS41NTEgMjEuMzMzLTIxLjMzM3YtNDIuNjY4Yy4wMDEtMTEuNzgyLTkuNTUtMjEuMzMzLTIxLjMzMy0yMS4zMzN6IiBmaWxsPSIjZDNkY2ZiIi8+PHBhdGggZD0ibTE0MC43OTEgMGMtNC4zOCAwLTguNDQ4IDEuMzI0LTExLjgzNiAzLjU4OCA1LjcyNSAzLjgyNiA5LjQ5OCAxMC4zNDMgOS40OTggMTcuNzQ2djQyLjY2NmMwIDcuNDAyLTMuNzczIDEzLjkyLTkuNDk4IDE3Ljc0NiAzLjM4NyAyLjI2MyA3LjQ1NiAzLjU4OCAxMS44MzYgMy41ODggMTEuNzgyIDAgMjEuMzMzLTkuNTUxIDIxLjMzMy0yMS4zMzN2LTQyLjY2OGMuMDAxLTExLjc4Mi05LjU1LTIxLjMzMy0yMS4zMzMtMjEuMzMzeiIgZmlsbD0iI2QzZGNmYiIvPjxwYXRoIGQ9Im00MjYuNjkzIDM0LjEzM2gtMjMuNzAzYzE4Ljg1MSAwIDM0LjEzMiAxNS4yODEgMzQuMTMyIDM0LjEzMnY4NS4zMzVoMjMuNzAydi04NS4zMzRjLjAwMS0xOC44NTEtMTUuMjgxLTM0LjEzMy0zNC4xMzEtMzQuMTMzeiIgZmlsbD0iI2U4MDA1NCIvPjxwYXRoIGQ9Im0xNy4wNTggMTExLjc0aDQ0My43Njd2MTUuNDUzaC00NDMuNzY3eiIgZmlsbD0iI2U4MDA1NCIvPjwvZz48Y2lyY2xlIGN4PSIzNjYuOTQyIiBjeT0iMzg0IiBmaWxsPSIjNGZhYmY3IiByPSIxMjgiLz48Y2lyY2xlIGN4PSIzNjYuOTQyIiBjeT0iMzg0IiBmaWxsPSIjZWJmNWZjIiByPSI5My44NjciLz48Zz48Zz48cGF0aCBkPSJtMzY2Ljk0MiAzNzQuNjU5Yy00LjI2OCAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2di00Mi42NjdjMC00LjI2NyAzLjQ1OS03LjcyNiA3LjcyNi03LjcyNiA0LjI2OCAwIDcuNzI2IDMuNDU5IDcuNzI2IDcuNzI2djQyLjY2N2MwIDQuMjY3LTMuNDU5IDcuNzI2LTcuNzI2IDcuNzI2eiIgZmlsbD0iIzNjNThhMCIvPjwvZz48L2c+PGc+PGc+PHBhdGggZD0ibTQwOS42MDkgMzkxLjcyNmgtMjUuNjAxYy00LjI2OCAwLTcuNzI2LTMuNDU5LTcuNzI2LTcuNzI2czMuNDU5LTcuNzI2IDcuNzI2LTcuNzI2aDI1LjYwMWM0LjI2OCAwIDcuNzI2IDMuNDU5IDcuNzI2IDcuNzI2cy0zLjQ1OSA3LjcyNi03LjcyNiA3LjcyNnoiIGZpbGw9IiMzYzU4YTAiLz48L2c+PC9nPjxwYXRoIGQ9Im0zNjYuOTQyIDI1NmMtMy45OTUgMC03Ljk0NS4xOTMtMTEuODQ3LjU1MSA2NS4xMzcgNS45NzkgMTE2LjE1MiA2MC43NTIgMTE2LjE1MiAxMjcuNDQ5cy01MS4wMTYgMTIxLjQ3LTExNi4xNTMgMTI3LjQ0OWMzLjkwMi4zNTggNy44NTIuNTUxIDExLjg0Ny41NTEgNzAuNjkyIDAgMTI4LTU3LjMwOCAxMjgtMTI4cy01Ny4zMDctMTI4LTEyNy45OTktMTI4eiIgZmlsbD0iIzE4ODZlYSIvPjxwYXRoIGQ9Im0zNjYuOTQyIDI5MC4xMzNjLTQuMDEgMC03Ljk2MS4yNTMtMTEuODM5Ljc0MSA0Ni4yNTIgNS44MjEgODIuMDI4IDQ1LjI5NSA4Mi4wMjggOTMuMTI2cy0zNS43NzYgODcuMzA1LTgyLjAyOCA5My4xMjZjMy44NzguNDg4IDcuODI5Ljc0MSAxMS44MzkuNzQxIDUxLjg0MSAwIDkzLjg2Ny00Mi4wMjYgOTMuODY3LTkzLjg2N3MtNDIuMDI2LTkzLjg2Ny05My44NjctOTMuODY3eiIgZmlsbD0iI2QzZGNmYiIvPjxjaXJjbGUgY3g9IjM2Ni45NDIiIGN5PSIzODQiIGZpbGw9IiNmZmRkNDAiIHI9IjE3LjA2NyIvPjwvZz48L3N2Zz4="
            />
          </div>
        </Paper>
        <Paper
          component={Link}
          style={{ textDecoration: "unset" }}
          to={this.props.type + "/archive"}
          className="card"
          elevation={3}
        >
          <div className="e1">
            <img
              className="img"
              alt=""
              style={{ height: "80px", width: "80px" }}
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDY4LjI5MyA0NjguMjkzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjguMjkzIDQ2OC4yOTM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQ0Q0NjI7IiBkPSJNMTA5LjgwNCw0NDkuNDg3SDI0Ljk3NkMxMS4xODIsNDQ5LjQ4NywwLDQzOC4zMDUsMCw0MjQuNTExVjUzLjI3OA0KCWMwLTEzLjc5NCwxMS4xODItMjQuOTc2LDI0Ljk3Ni0yNC45NzZoODQuODI4YzEzLjc5NCwwLDI0Ljk3NiwxMS4xODIsMjQuOTc2LDI0Ljk3NnYzNzEuMjM0DQoJQzEzNC43NzksNDM4LjMwNSwxMjMuNTk3LDQ0OS40ODcsMTA5LjgwNCw0NDkuNDg3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0VCRjBGMzsiIGQ9Ik0yOC4wNzksMTc5Ljk5NVY2OC44NjdjMC02Ljg5Nyw1LjU5MS0xMi40ODgsMTIuNDg4LTEyLjQ4OGg1My42NDYNCgljNi44OTcsMCwxMi40ODgsNS41OTEsMTIuNDg4LDEyLjQ4OHYxMTEuMTI4YzAsNi44OTctNS41OTEsMTIuNDg4LTEyLjQ4OCwxMi40ODhINDAuNTY3DQoJQzMzLjY3LDE5Mi40ODMsMjguMDc5LDE4Ni44OTIsMjguMDc5LDE3OS45OTV6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNjQ3OThBOyIgZD0iTTg1LjE2MSw0MjAuMjU1SDQ5LjYxOWMtMTAuMzQ1LDAtMTguNzMyLTguMzg2LTE4LjczMi0xOC43MzJ2LTM1LjU0Mg0KCWMwLTEwLjM0NSw4LjM4Ni0xOC43MzIsMTguNzMyLTE4LjczMmgzNS41NDJjMTAuMzQ1LDAsMTguNzMyLDguMzg2LDE4LjczMiwxOC43MzJ2MzUuNTQyDQoJQzEwMy44OTIsNDExLjg2OCw5NS41MDYsNDIwLjI1NSw4NS4xNjEsNDIwLjI1NXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzQTU1NkE7IiBkPSJNOTUuNTE1LDQxMi41NDZINTYuMjA0Yy05LjMwNSwwLTE2Ljg0Ny03LjU0Mi0xNi44NDctMTYuODQ3di0zOS4zMTENCgljMC0yLjg2NSwwLjc4Mi01LjUyMiwyLjA0NC03Ljg4NGMtNi4xNjEsMi41MDYtMTAuNTE0LDguNTMyLTEwLjUxNCwxNS41OTN2MzkuMzExYzAsOS4zMDUsNy41NDMsMTYuODQ3LDE2Ljg0NywxNi44NDdoMzkuMzExDQoJYzYuNDQsMCwxMS45NjgtMy42NTQsMTQuODAzLTguOTYzQzk5Ljg5LDQxMi4wODgsOTcuNzU4LDQxMi41NDYsOTUuNTE1LDQxMi41NDZ6Ii8+DQo8Zz4NCgk8cmVjdCB4PSI0NC45MjUiIHk9IjExNi4wMTIiIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiB3aWR0aD0iNDQuOTI1IiBoZWlnaHQ9IjE2Ljg0NiIvPg0KCTxyZWN0IHg9IjQ0LjkyNSIgeT0iODIuMzEzIiBzdHlsZT0iZmlsbDojNjQ3OThBOyIgd2lkdGg9IjQ0LjkyNSIgaGVpZ2h0PSIxNi44NDYiLz4NCgk8cmVjdCB4PSI0NC45MjUiIHk9IjE0OS43MDQiIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiB3aWR0aD0iNDQuOTI1IiBoZWlnaHQ9IjE2Ljg0NiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6IzQ0QzRBMTsiIGQ9Ik00NDMuMzE3LDQ0OS40ODdoLTg0LjgyOGMtMTMuNzk0LDAtMjQuOTc2LTExLjE4Mi0yNC45NzYtMjQuOTc2VjUzLjI3OA0KCWMwLTEzLjc5NCwxMS4xODItMjQuOTc2LDI0Ljk3Ni0yNC45NzZoODQuODI4YzEzLjc5NCwwLDI0Ljk3NiwxMS4xODIsMjQuOTc2LDI0Ljk3NnYzNzEuMjM0DQoJQzQ2OC4yOTMsNDM4LjMwNSw0NTcuMTExLDQ0OS40ODcsNDQzLjMxNyw0NDkuNDg3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0VCRjBGMzsiIGQ9Ik0zNjEuNTkyLDE3OS45OTVWNjguODY3YzAtNi44OTcsNS41OTEtMTIuNDg4LDEyLjQ4OC0xMi40ODhoNTMuNjQ2DQoJYzYuODk3LDAsMTIuNDg4LDUuNTkxLDEyLjQ4OCwxMi40ODh2MTExLjEyOGMwLDYuODk3LTUuNTkxLDEyLjQ4OC0xMi40ODgsMTIuNDg4SDM3NC4wOA0KCUMzNjcuMTgzLDE5Mi40ODMsMzYxLjU5MiwxODYuODkyLDM2MS41OTIsMTc5Ljk5NXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiBkPSJNNDE4LjY3NCw0MjAuMjU1aC0zNS41NDJjLTEwLjM0NSwwLTE4LjczMi04LjM4Ni0xOC43MzItMTguNzMydi0zNS41NDINCgljMC0xMC4zNDUsOC4zODYtMTguNzMyLDE4LjczMi0xOC43MzJoMzUuNTQyYzEwLjM0NSwwLDE4LjczMiw4LjM4NiwxOC43MzIsMTguNzMydjM1LjU0Mg0KCUM0MzcuNDA2LDQxMS44NjgsNDI5LjAxOSw0MjAuMjU1LDQxOC42NzQsNDIwLjI1NXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzQTU1NkE7IiBkPSJNNDI5LjAyOCw0MTIuNTQ2aC0zOS4zMTFjLTkuMzA1LDAtMTYuODQ3LTcuNTQyLTE2Ljg0Ny0xNi44NDd2LTM5LjMxMQ0KCWMwLTIuODY1LDAuNzgyLTUuNTIyLDIuMDQ0LTcuODg0Yy02LjE2MSwyLjUwNi0xMC41MTQsOC41MzItMTAuNTE0LDE1LjU5M3YzOS4zMTFjMCw5LjMwNSw3LjU0MywxNi44NDcsMTYuODQ3LDE2Ljg0N2gzOS4zMTENCgljNi40NCwwLDExLjk2OC0zLjY1NCwxNC44MDMtOC45NjNDNDMzLjQwNCw0MTIuMDg4LDQzMS4yNzIsNDEyLjU0Niw0MjkuMDI4LDQxMi41NDZ6Ii8+DQo8Zz4NCgk8cmVjdCB4PSIzNzguNDQzIiB5PSIxMTYuMDEyIiBzdHlsZT0iZmlsbDojNjQ3OThBOyIgd2lkdGg9IjQ0LjkyNSIgaGVpZ2h0PSIxNi44NDYiLz4NCgk8cmVjdCB4PSIzNzguNDQzIiB5PSI4Mi4zMTMiIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiB3aWR0aD0iNDQuOTI1IiBoZWlnaHQ9IjE2Ljg0NiIvPg0KCTxyZWN0IHg9IjM3OC40NDMiIHk9IjE0OS43MDQiIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiB3aWR0aD0iNDQuOTI1IiBoZWlnaHQ9IjE2Ljg0NiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6I0U1NjM1MzsiIGQ9Ik0yMzkuMzU5LDQ0OC43MDZsLTgzLjUzOS0xNC43M2MtMTMuNTg0LTIuMzk1LTIyLjY1NC0xNS4zNDktMjAuMjU5LTI4LjkzM2w2NC40NjQtMzY1LjU5NA0KCWMyLjM5NS0xMy41ODQsMTUuMzQ5LTIyLjY1NCwyOC45MzMtMjAuMjU5bDgzLjUzOSwxNC43M2MxMy41ODQsMi4zOTUsMjIuNjU0LDE1LjM0OSwyMC4yNTksMjguOTMzbC02NC40NjQsMzY1LjU5NA0KCUMyNjUuODk3LDQ0Mi4wMzEsMjUyLjk0Myw0NTEuMTAxLDIzOS4zNTksNDQ4LjcwNnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFQkYwRjM7IiBkPSJNMjA1LjY3MywxNjkuMTE3bDE5LjI5Ny0xMDkuNDRjMS4xOTgtNi43OTIsNy42NzUtMTEuMzI3LDE0LjQ2Ny0xMC4xM2w1Mi44MzEsOS4zMTUNCgljNi43OTIsMS4xOTgsMTEuMzI3LDcuNjc1LDEwLjEzLDE0LjQ2N2wtMTkuMjk3LDEwOS40NGMtMS4xOTgsNi43OTItNy42NzUsMTEuMzI3LTE0LjQ2NywxMC4xM2wtNTIuODMxLTkuMzE1DQoJQzIwOS4wMSwxODIuMzg2LDIwNC40NzUsMTc1LjkwOSwyMDUuNjczLDE2OS4xMTd6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojNjQ3OThBOyIgZD0iTTIyMC4xNjcsNDE1LjYzOGwtMzUuMDAyLTYuMTcyYy0xMC4xODgtMS43OTYtMTYuOTkxLTExLjUxMi0xNS4xOTQtMjEuN2w2LjE3Mi0zNS4wMDINCgljMS43OTYtMTAuMTg4LDExLjUxMi0xNi45OTEsMjEuNy0xNS4xOTRsMzUuMDAyLDYuMTcyYzEwLjE4OCwxLjc5NiwxNi45OTEsMTEuNTEyLDE1LjE5NCwyMS43bC02LjE3MiwzNS4wMDINCglDMjQwLjA3LDQxMC42MzIsMjMwLjM1NSw0MTcuNDM1LDIyMC4xNjcsNDE1LjYzOHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzQTU1NkE7IiBkPSJNMjMxLjcwMiw0MDkuODQ1bC0zOC43MTMtNi44MjZjLTkuMTYzLTEuNjE2LTE1LjI4Mi0xMC4zNTMtMTMuNjY2LTE5LjUxN2w2LjgyNi0zOC43MTMNCgljMC40OTgtMi44MjIsMS43MjktNS4zMDIsMy4zODItNy40MDljLTYuNTAyLDEuMzk4LTExLjgzNiw2LjU3Ny0xMy4wNjIsMTMuNTNsLTYuODI2LDM4LjcxMw0KCWMtMS42MTYsOS4xNjMsNC41MDMsMTcuOTAxLDEzLjY2NiwxOS41MTdsMzguNzEzLDYuODI2YzYuMzQyLDEuMTE4LDEyLjQyMS0xLjUyLDE2LjEzNS02LjI1Nw0KCUMyMzYuMDksNDEwLjE1NCwyMzMuOTExLDQxMC4yMzQsMjMxLjcwMiw0MDkuODQ1eiIvPg0KPGc+DQoJDQoJCTxyZWN0IHg9IjI0NS42MTEiIHk9Ijk4Ljc2NSIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuMTczNiAwLjk4NDggLTAuOTg0OCAtMC4xNzM2IDQxNy41MzI0IC0xMDcuODk2NikiIHN0eWxlPSJmaWxsOiM2NDc5OEE7IiB3aWR0aD0iMTYuODQ2IiBoZWlnaHQ9IjQ0LjkyNSIvPg0KCQ0KCQk8cmVjdCB4PSIyNTEuNDQ2IiB5PSI2NS41NzgiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjE3MzYgMC45ODQ4IC0wLjk4NDggLTAuMTczNiAzOTEuNjk3OCAtMTUyLjU5MjQpIiBzdHlsZT0iZmlsbDojNjQ3OThBOyIgd2lkdGg9IjE2Ljg0NiIgaGVpZ2h0PSI0NC45MjUiLz4NCgkNCgkJPHJlY3QgeD0iMjM5Ljc2NCIgeT0iMTMxLjk0MyIgdHJhbnNmb3JtPSJtYXRyaXgoLTAuMTczNiAwLjk4NDggLTAuOTg0OCAtMC4xNzM2IDQ0My4zNDQyIC02My4xOTg3KSIgc3R5bGU9ImZpbGw6IzY0Nzk4QTsiIHdpZHRoPSIxNi44NDYiIGhlaWdodD0iNDQuOTI1Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
            />
          </div>
          <div className="e2">
            <h5 className="text">Archive des soutenances</h5>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Menu;
