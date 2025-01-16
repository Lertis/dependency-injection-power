import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { USE_VALUE_TOKEN } from '@models'

import { FirstModule, SecondModule, ThirdModule } from './modules'
import { UseValueContainerComponent } from './container/container.component'
import { BoxModule } from '../shared'

const routes: Routes = [
  {
    path: '',
    component: UseValueContainerComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BoxModule,
    FirstModule,
    SecondModule,
    ThirdModule
  ],
  exports: [
    UseValueContainerComponent,
    RouterModule
  ],
  declarations: [UseValueContainerComponent],
  providers: [
    { provide: USE_VALUE_TOKEN, useValue: { defaultName: () => 'USE_VALUE_TOKEN' } }
  ]
})
export class UseValueModule { }
