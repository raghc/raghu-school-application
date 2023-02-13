import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  AllStudents(): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/leads");
  }
  filterdata(term: any): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/leads?filter="+ term);
  }

  sortthedata(colomn: any, order: any): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/leads?sortBy="+colomn +'&order=' +order);
  }
  pagenation(limit: number, page: number): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/leads?limit="+limit + '&page='+ page);
  }

  studentform(data: any): Observable<any> {
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/leads",data );
  }
  studentdetailswithid(id: any): Observable<any> {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/leads/" + id );
  }

updatedata(data:any,id:number){
  return this.httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/leads/"+id,data);

}

  delete(id: any): Observable<any> {
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/leads/" + id);
  }
}
