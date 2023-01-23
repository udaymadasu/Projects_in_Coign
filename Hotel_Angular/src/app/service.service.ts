import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 

  httpsOption={
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get("https://localhost:44305/api/Reserve/get/")
  }
  Insert(data : any){
    return this.http.post("https://localhost:44305/api/Reserve/po/",data);
  }
  Delete(Snum : any){
    return this.http.delete("https://localhost:44305/api/Reserve/del/"+Snum);
  }
}