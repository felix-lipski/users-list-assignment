import { render, screen, within } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { UsersListPage } from "./UsersListPage";

describe("UsersListPage", () => {
  const queryClient = new QueryClient();
  const renderListPage = () =>
    render(
      <QueryClientProvider client={queryClient}>
        <UsersListPage />
      </QueryClientProvider>
    );

  it("should inform the user that the list is loading", () => {
    renderListPage();
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should display a list of users", async () => {
    renderListPage();
    const list = await screen.findByRole("list", { name: /users/i });
    expect(within(list).getAllByRole("listitem")).toHaveLength(10);
  });
});
