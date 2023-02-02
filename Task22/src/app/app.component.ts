import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Data1Service } from './data1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task22';
  constructor (private data1Service: Data1Service){

  }

  getUsers(){
    this.data1Service.getAllUsers().subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
  }

  getComment(){
    this.data1Service.getCommentsId1(1).subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
  }

  PostBody(){
    this.data1Service.PostBodyParam().subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
  }

  GetErrorEvent(){
    this.data1Service.GEtError().subscribe({
      next:(response)=>{
        console.log(response)
      },
      error:(err:HttpErrorResponse)=>{
        if (err.status===404){
          
        }
      }
    })
  }

  Delete(){
    this.data1Service.deleteTitle('1').subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
  }

  Headers(){
    this.data1Service.getHeaders().subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
  }

}
