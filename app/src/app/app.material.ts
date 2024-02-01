import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [FlexLayoutModule, MatCardModule, MatInputModule, FormsModule],
  exports: [FlexLayoutModule, MatCardModule, MatInputModule, FormsModule],
})
export class AppMaterialModule {}
