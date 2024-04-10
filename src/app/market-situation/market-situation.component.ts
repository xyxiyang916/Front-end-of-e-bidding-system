import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
@Component({
  selector: 'app-market-situation',
  templateUrl: './market-situation.component.html',
  styleUrls: ['./market-situation.component.css']
})
export class MarketSituationComponent {
  plotImage1: string | null = null;
  plotImage2: string | null = null;
  plotImage3: string | null = null;
  plotImage4: string | null = null;
  plotImage5: string | null = null;
  private userId = this.userService.getLoggedUser().id;
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private route: Router
  ) { }
  ngOnInit(): void {
    // 有登录用户
    if (this.userId) {
    } else {
      // 否则要求登录
      this.route.navigate(['/login']);
    }
  }
  /*
  ngOnInit(): void {
    this.http.post('http://localhost:2025/plot/pic1', { }, { responseType: 'blob' }).subscribe((res: any) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.plotImage1 = reader.result as string;
      };
      reader.readAsDataURL(res);
    });

    this.http.post('http://localhost:2025/plot/pic2', { }, { responseType: 'blob' }).subscribe((res: any) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.plotImage2 = reader.result as string;
      };
      reader.readAsDataURL(res);
    });

    this.http.post('http://localhost:2025/plot/pic3', { }, { responseType: 'blob' }).subscribe((res: any) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.plotImage3 = reader.result as string;
      };
      reader.readAsDataURL(res);
    });



    this.http.post('http://localhost:2025/plot/pic5', { }, { responseType: 'blob' }).subscribe((res: any) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.plotImage5 = reader.result as string;
      };
      reader.readAsDataURL(res);
    });

  }*/
}
