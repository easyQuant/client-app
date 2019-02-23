import { AlgorithmIndexComponent } from '../algorithm/component/index/index.component'
import { AlgorithmEditComponent } from '../algorithm/component/edit/edit.component'
import { AlgorithmInfoComponent } from '../algorithm/component/info/info.component'
import { AlgorithmBacktestListComponent } from '../algorithm/component/backtest-list/backtest-list.component'
import { Routes } from '@angular/router'

export const algorithmRouter: Routes = [
  {
    path: 'algorithm',
    component: AlgorithmIndexComponent,
    children: [
      {
        path: 'edit/:algorithmId/:backtestId',
        component: AlgorithmEditComponent
      },

      {
        path: 'info/:algorithmId/:backtestId',
        component: AlgorithmInfoComponent
      },

      {
        path: 'backtestList/:algorithmId/:backtestId',
        component: AlgorithmBacktestListComponent
      }
    ]
  }
]
