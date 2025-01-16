import { Injectable } from '@angular/core'
import { UseToken } from '@models'

@Injectable()
export class DevService implements UseToken {
  defaultName = () => 'DEV'
}
