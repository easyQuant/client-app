import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AlgorithmService } from '../service'
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { ActionTypes, AppendAlgorithmDetail } from './action'

@Injectable()
export class AlgorithmEffect {

  constructor (
    private actions$: Actions,
    private algorithmService: AlgorithmService
  ) {}

  @Effect()
  loadAllTabs = this.actions$
  .pipe(

    ofType(ActionTypes.LoadAllTabs),

    mergeMap(() => this.algorithmService.getTabList()
      .pipe(
        map((result: any) => {
          return {
            type: ActionTypes.LoadAllTabsSuccess,
            payload: result.json().data
          }
        })
      )
    )
  )

  @Effect()
  loadAlgorithmDetail = this.actions$
  .pipe(

    ofType(ActionTypes.LoadAlgorithmDetail),

    mergeMap((action: any) => {
      return this.algorithmService.getAlgorithmById(action.payload.id)
        .pipe(
          map((result: any) => {
            return {
              type: ActionTypes.LoadAlgorithmDetailSuccess,
              payload: result.json().data.filter(item => item.base.id == action.payload.id)[0]
            }
          })
        )
    })
  )

  @Effect()
  appendAlgorithmDetail = this.actions$
  .pipe(

    ofType(ActionTypes.LoadAlgorithmDetailSuccess),

    mergeMap((action: any) => {
      return new Observable((observer) => {
        observer.next()
      })
      .pipe(
        map((result: any) => {
          return {
            type: ActionTypes.AppendAlgorithmDetail,
            payload: action.payload
          }
        })
      )
    })
  )
}
