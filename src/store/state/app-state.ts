import { RouterReducerState } from '@ngrx/router-store';
import {Data} from '../../app/shared/IData';

export interface IAppState{
  data:Data[] //import
}

export const initialState: IAppState = {
  data:[]
};
