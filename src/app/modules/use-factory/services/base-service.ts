import { Injectable } from '@angular/core'
import { UseToken } from '@models'

@Injectable()
export class BaseService implements UseToken {
  defaultName = () => 'BASE'
}
