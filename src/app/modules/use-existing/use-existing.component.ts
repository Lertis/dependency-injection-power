import { Component } from '@angular/core'

import { AlphaService, BettaService, OmegaService } from './services'

@Component({
  selector: 'app-use-existing',
  templateUrl: './use-existing.component.html',
  styleUrl: './use-existing.component.scss'
})
export class UseExistingComponent {
  a = ''
  b = ''
  o = ''

  constructor (
    private readonly alpha: AlphaService,
    private readonly betta: BettaService,
    private readonly omega: OmegaService
  ) {
    this.a = this.alpha.defaultName()
    this.b = this.betta.defaultName()
    this.o = this.omega.defaultName()
  }
}
