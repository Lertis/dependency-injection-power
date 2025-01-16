import { Component, Inject } from '@angular/core'
import { USE_CLASS_TOKEN, UseToken } from '@models'

@Component({
  selector: 'app-use-class-fourth-child',
  templateUrl: './fourth-child.component.html',
  styleUrl: './fourth-child.component.scss'
})
export class FourthChildComponent {
  name = ''
  constructor (@Inject(USE_CLASS_TOKEN) private readonly token: UseToken) {
    this.name = this.token.defaultName()
  }
}
