// import {IAppState,initialState} from '../state/app-state';

import { Action, createReducer, on } from '@ngrx/store';
import {Data} from '../../app/shared/IData'

import * as dataActions from '../actions/app-action';

export interface IDataState {
  data:Data[] | null
}

export const initialState: IDataState = {
  data:null
};


  export function collectionsReducer(state: IDataState | undefined, action: Action): IDataState {
    return reducer(state, action);
  }

  function getAllData(collections: Data[]): Data[] {
    const data: Data[] = [];
    collections.forEach(collection => {
      data.push(collection);
    });
    return data;
  }


  const reducer = createReducer<IDataState>(initialState,
    initialState,
    on(dataActions.collectionsData, state => ({
      ...state,
    })),
    on(dataActions.collectionsDataSuccess, (state, {data}) => ({
      ...state,
      data:getAllData(data)
    })),
    on(dataActions.collectionsDataFailure, (state) => ({
      ...state,
      data:null
    }))
  );

