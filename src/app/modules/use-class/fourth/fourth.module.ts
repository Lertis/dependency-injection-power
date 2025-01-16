import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { USE_CLASS_TOKEN } from '@models'

import { FourthComponent } from './fourth.component'
import { FourthService } from '../services/fourth-service'
import { FourthChildModule } from './fourth-child/fourth-child.module'
import { BoxModule } from '../../shared'

@NgModule({
  declarations: [FourthComponent],
  imports: [CommonModule, FourthChildModule, BoxModule],
  exports: [FourthComponent, FourthChildModule],
  providers: [
    { provide: USE_CLASS_TOKEN, useClass: FourthService }
  ]
})
export class FourthModule { }
