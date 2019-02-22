import { Action } from '@ngrx/store'

export enum ActionTypes {
  LoadAllTabs = '[ Algorithm ] LoadAllTabs',
  LoadAllTabsSuccess = '[ Algorithm ] LoadAllTabs Success',
  ActiveTabItem = '[ Algorithm ] ActiveTabItem',
  LoadAlgorithmDetail = '[ Algorithm ] LoadAlgorithmDetail',
  LoadAlgorithmDetailSuccess = '[ Algorithm ] LoadAlgorithmDetail Success',
  LoadAlgorithmDetailError = '[ Algorithm ] LoadAlgorithmDetail Error',
  ActiveAlgorithmDetail = '[ Algorithm ] ActiveAlgorithmDetail',
  AppendAlgorithmDetail = '[ Algorithm ] AppendAlgorithmDetail',
  // ActiveAlgorithmDetailSuccess = '[ Algorithm ] ActiveAlgorithmDetail Success',
  // ActiveAlgorithmDetailError = '[ Algorithm ] ActiveAlgorithmDetail Error'

  IncrementHome = '[Scoreboard Page] Home Score',
  IncrementAway = '[Scoreboard Page] Away Score',
  Reset = '[Scoreboard Page] Score Reset',
}

export class LoadAllTabs implements Action {
  readonly type = ActionTypes.LoadAllTabs
}

export class LoadAllTabsSuccess implements Action {
  readonly type = ActionTypes.LoadAllTabsSuccess
  constructor (public payload: any) {}
}

export class ActiveTabItem implements Action {
  readonly type = ActionTypes.ActiveTabItem
  constructor (public payload: {
    index: number
  }) {}
}

export class LoadAlgorithmDetail implements Action {
  readonly type = ActionTypes.LoadAlgorithmDetail
  constructor (public payload: { id: number }) {}
}

export class LoadAlgorithmDetailSuccess implements Action {
  readonly type = ActionTypes.LoadAlgorithmDetailSuccess
  constructor (public payload: any) {}
}

export class LoadAlgorithmDetailError implements Action {
  readonly type = ActionTypes.LoadAlgorithmDetailError
}

export class ActiveAlgorithmDetail implements Action {
  readonly type = ActionTypes.ActiveAlgorithmDetail
  constructor (public payload: { id: number }) {}
}

export class AppendAlgorithmDetail implements Action {
  readonly type = ActionTypes.AppendAlgorithmDetail
  constructor (public payload: any) {}
}

// export class ActiveAlgorithmDetailSuccess implements Action {
//   readonly type = ActionTypes.ActiveAlgorithmDetailSuccess
// }
//
// export class ActiveAlgorithmDetailError implements Action {
//   readonly type = ActionTypes.ActiveAlgorithmDetailError
// }

export type Union = LoadAllTabs | LoadAllTabsSuccess | ActiveTabItem | LoadAlgorithmDetail | LoadAlgorithmDetailSuccess | LoadAlgorithmDetailError | ActiveAlgorithmDetail | AppendAlgorithmDetail


export class IncrementHome implements Action {
  readonly type = ActionTypes.IncrementHome;
}

export class IncrementAway implements Action {
  readonly type = ActionTypes.IncrementAway;
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;

  constructor(public payload: { home: number; away: number }) {}
}

export type ActionsUnion = IncrementHome | IncrementAway | Reset;
