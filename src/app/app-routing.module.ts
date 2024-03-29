import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BwicListComponent } from './bwic-list/bwic-list.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, title: 'eBidding system' },
  { path: 'login', component: LoginComponent, title: 'eBidding | Log in' },
  { path: 'register', component: RegisterComponent, title: 'eBidding | register' },
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
