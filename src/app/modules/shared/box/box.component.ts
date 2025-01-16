import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrl: './box.component.scss'
})
export class BoxComponent {
  @Input({ required: true }) label!: string
  @Input({ required: true }) value!: string
}
