import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

declare let toastr: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }
    // 使用 FormBuilder 创建一个登录表单，并将其赋值给 loginForm 变量。
    registerForm = this.formBuilder.group({
    username: '',
    password: ''
  })

  // 获取表单中的用户名和密码，并通过 UserService 发起登录请求
  onSubmit(): void {
    const username = this.registerForm.controls['username'].value;
    const password = this.registerForm.controls['password'].value;
    // window.alert('username:' + username + ' password:' + password);
    if(username?.trim() && password?.trim()) {
      //先清空localStorage里面的user缓存
      this.userService.clearUserFromLocalStorage();
      //请求后台获取登录user数据
      this.userService.postUserInfo(username, password).subscribe(userInfoResponse => {
        if (userInfoResponse.code === -101) {
          //显示错误提示框
          toastr.error('注册失败');
        } else {
          //将获取到的user数据添加到localStorage里面
          this.userService.addUserToLocalStorage(userInfoResponse.data);
          toastr.error('注册成功');
          //跳转到dashboard
          this.route.navigate(['/dashboard']);
        }
      });
    } else {
      // window.alert('User: ' + username + " doesn't exist!");
    }
  }
}
