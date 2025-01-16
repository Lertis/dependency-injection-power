import { Component, Inject } from '@angular/core'
import { USE_VALUE_TOKEN, UseToken } from '@models'

@Component({
  selector: 'app-use-value-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  name = ''
  constructor (@Inject(USE_VALUE_TOKEN) private readonly token: UseToken) {
    this.name = this.token.defaultName()
  }
}
