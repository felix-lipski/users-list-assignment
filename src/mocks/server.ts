import { rest } from "msw";
import { setupServer } from "msw/node";
import { mockUsers } from "./users";

export const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.json(mockUsers));
  })
);
