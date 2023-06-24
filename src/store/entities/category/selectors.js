const selectCategories = (state) => state?.category || {};

export const selectCategoryEntities = (state) =>
  selectCategories(state)?.entities || [];

export const selectCategoryTree = (state) =>
  selectCategories(state)?.tree || {};
