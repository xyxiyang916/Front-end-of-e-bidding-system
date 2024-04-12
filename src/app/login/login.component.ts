import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
//提示

declare let toastr: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    //private message: MessageComponent
  ) { }
  // 使用 FormBuilder 创建一个登录表单，并将其赋值给 loginForm 变量。
  loginForm = this.formBuilder.group({
    username: '',
    password: '',
    type: ''
  })

  // 获取表单中的用户名和密码，并通过 UserService 发起登录请求
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;
    const type = this.loginForm.controls['type'].value;
    // window.alert('username:' + username + ' password:' + password);
    if (username?.trim() && password?.trim() && password.length > 7) {
      //先清空localStorage里面的user缓存
      this.userService.clearUserFromLocalStorage();
      //请求后台获取登录user数据
      this.userService.login(username, password).subscribe(userInfoResponse => {
        if (userInfoResponse.code === "0") {
          //成功登录
          //if (userInfoResponse.code === -101) {
          //将获取到的user数据添加到localStorage里面
          this.userService.addUserToLocalStorage(userInfoResponse.data);
          toastr.success('Welcome to e Bidding System!', 'Success!');
          //跳转到dashboard
          this.route.navigate(['/dashboard']);
        } else {
          // 根据不同状态码输出内容
          // -101没有用户信息
          toastr.error('登陆失败');
        }
      });
    } else {
      // window.alert('User: ' + username + " doesn't exist!");
    }
  }
}
