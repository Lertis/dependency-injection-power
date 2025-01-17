import { Component, signal, inject, Host, SkipSelf } from '@angular/core'
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core'
import { MatCalendar } from '@angular/material/datepicker'

import { Subject } from 'rxjs'
import { startWith, takeUntil } from 'rxjs/operators'

import { CommunicationService } from '../../services'

@Component({
  selector: 'app-date-picker-header',
  templateUrl: './date-picker-header.component.html',
  styleUrl: './date-picker-header.component.scss'
})
export class DatePickerHeaderComponent<D> {
  private _calendar = inject<MatCalendar<D>>(MatCalendar)
  private _dateAdapter = inject<DateAdapter<D>>(DateAdapter)
  private _dateFormats = inject(MAT_DATE_FORMATS);

  private readonly destroy$ = new Subject<void>()

  readonly periodLabel = signal('')

  constructor (@SkipSelf() private readonly communication: CommunicationService) {
    this._calendar.stateChanges.pipe(startWith(null), takeUntil(this.destroy$)).subscribe(() => {
      this.periodLabel.set(
        this._dateAdapter
          .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
          .toLocaleUpperCase(),
      )
    })

    this.communication.count.pipe(
      takeUntil(this.destroy$)
    ).subscribe(v => { console.log(`HEADER: ${v}`) })
  }

  ngOnDestroy () {
    this.destroy$.next()
    this.destroy$.complete()
  }

  previousClicked (mode: 'month' | 'year') {
    this.communication.increment()
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1)
  }

  nextClicked (mode: 'month' | 'year') {
    this.communication.increment()
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1)
  }
}
