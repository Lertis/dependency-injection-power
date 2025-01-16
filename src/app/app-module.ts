import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'

import { USE_CLASS_TOKEN } from '@models'

import { AppComponent } from './app.component'

import { AppRouteModule } from './app-routing.module'

import { BoxModule } from './modules/shared'
import { UseClassRootService } from './modules/use-class/services'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRouteModule,
    BoxModule
  ],
  providers: [
    // { provide: USE_CLASS_TOKEN, useClass: UseClassRootService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
