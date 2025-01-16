import { Injectable } from '@angular/core'
import { UseToken } from '@models'

@Injectable()
export class TestService implements UseToken {
  defaultName = () => 'TEST'
}
