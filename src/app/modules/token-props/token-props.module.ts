import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

import { SelfFirstService, SelfMockAnotherFirstService } from './services'

import { BoxModule } from '../shared'
import { UsePropsContainerComponent } from './container/container.component'
import { ParentComponent, ChildComponent, HostComponent, HostChildComponent } from './components'
import { DatePickerComponent } from './components/date-picker/date-picker.component'
import { DatePickerHeaderComponent } from './components/date-picker-header/date-picker-header.component'


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
    HostChildComponent,
    DatePickerComponent,
    DatePickerHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
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
    { provide: SelfFirstService, useClass: SelfMockAnotherFirstService }
  ]
})
export class TokenPropsModule { }
