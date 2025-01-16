import { Injectable } from '@angular/core'
import { UseToken } from '@models'

@Injectable()
export class ViewHostService implements UseToken {
  defaultName = () => 'VIEW_HOST'
}
