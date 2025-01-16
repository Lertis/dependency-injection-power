import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { USE_CLASS_TOKEN } from '@models'

import { SixthComponent } from './sixth.component'
import { SixthModuleService } from '../services/sixth-service'
import { BoxModule } from '../../shared'

@NgModule({
  declarations: [SixthComponent],
  imports: [
    CommonModule,
    BoxModule
  ],
  exports: [SixthComponent],
  providers: [
    { provide: USE_CLASS_TOKEN, useClass: SixthModuleService }
  ]
})
export class SixthModule { }
