import { User } from "../common/types";

export const UsersList = ({ users }: { users: User[] }) => {
  return (
    <ol id="users" aria-labelledby="users-heading">
      {users?.map((user) => (
        <li key={user.id}>
          {user.name} <span>@{user.username}</span>
        </li>
      ))}
    </ol>
  );
};
