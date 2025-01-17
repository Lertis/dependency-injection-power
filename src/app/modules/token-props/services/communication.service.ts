import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable()
export class CommunicationService {
  private count$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  increment () {
    const current = this.count$.value
    this.count = current + 1
  }

  private set count (v: number) { this.count$.next(v) }

  get count (): Observable<number> { return this.count$.asObservable() }
}
