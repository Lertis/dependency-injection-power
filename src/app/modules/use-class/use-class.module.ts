import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { FourthModule } from './fourth/fourth.module'
import { FifthModule } from './fifth/fifth.module'
import { SixthModule } from './sixth/sixth.module'
import { BoxModule } from '../shared'

import { UseClassContainerComponent } from './container/container.component'

const routes: Routes = [
  {
    path: '',
    component: UseClassContainerComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FourthModule,
    FifthModule,
    SixthModule,
    BoxModule
  ],
  exports: [
    UseClassContainerComponent,
    RouterModule
  ],
  declarations: [UseClassContainerComponent],
  providers: []
})
export class UseClassModule { }
