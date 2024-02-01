import { NgModule } from "@angular/core";

import { ClientModule } from "./client/client.module";
import { AppMaterialModule } from "../app.material";

@NgModule({
  imports: [AppMaterialModule, ClientModule],
})
export class PagesModule {}
