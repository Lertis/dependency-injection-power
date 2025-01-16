import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { USE_VALUE_TOKEN } from '@models'

import { ThirdComponent } from './third.component'
import { BoxModule } from '../../../shared'

@NgModule({
  declarations: [ThirdComponent],
  imports: [CommonModule, BoxModule],
  exports: [ThirdComponent],
  providers: [
    { provide: USE_VALUE_TOKEN, useValue: { defaultName: () => 'THIRD_MODULE' } }
  ]
})
export class ThirdModule { }
