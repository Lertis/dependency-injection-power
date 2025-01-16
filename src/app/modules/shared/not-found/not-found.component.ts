import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Router } from '@angular/router'

import { RoutePath } from '@models'

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {
  private readonly router: Router = inject(Router)

  readonly go =(): void => {this.router.navigate([`/${RoutePath.USE_VALUE}`])}
}
