import { Component, Inject } from '@angular/core'
import { USE_CLASS_TOKEN, UseToken } from '@models'

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrl: './sixth.component.scss'
})
export class SixthComponent {
  name = ''
  constructor (@Inject(USE_CLASS_TOKEN) private readonly token: UseToken) {
    this.name = this.token.defaultName()
  }
}
