import { Component, Inject } from '@angular/core'
import { USE_VALUE_TOKEN, UseToken } from '@models'

@Component({
  selector: 'app-use-value-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss',
  providers: [
    { provide: USE_VALUE_TOKEN, useValue: { defaultName: () => 'THIRD_COMPONENT' } }
  ]
})
export class ThirdComponent {
  name = ''
  constructor (@Inject(USE_VALUE_TOKEN) private readonly token: UseToken) {
    this.name = this.token.defaultName()
  }
}
