import { Component, Inject } from '@angular/core'
import { USE_CLASS_TOKEN, UseToken } from '@models'

@Component({
  selector: 'app-use-class-fifth',
  templateUrl: './fifth.component.html',
  styleUrl: './fifth.component.scss'
})
export class FifthComponent {
  name = ''
  constructor (@Inject(USE_CLASS_TOKEN) private readonly token: UseToken) {
    this.name = this.token.defaultName()
  }
}
