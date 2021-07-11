import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(private service: DataService) { }
  na:any
  fd:any
  

  ngOnInit(): void {
    
  }
  
  getname(dn:any){
    console.log(dn);
    this.fd=dn

    //return dn;
    //let url="https://dog.ceo/api/breed/"+dn.breed+"/images/random";
    // console.log(url);
    //this.na=url
    //console.log(this.na);
    this.service.setdata(this.fd);
    
  }


}
