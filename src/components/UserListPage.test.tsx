import { render, screen, within } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { UsersListPage } from "./UsersListPage";

it("should display a list of users", async () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <UsersListPage />
    </QueryClientProvider>
  );

  expect(await screen.findByText(/Ervin Howell/i)).toBeInTheDocument();
  const list = await screen.findByRole("list", { name: /users/i });
  expect(within(list).getAllByRole("listitem")).toHaveLength(10);
});
