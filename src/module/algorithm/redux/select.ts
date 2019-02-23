import { createSelector } from '@ngrx/store'

// 选项卡模型
export interface Tab {
    index: number
    title: string
    active: boolean
}

export interface AlgorithmCounter {
    id: number
    counter: number
}

// 策略模型
export interface Algorithm {
    base: AlgorithmBase
    edit: AlgorithmEdit,
    info: AlgorithmInfo,
    backtestList: BacktestInfo[]
}

export interface AlgorithmBase {
    id: number
    name: string,
    childTab: object[]
}

// 回测模型
export interface BacktestInfo {
    id: number
    name: string
    createDate: string
}

// 策略详情
export interface AlgorithmInfo {
    startDate: string
    endDate: string
    infoScroll: number
}

// 策略编辑
export interface AlgorithmEdit {
    code: string
    editCounter: number
}

// 整体模型
export interface AppState {
    algorithm: Algorithm,
    algorithmCounterList: AlgorithmCounter[]
}

export const selectAlgorithmCounterList = (state: AppState) => state.algorithmCounterList
export const selectAlgorithmBase = (state: AppState) => state.algorithm.base;
export const selectAlgorithmEdit = (state: AppState) => state.algorithm.edit;
export const selectAlgorithmInfo = (state: AppState) => state.algorithm.info;
export const selectAlgorithmBacktestList = (state: AppState) => state.algorithm.backtestList;

// 只要base部分的数据
export const selectedAlgorithm = createSelector(
    selectAlgorithmBase,
    (algorithmBase: AlgorithmBase) => {
        return algorithmBase
    }
);

// 只要edit部分的数据
export const selectedAlgorithmEdit = createSelector(
    selectAlgorithmBase,
    selectAlgorithmEdit,
    (algorithmBase: AlgorithmBase, algorithmEdit: AlgorithmEdit) => {
        return {
            ...algorithmBase,
            ...algorithmEdit,
        }
    }
);

// 只要info部分的数据
export const selectedAlgorithmInfo = createSelector(
    selectAlgorithmBase,
    selectAlgorithmInfo,
    (algorithmBase: AlgorithmBase, algorithmInfo: AlgorithmInfo) => {
        return {
            ...algorithmBase,
            ...algorithmInfo
        }
    }
);

// 只要backtestList部分的数据
export const selectedAlgorithmBacktestList = createSelector(
    selectAlgorithmBase,
    selectAlgorithmBacktestList,
    (algorithmBase: AlgorithmBase, algorithmBacktestList: BacktestInfo[]) => {
        console.log('algorithmBacktestList => ', algorithmBacktestList)
        return algorithmBacktestList
    }
);

export const selectedAlgorithmCounterList = createSelector(
    selectAlgorithmBase,
    selectAlgorithmCounterList,
    (algorithmBase: AlgorithmBase, algorithmCounterList: AlgorithmCounter[]) => {

        if (algorithmBase && algorithmCounterList) {
            
            return algorithmCounterList.filter(item => item.id === algorithmBase.id)[0] || algorithmCounterList[0]
        } else {
            return algorithmCounterList[0]
        }
    }
)
