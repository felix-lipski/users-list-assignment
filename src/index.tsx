import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { UsersListPage } from "./components/UsersListPage/UsersListPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UsersListPage />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
