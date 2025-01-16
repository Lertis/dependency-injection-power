import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'

import { USE_CLASS_TOKEN } from '@models'

import { AppComponent } from './app.component'

import { AppRouteModule } from './app-routing.module'

import { BoxModule } from './modules/shared'
import { SixthModule } from './modules/use-class/sixth/sixth.module'
import { SixthRootService } from './modules/use-class/services/sixth-service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRouteModule,
    BoxModule,
    SixthModule, // USE CLASS DIRECT
  ],
  providers: [
    { provide: USE_CLASS_TOKEN, useClass: SixthRootService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
