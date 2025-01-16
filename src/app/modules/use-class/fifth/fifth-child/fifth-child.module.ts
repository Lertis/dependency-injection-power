import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FifthChildComponent } from './fifth-child.component'
import { BoxModule } from '../../../shared'

@NgModule({
  declarations: [FifthChildComponent],
  imports: [CommonModule, BoxModule],
  exports: [FifthChildComponent]
})
export class FifthChildModule { }
