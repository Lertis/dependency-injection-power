export type EnvType = 'dev' | 'test' | 'prod'

export interface Env {
  prod: boolean
  type: EnvType
}
