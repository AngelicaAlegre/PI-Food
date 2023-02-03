export const sortMethod = (recipes, type) => {
  switch (type) {
    case "Z-A":
      const azSort = recipes.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      return azSort;
    case "A-Z":
      const zaSort = recipes.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      });
      return zaSort;
    default:
      return recipes;
  }
};

export const sortByHealthScore = (recipes, type) => {
  switch (type) {
    case "H19":
      const hScoreUp = recipes.sort((a, b) => a.healthScore - b.healthScore);
      return hScoreUp;
    case "H91":
      const hScoreDown = recipes.sort((a, b) => a.healthScore - b.healthScore);
      return hScoreDown.reverse();

    default:
      return recipes;
  }
};

export default sortMethod;
