import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

export interface Album{
  userId: number;
  id: number;
  title: string;
}
@Injectable({
  providedIn: 'root'
})
export class AlbumServices{

  constructor(private http: HttpClient) {
  }
  getAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getSingleAlbum(id: number): Observable<Album>{
    return this.http.get<Album>('https://jsonplaceholder.typicode.com/albums/' + id);
  }
}
