import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NetworkService {
constructor(private httpClient: HttpClient) {}



postData(data: any): Observable<any> {
    return this.httpClient.post('https://testwallet.angelium.net/api/jwt/api-token-auth/', data);
    }
}