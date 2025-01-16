import { Component, Inject } from '@angular/core'
import { USE_CLASS_TOKEN, UseToken } from '@models'

@Component({
  selector: 'app-use-class-fourth',
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.scss'
})
export class FourthComponent {
  name = ''
  constructor (@Inject(USE_CLASS_TOKEN) private readonly token: UseToken) {
    this.name = this.token.defaultName()
  }
}
