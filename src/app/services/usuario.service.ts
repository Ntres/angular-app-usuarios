import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url = 'https://gorest.co.in/public/v1/users';
  token = '7113fe7bc6b05b023c8466767d81bdbdd8a1687773bfb1e0c3285889674cc1f2';

  constructor(private http: HttpClient) {}

  getUsuarios = (): Observable<any> => {
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  };

  getUsuario = (id: any): Observable<any> => {
    return this.http.get<any>(
      this.url + '/' + id + '?access-token=' + this.token
    );
  };
}
