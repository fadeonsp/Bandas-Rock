import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banda } from './banda';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BandasService {

  constructor(private http: HttpClient) { }

  listarBandas(): Observable<any> {
    return this.http.get(environment.apiBanda);
  }

  cadastrarBanda(banda: Banda): Observable<any>{
    return this.http.post(environment.apiBanda, banda);
  }

  atualizarBanda(id: any, banda: Banda): Observable<any> {
    return this.http.put(environment.apiBanda, banda);
  }

  removerBanda(id: any) {
    return this.http.delete(environment.apiBanda.concat(id));
  }

}
