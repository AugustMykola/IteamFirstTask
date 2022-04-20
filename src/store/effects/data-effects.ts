import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import {Store, select} from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {DataService} from '../../app/services/data-service'

import * as DataActions from '../actions/app-action';

import {IAppState} from '../state/app-state';
import {Data} from '../../app/shared/IData'





@Injectable()
export class DataEffects {
  constructor(
    private actions$: Actions,
    private toaster: ToastrService,
    private dataService: DataService,
    private router: Router,
  ) {}

  @Effect()

  collectionsData$ = createEffect(() => this.actions$.pipe(
    ofType(DataActions.collectionsData),
    switchMap(() => {
      
      return this.dataService.getData().pipe(
        map((data: Data[]) => {
          
          return DataActions.collectionsDataSuccess({ data })
        }),
        catchError(err => {
          this.toaster.error('Collections Data Failed');
          return of(DataActions.collectionsDataFailure());
        }),
      );
    }),
  ));
  
  }