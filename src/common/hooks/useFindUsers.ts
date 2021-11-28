import { useQuery } from "react-query";

export const useFindUsers = () =>
  useQuery(["findUsers"], () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json()
    )
  );
