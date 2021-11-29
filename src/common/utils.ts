/**
 * Searches an array of objects for a string by the provided key
 * @param data array of objects
 * @param searchTerm string to search for
 * @param by object field to search by
 * @return filtered array
 */
export const searchBy = <T>(data: T[], searchTerm: string, by: keyof T) => {
  const re = new RegExp(`.*${searchTerm}.*`, "i");
  return data?.filter((user) => re.test(String(user[by])));
};
