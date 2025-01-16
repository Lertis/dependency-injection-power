import { Injectable } from '@angular/core'
import { UseToken } from '@models'

@Injectable()
export class SelfMockFirstService implements UseToken {
  defaultName = () => 'SELF_MOCK_FIRST_1'
}

@Injectable()
export class SelfMockAnotherFirstService implements UseToken {
  defaultName = () => 'SELF_MOCK_FIRST_2'
}

