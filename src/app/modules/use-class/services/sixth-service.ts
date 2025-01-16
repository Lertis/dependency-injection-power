import { UseToken } from '@models'

export class SixthModuleService implements UseToken {
  defaultName = (): string => 'SIXTH_MODULE'
}

export class SixthRootService implements UseToken {
  defaultName = (): string => 'SIXTH_ROOT_MODULE'
}
