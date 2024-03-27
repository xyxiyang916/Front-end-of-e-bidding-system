import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BwicListComponent } from './bwic-list/bwic-list.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'eBidding | Log in' },
  {
    path: 'dashboard',
    component: MainFrameComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent, title: 'eBidding | Welcome' },
      { path: 'bwicList', component: BwicListComponent, title: 'eBidding | BWIC list' }
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
