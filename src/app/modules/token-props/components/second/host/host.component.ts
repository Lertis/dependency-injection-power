import { Component, Self } from '@angular/core'

import { HostService, ViewHostService } from '../../../services'

@Component({
  selector: 'app-props-host',
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss',
  providers: [HostService],
  viewProviders: [ViewHostService]
})
export class HostComponent {
  value = ''
  constructor (@Self() private readonly host: HostService) {
    this.value = this.host.defaultName()
  }
}
