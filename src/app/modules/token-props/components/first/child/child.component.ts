import { Component, Optional, Self, SkipSelf } from '@angular/core'

import { SelfFirstService } from '../../../services'

@Component({
  selector: 'app-props-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
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
