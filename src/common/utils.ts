export const searchBy = <T>(data: T[], searchTerm: string, by: keyof T) => {
  const re = new RegExp(`.*${searchTerm}.*`, "i");
  return data?.filter((user) => re.test(String(user[by])));
};
