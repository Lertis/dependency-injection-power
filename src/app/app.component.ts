import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'

import { RoutePath } from '@models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  route = RoutePath

  private readonly router: Router = inject(Router)

  readonly navigate = (path: RoutePath) => { this.router.navigate([`/${path}`]) }
}
