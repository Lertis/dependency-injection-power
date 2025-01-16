import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SeventhComponent } from './seventh.component'
import { BoxModule } from "../../shared/box/box.module";

@NgModule({
  declarations: [SeventhComponent],
  imports: [CommonModule, BoxModule],
  exports: [SeventhComponent]
})
export class SeventhModule { }
