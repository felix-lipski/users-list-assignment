import { useState } from "react";
import { useQuery } from "react-query";
import { searchBy } from "../common/utils";
import { UsersList } from "./UsersList";

const useFindUsers = () =>
  useQuery(["findUsers"], () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json()
    )
  );

export const UsersListPage = () => {
  const { data } = useFindUsers();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <h1>Users List</h1>
      <input
        placeholder="Search by user name..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <UsersList users={searchBy(data, searchTerm, "name")} />
    </div>
  );
};
