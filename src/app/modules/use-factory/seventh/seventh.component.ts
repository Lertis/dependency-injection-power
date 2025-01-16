import { Component } from '@angular/core'
import { BaseService } from '../services/base-service'

@Component({
  selector: 'app-use-factory-seventh',
  templateUrl: './seventh.component.html',
  styleUrl: './seventh.component.scss'
})
export class SeventhComponent {
  name = ''
  constructor (private readonly service: BaseService) {
    this.name = this.service.defaultName()
  }
}
