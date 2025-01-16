import { Component, Inject } from '@angular/core'
import { USE_VALUE_TOKEN, UseToken } from '@models'

@Component({
  selector: 'app-use-value-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent {
  name = ''
  constructor (@Inject(USE_VALUE_TOKEN) private readonly token: UseToken) {
    this.name = this.token.defaultName()
  }
}


