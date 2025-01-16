import { Component, Self, SkipSelf } from '@angular/core'

import { SelfFirstService, SelfMockFirstService } from '../../../services'

@Component({
  selector: 'app-props-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  providers: [
    { provide: SelfFirstService, useClass: SelfMockFirstService }
  ]
})
export class ParentComponent {
  noDecorator = ''
  selfDecorator = ''
  skipSelfDecorator = ''

  constructor (
    private readonly first: SelfFirstService,
    @Self() private readonly second: SelfFirstService,
    @SkipSelf() private readonly third: SelfFirstService
  ) {
    this.noDecorator = this.first.defaultName()
    this.selfDecorator = this.second.defaultName()
    this.skipSelfDecorator = this.third.defaultName()
  }
}
