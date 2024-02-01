import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ClientComponent } from "./client.component";
import { ClientService } from "src/app/services/client.service";
import { AppMaterialModule } from "src/app/app.material";

export const ClientRoutes: Routes = [
  {
    path: "client",
    component: ClientComponent,
  },
];

@NgModule({
  imports: [CommonModule, AppMaterialModule],
  declarations: [ClientComponent],
  providers: [ClientService],
})
export class ClientModule {}
