export const selectPostNavModule = (state) => state.postNav;

export const selectPostNavPagesCount = (state) =>
  selectPostNavModule(state).pagesCount;

export const selectPostNavPages = (state) => selectPostNavModule(state).pages;

export const selectPostNavIdsByPage = (state, pageIndex) =>
  selectPostNavPages(state)[pageIndex];
