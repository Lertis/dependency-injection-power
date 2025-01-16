import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { env } from '@envs'
import { Env, ENV_TOKEN } from '@models'

import { SeventhModule } from './seventh/seventh.module'
import { BoxModule } from '../shared'
import { UseFactoryContainerComponent } from './container/container.component'
import { BaseService, DevService, ProdService, TestService } from './services'

const routes: Routes = [
  {
    path: '',
    component: UseFactoryContainerComponent
  }
]

function baseServiceFactory (env: Env): BaseService {
  const { type } = { ...env }
  if (type === 'dev') return new DevService()
  if (type === 'test') return new TestService()
  if (type === 'prod') return new ProdService()
  return new DevService()
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SeventhModule,
    BoxModule
  ],
  exports: [
    UseFactoryContainerComponent,
    RouterModule
  ],
  declarations: [UseFactoryContainerComponent],
  providers: [
    { provide: ENV_TOKEN, useValue: env },
    {
      provide: BaseService,
      useFactory: baseServiceFactory,
      deps: [ENV_TOKEN]
    }
  ]
})
export class UseFactoryModule { }
