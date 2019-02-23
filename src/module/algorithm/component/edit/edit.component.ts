import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { LoadAlgorithmDetail, AppendAlgorithmDetail, IncrementHome } from '../../redux/action'
import { selectedAlgorithmEdit, selectedAlgorithmCounterList } from '../../redux/select'

@Component({
  selector: 'algorithm-edit',
  templateUrl: './edit.component.html'
})
export class AlgorithmEditComponent implements OnInit {
  title = 'algorithm-edit';
  algorithmId: any
  algorithm$: any
  algorithmCounter$: any

  constructor (
    private store: Store<any>,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit () {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log('edit constructor')
      this.algorithmId = this.activatedRoute.snapshot.params['algorithmId']

      this.store.pipe(select(selectedAlgorithmCounterList))
      .subscribe(result => {
        
        this.algorithmCounter$ = result
      })

      this.store.pipe(select(selectedAlgorithmEdit))
      .subscribe(result => {
        this.algorithm$ = result
      })
      this.initAlgorithmEdit()
    }, error => console.error(error));
  }

  initAlgorithmEdit () {
    this.store.dispatch(
      new LoadAlgorithmDetail({ id: this.algorithmId })
    )
  }
}
