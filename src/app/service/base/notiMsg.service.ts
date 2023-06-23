import { Injectable } from "@angular/core";
import { HttpDataService } from "./httpData.service";

@Injectable({
  providedIn: "root",
})
export class MsgAdminService {
  constructor(private httpDataService: HttpDataService) {}

  getType$() {
    var url = '';
    return this.httpDataService.get(url, {});
  }
}
