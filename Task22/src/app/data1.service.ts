import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor(
    private http: HttpClient
  ) { }


  getAllUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getCommentsId1(id:number){
    return this.http.get('https://jsonplaceholder.typicode.com/comments', {
      params: new HttpParams().set('id', id)
  });
  }

  PostBodyParam(){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {
        body: '',
    });
  }

  GEtError(){
    return this.http.get(' https://jsonplaceholder.typicode.com/post');
  }

  deleteTitle(id: number | string){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1', {
        params: new HttpParams().set('id', id)
    });
  }

  getHeaders(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts', 
    {headers:{'X-Test':'1'}, responseType:'text'},)
  }
}
