import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private dataService: DataService) {}

  users: object[] = [];
  
  ngOnInit() {
    this.dataService.getUsers().subscribe({
      next:(response:any)=>{
        console.log(response)
        this.users=response;
      }
    })
  }
}

