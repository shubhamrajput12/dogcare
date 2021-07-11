import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private service: DataService, private http: HttpClient) {
    
  }
  imgdata:any
  fimg:any
  
  ngOnInit(): void {
    this.service.getsend.subscribe((na:any)=>{
      console.log(na);
      this.imgdata=na;
      let url="https://dog.ceo/api/breed/"+this.imgdata.breed+"/images/random";
      console.log(url);
      return this.http.get(url).subscribe((res:any)=>{
        console.log(res.message);
        this.finaldata(res.message)
        //this.fimg= res.message;
      //  console.log(this.fimg);
        
     })
     })
  }


  finaldata(res:string){
      this.fimg=res;
      console.log("hello "+this.fimg);
      
    }

}
