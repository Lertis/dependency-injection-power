import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FirstComponent } from './first.component'
import { BoxModule } from "../../../shared/box/box.module";

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, BoxModule],
  exports: [FirstComponent]
})
export class FirstModule { }
