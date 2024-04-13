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
  public getUserInfo(userId: number): Observable<UserInfoResponse> {
    return this.http.get<UserInfoResponse>(Constants.apiConfig.userInfo.replace('{var1}', userId.toString())).pipe(
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

  //登录
  public login(username: string, password: string): Observable<any> {
    const body = {
      "username": username,
      "password": password
    };

    return this.http.post<any>(Constants.apiConfig.login, body).pipe(
      map(response => {
        // 收到返回：0成功 -101用户不存在空的返回
        if (response.code === "0") {
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


  //test
  public test(username: string, password: string): Observable<any> {
    const body = {
      "username": username,
      "password": password
    }
    return this.http.post<any>(Constants.apiConfig.logintest.replace('{var1}', username).replace('{var2}', password), null).pipe(
      map(response => {
        if (response.code === "0") {
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

  //注册
  public postUserInfo(number: string, password: string): Observable<any> {
    const body = {
      "number": number,
      "password": password
    }
    return this.http.post<any>(Constants.apiConfig.registerUri, body).pipe(
      map(response => {
        // 收到返回：0成功 -101用户不存在空的返回
        if (response.code === "0") {
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

  // 忘记密码
  public forget(number: string, password: string): Observable<any> {
    const body = {
      "number": number,
      "password": password
    }
    return this.http.post<any>(Constants.apiConfig.registerUri, body).pipe(
      map(response => {
        // 收到返回：0成功 -101用户不存在空的返回
        if (response.code === "0") {
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
      name: window.localStorage.getItem('user_name') + '',
      assetValue: 0
    };
    return userInfo;
  }
}
