import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class ClientService {
  private baseUrl = "client";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${environment.api}/${this.baseUrl}`, {});
  }
}
