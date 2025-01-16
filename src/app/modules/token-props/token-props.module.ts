import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { SelfFirstService, SelfMockFirstService } from './services'

import { UsePropsContainerComponent } from './container/container.component'
import { ParentComponent, ChildComponent, HostComponent, HostChildComponent } from './components'
import { BoxModule } from '../shared'


const routes: Routes = [
  {
    path: '',
    component: UsePropsContainerComponent
  }
]

@NgModule({
  declarations: [
    UsePropsContainerComponent,
    ParentComponent,
    ChildComponent,
    HostComponent,
    HostChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BoxModule
  ],
  exports: [
    RouterModule,

    UsePropsContainerComponent,
    ParentComponent,
    ChildComponent,
    HostComponent,
    HostChildComponent
  ],
  providers: [
    SelfFirstService,
    { provide: SelfFirstService, useClass: SelfMockFirstService }
  ]
})
export class TokenPropsModule { }
