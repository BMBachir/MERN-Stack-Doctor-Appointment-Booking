export const formateDate = (date, config) => {
  const defaultOption = { day: "numeric", month: "short", year: "numeric" };
  const options = config ? config : defaultOption;

  return new Date(date).toLocaleDateString("en-US", options);
};
