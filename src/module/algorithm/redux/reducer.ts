import { algorithmState } from './state'
import { ActionTypes, Union } from './action'
import * as Scoreboard from './action'

// 保存所有的tab item
export function tabReducer (state = algorithmState.tabs, action: Union) {
  switch (action.type) {
    case ActionTypes.LoadAllTabs:
      return state

    case ActionTypes.LoadAllTabsSuccess:
      state = action.payload
      return state

    case ActionTypes.ActiveTabItem:
      return state.map((item: any, index) => {
        item.active = index === action.payload.index
        return item
      })

    default:
      return state
  }
}

// 维护所有当前选过的策略
export function algorithmListCounterReducer (state = algorithmState.algorithmCounterList, action: Union) {
  switch (action.type) {
    case ActionTypes.AppendAlgorithmDetail:
      let index = state.findIndex(item => item.id === action.payload.base.id)

      // 如果不存在则插入
      if (index === -1) {
        state.push({
          id: action.payload.base.id,
          editCounter: action.payload.edit.editCounter
        })
      } else {
        state[index].editCounter = state[index].editCounter + 100
      }

      return Array.from(state)
    default:
      return state
  }
}

// 加载或者切换到当前的策略
export function algorithmReducer (state = algorithmState.algorithm, action: Union) {
  switch (action.type) {

    case ActionTypes.LoadAlgorithmDetail:
      // console.log('LoadAlgorithmDetail => ', state)
      // return state
      return {
        ...state
      };

    case ActionTypes.LoadAlgorithmDetailSuccess:
      return {
        ...state,
        ...action.payload
      }
    case ActionTypes.LoadAlgorithmDetailError:
      return {
        ...state
      };

    default:
      return state
  }
}
