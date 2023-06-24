const selectCategories = (state) => state?.category || {};

export const selectCategoryEntities = (state) =>
  selectCategories(state)?.entities || [];

export const selectCategoryTree = (state) =>
  selectCategories(state)?.tree || {};

export const selectCategorySlugToId = (state) =>
  selectCategories(state)?.slugToId || {};
