import { Injectable } from '@angular/core'
import { UseToken } from '@models'

@Injectable()
export class ProdService implements UseToken {
  defaultName = () => 'PROD'
}
