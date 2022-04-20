import { createAction, props } from'@ngrx/store';
import { IAppState } from '../state/app-state';
import { type } from 'os';
import { Data } from 'src/app/shared/IData';




export const collectionsData = createAction('[Collections] Collections Data');
export const collectionsDataSuccess = createAction('[Collections] Collections Data Success', props<{ data: Data[] }>());
export const collectionsDataFailure = createAction('[Collections] Collections Data Failure');

