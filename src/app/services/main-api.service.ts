import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainApiService {
  getEmployeesURL= environment.api_url+"unknown";
  
  constructor(public httpClient: HttpClient) { }
  
  getemployees()
  {
    return this.httpClient.get(this.getEmployeesURL);
  }

}
