import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-requestdemo',
  templateUrl: './requestdemo.component.html',
  styleUrls: ['./requestdemo.component.css']
})
export class RequestdemoComponent implements OnInit {
 public demorequest:any={};
 public hideshow:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.hideshow=false;
  }

  public requestfordemo(form: NgForm){
   
  this.demorequest.status ="inprogress";
 // console.log(this.demorequest);
  this.http.post("http://smart-go.in:8081/supportservices/sendmailandsavedetails",this.demorequest,{responseType: 'text' as 'json'}).subscribe(
    data=>{
      this.hideshow=true;
    //alert("Request accepted successfully !")
    form.resetForm();
    },
    error=>{
console.log(error);

    }
  );


  }
}
