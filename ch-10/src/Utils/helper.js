export const filterList = (term, data) => {
  return data.filter((item) => item.data.name.toLowerCase().includes(term.toLowerCase()));
};
