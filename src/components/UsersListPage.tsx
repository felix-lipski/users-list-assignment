import { useQuery } from "react-query";
import { UsersList } from "./UsersList";

const useFindUsers = () =>
  useQuery(["findUsers"], () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json()
    )
  );

export const UsersListPage = () => {
  const { data } = useFindUsers();
  return (
    <div className="App">
      <h1>Users List</h1>
      <input />
      <UsersList users={data} />
    </div>
  );
};
