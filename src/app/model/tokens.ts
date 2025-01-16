import { InjectionToken } from '@angular/core'
import { Env } from '@models'

export interface UseToken {
  defaultName: () => string
}
export const ENV_TOKEN = new InjectionToken<Env>('ENV_TOKEN')

export const USE_VALUE_TOKEN = new InjectionToken<UseToken>('USE_VALUE_TOKEN')

export const USE_CLASS_TOKEN = new InjectionToken<UseToken>('USE_CLASS_TOKEN')
