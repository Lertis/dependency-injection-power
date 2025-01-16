import { Injectable } from '@angular/core'
import { UseToken } from '@models'

@Injectable()
export class OmegaService implements UseToken {
  defaultName = () => 'OMEGA'
}
