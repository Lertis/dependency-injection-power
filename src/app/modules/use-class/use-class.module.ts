import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { USE_CLASS_TOKEN } from '@models'

import { FourthModule } from './fourth/fourth.module'
import { FifthModule } from './fifth/fifth.module'
import { BoxModule } from '../shared'

import { UseClassContainerComponent } from './container/container.component'
import { UseClassRootService } from './services'

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
    BoxModule
  ],
  exports: [
    UseClassContainerComponent,
    RouterModule
  ],
  declarations: [UseClassContainerComponent],
  providers: [
    // { provide: USE_CLASS_TOKEN, useClass: UseClassRootService }
  ]
})
export class UseClassModule { }
