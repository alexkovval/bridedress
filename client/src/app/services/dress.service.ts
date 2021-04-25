import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dress } from '../models/Dress';


@Injectable({
  providedIn: 'root'
})
export class DressService {

    constructor(private http: HttpClient) { }

    public getAll():Promise<Dress[]> {
        const observable=this.http.get<Dress[]>('/api/dress');
        return observable.toPromise();

    }
    
}
