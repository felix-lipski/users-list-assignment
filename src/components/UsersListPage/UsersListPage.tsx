import { useState } from "react";
import { searchBy } from "../../common/utils";
import { useFindUsersQuery } from "../../redux/usersApi";
import { UsersList } from "./UsersList";
import styles from "./UsersListPage.module.scss";

export const UsersListPage = () => {
  const { data, isLoading } = useFindUsersQuery();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <section className={styles["users-list"]}>
      <h1 id="users-heading">Users List</h1>
      <input
        placeholder="Search by user name..."
        id="search"
        name="search"
        aria-label="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {!isLoading && data ? (
        <UsersList users={searchBy(data, searchTerm, "name")} />
      ) : (
        <p role="status">Loading...</p>
      )}
    </section>
  );
};
