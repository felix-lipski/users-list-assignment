type OnlyStrings<T> = {
  [Key in keyof T]: T[Key] extends string ? string : never;
};

export const searchBy = <T>(
  data: OnlyStrings<T>[],
  searchTerm: string,
  by: keyof OnlyStrings<T>
) => {
  const re = new RegExp(`.*${searchTerm}.*`, "i");
  return data?.filter((user) => re.test(user[by]));
};
