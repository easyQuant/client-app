import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { LoadAlgorithmDetail, AppendAlgorithmDetail, IncrementHome } from '../../redux/action'
import { selectedAlgorithmInfo } from '../../redux/select'

@Component({
  selector: 'algorithm-info',
  templateUrl: './info.component.html'
})
export class AlgorithmInfoComponent {
  title = 'algorithm-info';
  algorithmInfo$: any
  algorithmId: any

  constructor (
    private store: Store<any>,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit () {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log('info constructor')
      this.algorithmId = this.activatedRoute.snapshot.params['algorithmId']
      this.store.pipe(select(selectedAlgorithmInfo))
      .subscribe(result => {
        this.algorithmInfo$ = result
      })
      this.initAlgorithmEdit()
    }, error => console.error(error));
  }

  initAlgorithmEdit () {
    console.log('this.algorithmId => ', this.algorithmId)
    this.store.dispatch(
      new LoadAlgorithmDetail({ id: this.algorithmId })
    )
  }
}
