const selectCategories = (state) => state?.category || {};

export const selectCategoryEntities = (state) =>
  selectCategories(state)?.entities || [];
