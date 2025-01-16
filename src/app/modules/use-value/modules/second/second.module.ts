import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { USE_VALUE_TOKEN } from '@models'

import { SecondComponent } from './second.component'
import { BoxModule } from '../../../shared'

@NgModule({
  declarations: [SecondComponent],
  imports: [CommonModule, BoxModule],
  exports: [SecondComponent],
  providers: [
    { provide: USE_VALUE_TOKEN, useValue: { defaultName: () => 'SECOND_MODULE' } }
  ]
})
export class SecondModule { }
