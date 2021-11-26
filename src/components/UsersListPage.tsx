import { useFindUsers } from "../__mocks__";
import { UsersList } from "./UsersList";

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
