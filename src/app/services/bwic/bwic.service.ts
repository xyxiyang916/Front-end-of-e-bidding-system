import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Constants } from 'src/app/consts/constants';
import { BwicInfo, BwicInfoResponse, CancelBwicBidRequest, UpdateBwicBidRequest } from 'src/app/models/bwic';
import { UserService } from '../user/user.service';

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
      uri = Constants.apiConfig.allBwicListUri.replace('{var1}', userId+'')
    } else if (filterType === 'My') {
      uri = Constants.apiConfig.myInvolvedBwicListUri.replace('{var1}', userId+'')
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
  public updateBwicBid(updatedBwic: BwicInfo): Observable<BwicInfoResponse>{
    const updateBwicBidRequest: UpdateBwicBidRequest = {
      'bwicId': updatedBwic.bwicId,
      'clientId': this.userId,
      'bidMarketValue': updatedBwic.bidMarketValue
    }

    return this.http.post<BwicInfoResponse>(Constants.apiConfig.updateBwicUri, updateBwicBidRequest).pipe(
      map(response => {
        if(response.code === 0 || response.code === -102) {
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
        if(response.code === 0) {
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
}
