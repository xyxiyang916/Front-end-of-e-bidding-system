import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Constants } from 'src/app/consts/constants';
import { BwicInfo, BwicInfoResponse, CancelBwicBidRequest, UpdateBwicBidRequest, ModifyBwicBidRequest, DeleteBwicBidRequest, CreateBwicBidRequest } from 'src/app/models/bwic';
import { UserService } from '../user/user.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BwicService {

  currentBwic: BwicInfo = new BwicInfo();
  userId: number = 0;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
    this.userId = userService.getLoggedUser().id;
  }

  public getBwicList(userId: number, filterType: string = 'All'): Observable<BwicInfo[]> {
    let uri: string = '';
    if (filterType === 'All') {
      // 获取所有
      uri = Constants.apiConfig.allBwicListUri.replace('{var1}', userId + '')
    } else if (filterType === 'My') {
      // 获取我的所有
      uri = Constants.apiConfig.myInvolvedBwicListUri.replace('{var1}', userId + '')
    }

    return this.http.get<BwicInfoResponse>(uri).pipe(
      map(response => {
        if (response.code === 0) {
          return response.data;
        } else {
          throw new Error('Get BWIC list error!');
        }
      }),
      catchError(error => {
        console.error("error: " + error);
        throw new Error('Get BWIC list error!');
      })
    );
  }

  //This is used for bwic bid updaate and add
  public updateBwicBid(updatedBwic: BwicInfo): Observable<BwicInfoResponse> {
    const updateBwicBidRequest: UpdateBwicBidRequest = {
      'bwicId': updatedBwic.bwicId,
      'clientId': this.userId,
      'bidMarketValue': updatedBwic.bidMarketValue
    }

    return this.http.post<BwicInfoResponse>(Constants.apiConfig.updateBwicUri, updateBwicBidRequest).pipe(
      map(response => {
        if (response.code === 0 || response.code === -102) {
          return response;
        } else {
          throw new Error('update BWIC error!');
        }
      }),
      catchError(error => {
        throw new Error('update BWIC error!');
      })
    )
  }

  public cancelBwic(bwicId: number): Observable<BwicInfo[]> {
    const cancelBwicBidRequest: CancelBwicBidRequest = {
      'bwicId': bwicId,
      'clientId': this.userId
    }

    return this.http.post<BwicInfoResponse>(Constants.apiConfig.cancelBwicUri, cancelBwicBidRequest).pipe(
      map(response => {
        if (response.code === 0) {
          return response.data;
        } else {
          throw new Error('cancel BWIC error!');
        }
      }),
      catchError(error => {
        throw new Error('cancel BWIC error!');
      })
    );
  }

  //This is used for bwic bid modify and add
  public modifyBwicBid(modifydBwic: BwicInfo): Observable<BwicInfoResponse> {
    const datePipe = new DatePipe('en-US');
    const formattedDueDate = datePipe.transform(modifydBwic.dueDate, 'yyyy-MM-dd');
    const defaultDueDate = '0000-00-00'; // 设置一个默认日期
    const modifyBwicBidRequest: ModifyBwicBidRequest = {
      'clientId': this.userId,
      'bwicId': modifydBwic.bwicId,
      'cusip': modifydBwic.cusip,
      'position': modifydBwic.position,
      'price': modifydBwic.price,
      'dueDate': formattedDueDate || defaultDueDate, // 使用默认日期处理 null 值
      'marketValue': modifydBwic.marketValue,
    }


    return this.http.post<BwicInfoResponse>(Constants.apiConfig.modifyBwicUri, modifyBwicBidRequest).pipe(
      map(response => {
        if (response.code === 0 || response.code === -102) {
          return response;
        } else {
          throw new Error('modify BWIC error!');
        }
      }),
      catchError(error => {
        throw new Error('modify BWIC error!');
      })
    )
  }

  public deleteBwic(bwicId: number): Observable<BwicInfo[]> {
    const deleteBwicBidRequest: DeleteBwicBidRequest = {
      'bwicId': bwicId,
      'clientId': this.userId
    }

    return this.http.post<BwicInfoResponse>(Constants.apiConfig.deleteBwicUri, deleteBwicBidRequest).pipe(
      map(response => {
        if (response.code === 0) {
          return response.data;
        } else {
          throw new Error('delete BWIC error!');
        }
      }),
      catchError(error => {
        throw new Error('delete BWIC error!');
      })
    );
  }

  //This is used for bwic bid create
  public createBwicBid(createdBwic: BwicInfo): Observable<BwicInfoResponse> {
    const datePipe = new DatePipe('en-US');
    const formattedDueDate = datePipe.transform(createdBwic.dueDate, 'yyyy-MM-dd');
    const defaultDueDate = '0000-00-00'; // 设置一个默认日期
    const createBwicBidRequest: CreateBwicBidRequest = {
      'clientId': this.userId,
      'cusip': createdBwic.cusip,
      'position': createdBwic.position,
      'price': createdBwic.price,
      'dueDate': formattedDueDate || defaultDueDate, // 使用默认日期处理 null 值
      'marketValue': createdBwic.marketValue,
    }

    return this.http.post<BwicInfoResponse>(Constants.apiConfig.createBwicUri, createBwicBidRequest).pipe(
      map(response => {
        if (response.code === 0 || response.code === -102) {
          return response;
        } else {
          throw new Error('create BWIC error!');
        }
      }),
      catchError(error => {
        throw new Error('create BWIC error!');
      })
    )
  }
}
