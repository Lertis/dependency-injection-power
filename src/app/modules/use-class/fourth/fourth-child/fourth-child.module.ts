import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FourthChildComponent } from './fourth-child.component'
import { BoxModule } from '../../../shared'

@NgModule({
  declarations: [FourthChildComponent],
  imports: [CommonModule, BoxModule],
  exports: [FourthChildComponent]
})
export class FourthChildModule { }
