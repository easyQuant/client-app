import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http';

@Injectable()
export class AlgorithmService {

  constructor (
    private http: Http
  ) {}

  getTabList () {
    return this.http.get('/assets/mock-data/tab-list.json')
  }
  //
  // getAllAlgorithm () {
  //   return this.http.get('/assets/mock-data/algorihtm-list.json')
  // }

  getAlgorithmById (id: any) {
    console.log('service getAlgorithmById => ', id)
    return this.http.get('/assets/mock-data/algorithm-list.json')
  }
}
