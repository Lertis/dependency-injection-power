import { Injectable } from '@angular/core'
import { UseToken } from '@models'

@Injectable()
export class HostService implements UseToken {
  defaultName = () => 'HOST'
}
