import { mockUsers } from "../mocks/users";
import { searchBy } from "./utils";

describe("utils", () => {
  it("should search the array for the provided string, by the provided key", () => {
    const array = mockUsers;
    expect(searchBy(array, "", "name").length).toBe(10);
    expect(searchBy(array, "ch", "name").length).toBe(5);
    expect(searchBy(array, "a", "username").length).toBe(6);
    expect(searchBy(array, "4", "phone").length).toBe(8);
  });
});
