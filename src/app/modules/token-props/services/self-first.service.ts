import { Injectable } from '@angular/core'
import { UseToken } from '@models'

@Injectable()
export class SelfFirstService implements UseToken {
  defaultName = () => 'SELF_FIRST'
}
