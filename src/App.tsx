import { UsersListPage } from "./components/UsersListPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <UsersListPage />
      </QueryClientProvider>
    </div>
  );
};

export default App;
