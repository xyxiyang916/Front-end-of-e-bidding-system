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
    password: ''
  })

  // 获取表单中的用户名和密码，并通过 UserService 发起登录请求
  onSubmit(): void {
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;
    // window.alert('username:' + username + ' password:' + password);
    if(username?.trim() && password?.trim()) {
      //先清空localStorage里面的user缓存
      this.userService.clearUserFromLocalStorage();
      //请求后台获取登录user数据
      this.userService.getUserInfo(username, password).subscribe(userInfoResponse => {
        if (userInfoResponse.code === -101) {
          //显示错误提示框
          toastr.error('该用户不存在，请更换用户名重新登陆。');
        } else {
          //将获取到的user数据添加到localStorage里面
          this.userService.addUserToLocalStorage(userInfoResponse.data);
          //this.message.createBasicMessage;
          //跳转到dashboard
          this.route.navigate(['/dashboard']);
        }
      });
    } else {
      // window.alert('User: ' + username + " doesn't exist!");
    }
  }
}
