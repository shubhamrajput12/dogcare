import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  getsend = new Subject();

  constructor(private http:HttpClient) {}
  setdata(na:any){
    this.getsend.next(na);
    
    
  }
  
  
  }
