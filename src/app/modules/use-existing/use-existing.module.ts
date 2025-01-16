import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { UseExistingComponent } from './use-existing.component'
import { AlphaService, BettaService, OmegaService } from './services'
import { BoxModule } from '../shared'

const routes: Routes = [
  {
    path: '',
    component: UseExistingComponent
  }
]

@NgModule({
  declarations: [UseExistingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BoxModule
  ],
  providers: [
    AlphaService,
    {
      provide: BettaService, useClass: OmegaService
    },
    //  allows you to alias a token and reference any existing one.
    {
      provide: OmegaService, useExisting: AlphaService
    }
  ],
  exports: [UseExistingComponent, RouterModule]
})
export class UseExistingModule { }
