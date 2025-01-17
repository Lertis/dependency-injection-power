import { Component, OnDestroy, Self } from '@angular/core'
import { provideNativeDateAdapter } from '@angular/material/core'

import { DatePickerHeaderComponent } from '../date-picker-header/date-picker-header.component'
import { CommunicationService } from '../../services'
import { Subject, takeUntil, tap } from 'rxjs'

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  providers: [
    provideNativeDateAdapter(),
    CommunicationService
  ]
})
export class DatePickerComponent implements OnDestroy {
  readonly header = DatePickerHeaderComponent;

  private readonly destroy$ = new Subject<void>()

  constructor (@Self() private readonly communication: CommunicationService) {
    this.communication.count.pipe(
      takeUntil(this.destroy$),
      tap(v => {
        // if (v === 3) this.communication.increment()
      })
    ).subscribe(v => { console.log(`DATEPICKER: ${v}`) })
  }

  ngOnDestroy (): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
