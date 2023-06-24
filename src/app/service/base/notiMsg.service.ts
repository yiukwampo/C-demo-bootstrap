import { Injectable } from "@angular/core";
import { HttpDataService } from "./httpData.service";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from 'rxjs';
import { Blog } from "src/app/datamapping/Blog";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  constructor(
    private httpDataService: HttpDataService,
    private http: HttpClient,

    ) {}

   updateBlogMessage$(blog: Blog): Promise<Boolean> {
    console.log('RspSubmitService.updateRcsvReqVhAdmitRsp$');
    let token: string | null = sessionStorage.getItem('token');
    let urlPath = '/updateBlogMessage';

    return lastValueFrom(
      this.httpDataService.put(urlPath, blog, {})
    );
  }
}
