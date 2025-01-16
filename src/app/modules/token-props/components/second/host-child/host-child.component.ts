import { Component, Host, SkipSelf } from '@angular/core'

import { HostService, ViewHostService } from '../../../services'

@Component({
  selector: 'app-props-host-child',
  templateUrl: './host-child.component.html',
  styleUrl: './host-child.component.scss'
})
export class HostChildComponent {
  hostChildValue = ''
  vewHostValue = ''

  constructor (
    @SkipSelf() private readonly host: HostService,
    @Host() private readonly viewHost: ViewHostService
  ) {
    this.hostChildValue = this.host.defaultName()
    this.vewHostValue = this.viewHost.defaultName()
  }
}
