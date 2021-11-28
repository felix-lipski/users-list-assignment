import { useQuery } from "react-query";
import { User } from "../types";

export const useFindUsers = () =>
  useQuery<User[]>(["findUsers"], () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json()
    )
  );
