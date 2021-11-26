export const UsersList = ({
  users,
}: {
  users: { username: string; name: string; id: number }[];
}) => {
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
