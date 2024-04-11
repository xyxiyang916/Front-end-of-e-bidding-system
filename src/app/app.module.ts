import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BwicListComponent } from './bwic-list/bwic-list.component';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BwicListFilterComponent } from './bwic-list-filter/bwic-list-filter.component';
import { BwicBidAddComponent } from './bwic-bid-add/bwic-bid-add.component';
import { BwicBidUpdateComponent } from './bwic-bid-update/bwic-bid-update.component';
import { BwicBidCancelComponent } from './bwic-bid-cancel/bwic-bid-cancel.component';
import { BwicBidViewComponent } from './bwic-bid-view/bwic-bid-view.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserpageComponent } from './userpage/userpage.component';
import { MarketSituationComponent } from './market-situation/market-situation.component';
import { TestComponent } from './test/test.component';
import { ManageComponent } from './manage/manage.component';
import { BwicBidModifyComponent } from './bwic-bid-modify/bwic-bid-modify.component';
import { BwicBidDeleteComponent } from './bwic-bid-delete/bwic-bid-delete.component';
import { BwicBidCreateComponent } from './bwic-bid-create/bwic-bid-create.component';
import { ForgetComponent } from './forget/forget.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BwicListComponent,
    MainFrameComponent,
    LeftMenuComponent,
    NavBarComponent,
    BwicListFilterComponent,
    BwicBidAddComponent,
    BwicBidUpdateComponent,
    BwicBidCancelComponent,
    BwicBidViewComponent,
    ErrorComponent,
    WelcomeComponent,
    RegisterComponent,
    HomePageComponent,
    UserpageComponent,
    MarketSituationComponent,
    TestComponent,
    ManageComponent,
    BwicBidModifyComponent,
    BwicBidDeleteComponent,
    BwicBidCreateComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
