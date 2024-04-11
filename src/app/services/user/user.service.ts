import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserInfo, UserInfoResponse } from 'src/app/models/user';
import { catchError, map, Observable } from 'rxjs';
import { Constants } from 'src/app/consts/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  //返回Observable<UserInfoResponse>
  public getUserInfo(username: string, password: string): Observable<UserInfoResponse> {
    return this.http.get<UserInfoResponse>(Constants.apiConfig.loginUri.replace('{var1}', username)).pipe(
      map(response => {
        if (response.code === 0 || response.code === 0 || -101) {
          return response;
        } else {
          throw new Error('Get UserInfo error');
        }
      }),
      catchError(error => {
        throw new Error('Get UserInfo error');
      })
    );
  }

  public login(username: string, password: string): Observable<any> {
    const body={
      "username":username,
      "password":password
    }
    return this.http.post<any>(Constants.apiConfig.login, body).pipe(
      map(response => {
        if (response.code === 0 || response.code === -101) {
          return response;
        } else {
          throw new Error('Get UserInfo error');
        }
      }),
      catchError(error => {
        throw new Error('Get UserInfo error');
      })
    );
  }

  public postUserInfo(number: string, password: string): Observable<any> {
    const body={
      "number":number,
      "password":password
    }
    return this.http.post<any>(Constants.apiConfig.registerUri, body).pipe(
      map(response => {
        if (response.code === 0 || response.code === 1 || response.code === -101) {
          return response;
        } else {
          throw new Error('Get UserInfo error');
        }
      }),
      catchError(error => {
        throw new Error('Get UserInfo error');
      })
    );
  }

  public addUserToLocalStorage(userInfo: UserInfo): void {
    //this field is used for passing params in the API request
    window.localStorage.setItem('user_id', userInfo.id + '');
    //this field is used for displaying in UI
    window.localStorage.setItem('user_name', userInfo.name);
  }

  public clearUserFromLocalStorage(): void {
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('user_name');
  }

  public getLoggedUser(): UserInfo {
    const userInfo: UserInfo = {
      id: Number(window.localStorage.getItem('user_id')),
      name: window.localStorage.getItem('user_name') + ''
    };
    return userInfo;
  }
}
