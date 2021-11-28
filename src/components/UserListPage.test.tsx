import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("should filter the list by the search term", async () => {
    renderListPage();
    const searchInput = screen.getByLabelText(/search/i);

    userEvent.type(searchInput, "e");
    const list = await screen.findByRole("list", { name: /users/i });
    expect(within(list).getAllByRole("listitem")).toHaveLength(9);

    userEvent.type(searchInput, "m");
    expect(
      within(screen.getByRole("list", { name: /users/i })).getAllByRole(
        "listitem"
      )
    ).toHaveLength(2);
  });
});
