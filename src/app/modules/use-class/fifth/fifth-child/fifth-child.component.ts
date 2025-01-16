import { Component, Inject } from '@angular/core'
import { USE_CLASS_TOKEN, UseToken } from '@models'

@Component({
  selector: 'app-use-class-fifth-child',
  templateUrl: './fifth-child.component.html',
  styleUrl: './fifth-child.component.scss'
})
export class FifthChildComponent {
  name = ''
  constructor (@Inject(USE_CLASS_TOKEN) private readonly token: UseToken) {
    this.name = this.token.defaultName()
  }
}
