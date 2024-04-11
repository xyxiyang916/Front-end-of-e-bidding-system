import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BwicListComponent } from './bwic-list/bwic-list.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserpageComponent } from './userpage/userpage.component';
import { MarketSituationComponent } from './market-situation/market-situation.component';
import { TestComponent } from './test/test.component';
import { ManageComponent } from './manage/manage.component';
import { ForgetComponent } from './forget/forget.component';

const routes: Routes = [
  { path: 'test', component: TestComponent, title: 'test' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'profile', component: UserpageComponent, title: 'your home' },
  { path: 'login', component: LoginComponent, title: 'eBidding | Log in' },
  { path: 'register', component: RegisterComponent, title: 'eBidding | register' },
  { path: 'forget', component: ForgetComponent, title: 'eBidding | forget' },
  {
    path: 'dashboard',
    component: MainFrameComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent, title: 'eBidding | Welcome' },
      { path: 'bwicList', component: BwicListComponent, title: 'eBidding | BWIC list' },
      { path: 'market', component: MarketSituationComponent, title: 'eBidding | BWIC Market' },
      { path: 'manage', component: ManageComponent, title: 'eBidding | manage' },
    ]
  },
  { path: 'error', component: ErrorComponent, title: 'eBidding | error' },
  { path: '**', component: ErrorComponent, title: 'eBidding | error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
