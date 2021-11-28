import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { UsersListPage } from "./components/UsersListPage/UsersListPage";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { usersApi } from "./redux/usersApi";

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={usersApi}>
      <UsersListPage />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
