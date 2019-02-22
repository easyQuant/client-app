import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { HttpModule } from '@angular/http'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlgorithmIndexComponent } from '../algorithm/component/index/index.component';
import { AlgorithmEditComponent } from '../algorithm/component/edit/edit.component';
import { AlgorithmInfoComponent } from '../algorithm/component/info/info.component';
import { AlgorithmBacktestListComponent } from '../algorithm/component/backtest-list/backtest-list.component';

import { tabReducer, algorithmReducer, algorithmListCounterReducer } from '../algorithm/redux/reducer'
import { AlgorithmEffect } from '../algorithm/redux/effects'
import { AlgorithmService } from '../algorithm/service'

@NgModule({
  declarations: [
    AppComponent,
    AlgorithmIndexComponent,
    AlgorithmEditComponent,
    AlgorithmInfoComponent,
    AlgorithmBacktestListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    EffectsModule.forRoot([ AlgorithmEffect ]),
    StoreModule.forRoot({
      tabs: tabReducer,
      algorithm: algorithmReducer,
      algorithmCounterList: algorithmListCounterReducer
    }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    AlgorithmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
