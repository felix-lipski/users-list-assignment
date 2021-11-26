export const UsersList = ({
  users,
}: {
  users: { username: string; name: string }[];
}) => {
  return (
    <ol>
      {users.map((user) => (
        <li>
          {user.name} @{user.username}
        </li>
      ))}
    </ol>
  );
};
