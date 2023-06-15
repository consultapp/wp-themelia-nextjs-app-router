export const selectPostModule = (state) => state.post;

// ID
export const selectPostIds = (state) => selectPostModule(state).ids;
export const selectPostById = (state, postId) =>
  selectPostModule(state).entities[postId];

// Slug
export const selectPostSlugToId = (state) =>
  selectPostModule(state).slugToId || {};

export const selectPostBySlug = (state, slug) =>
  selectPostById(
    state,
    selectPostSlugToId(state)[encodeURI(slug).toLowerCase()]
  );
