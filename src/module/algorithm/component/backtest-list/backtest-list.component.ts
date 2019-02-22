import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { selectedAlgorithmBacktestList } from '../../redux/select'

@Component({
  selector: 'algorithm-backtest-list',
  templateUrl: './backtest-list.component.html'
})
export class AlgorithmBacktestListComponent {
  title = 'backtest-list';
  backtestList$: Observable<any[]>

  constructor (
    private store: Store<any>
  ) {
    this.backtestList$ = this.store.pipe(select(selectedAlgorithmBacktestList))
  }
}
