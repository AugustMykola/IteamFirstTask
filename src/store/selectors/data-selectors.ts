import { createSelector } from '@ngrx/store';

export const selectCollectionsState = (state: any) => state.data;

export const selectCollectionsData = createSelector(
  selectCollectionsState,
  state => state.data,
);