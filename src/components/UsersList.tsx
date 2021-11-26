import { User } from "../common/types";

export const UsersList = ({ users }: { users: User[] }) => {
  return (
    <ol>
      {users?.map((user) => (
        <li key={user.id}>
          {user.name} @{user.username}
        </li>
      ))}
    </ol>
  );
};
