import { UseToken } from '@models'

export class UseClassRootService implements UseToken {
  defaultName = (): string => 'USE_CLASS_ROOT'
}
