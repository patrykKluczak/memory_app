export const sortMultiCompare = (a, b, sorts) => {
  let select = sorts[0].select;
  let order = sorts[0].order;

  if (a[select] < b[select]) {
    return order === "ascending" ? -1 : 1;
  }
  if (a[select] > b[select]) {
    return order === "ascending" ? 1 : -1;
  }

  if (sorts.length > 1) {
    let remainingSorts = sorts.slice(1);
    return sortMultiCompare(a, b, remainingSorts);
  }
  return 0;
};

export const sortResults = (results, sorts) => {
  return results.sort((a, b) => {
    return sortMultiCompare(a, b, sorts);
  });
};

export const sorts = [
  {
    select: "difficult",
    order: "",
  },
  {
    select: "points",
    order: "",
  },
];
