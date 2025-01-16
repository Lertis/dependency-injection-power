import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { USE_CLASS_TOKEN } from '@models'

import { FifthComponent } from './fifth.component'
import { FifthService } from '../services/fifth-service'
import { FifthChildModule } from './fifth-child/fifth-child.module'
import { BoxModule } from '../../shared'

@NgModule({
  declarations: [FifthComponent],
  imports: [CommonModule, FifthChildModule, BoxModule],
  exports: [FifthComponent, FifthChildModule],
  providers: [
    { provide: USE_CLASS_TOKEN, useClass: FifthService }
  ]
})
export class FifthModule { }
