import { Injectable } from '@angular/core'
import { UseToken } from '@models'

@Injectable()
export class BettaService implements UseToken {
  defaultName = () => 'BETTA'
}
