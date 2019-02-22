import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { ActiveTabItem, LoadAllTabs } from '../../redux/action'
import { selectedAlgorithm } from '../../redux/select'

@Component({
  selector: 'algorithm-index',
  templateUrl: './index.component.html'
})
export class AlgorithmIndexComponent {
  title = 'algorithm-index';
  tabs$: Observable<object[]>
  algorithm$: object

  constructor (
    private store: Store<{
      tabs: object[]
    }>,

    private router: Router
  ) {
    this.tabs$ = this.store.pipe(select('tabs'))
    // this.store.pipe(select(selectedAlgorithm))
    // .subscribe(result => {
    //   this.algorithm$ = result
    // })
    this.loadTabList()
  }

  handleActiveTab (index, item) {
    this.store.dispatch(
      new ActiveTabItem({
        index
      })
    )
    let routerPath = ['/algorithm', item.type, item.algorithmId, item.backtestId].join('/')
    this.router.navigate([routerPath]);
  }

  loadTabList () {
    this.store.dispatch(
      new LoadAllTabs()
    )
  }
}
