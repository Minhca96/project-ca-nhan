import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {StoreService} from '../store.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  flag = false;
  username: string;
  formLogin = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    remember_me: new FormControl("")

  });

  constructor(
    private storeService: StoreService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }
  @Output() userChanged: EventEmitter<any> = new EventEmitter();

login() {
  localStorage.clear();
  console.log(this.formLogin.value);
  this.userChanged.emit(this.formLogin.value);

  this.storeService.authenticateUser(this.formLogin.value).subscribe(data => {
    let value = data as {id: string,token: string};
    localStorage.setItem("token",value.token)
    this.flag = true;
    // localStorage.setItem("token","jnjnj");
    //   console.log(localStorage);
      this.router.navigateByUrl('');
    },
    err => {

      if (this.formLogin.value.username == '' || this.formLogin.value.password == '') {
        Swal.fire({
          position: 'top',
          background: '#f8f9fa',
          width: 500,
          heightAuto: true,
          icon: 'error',
          title: 'Tên đăng nhập và mật khẩu không được để trống.',
          toast: true,
          showConfirmButton: false,
          timer: 3000,
        });
      }
      else {
        Swal.fire({
          position: 'top',
          background: '#f8f9fa',
          width: 400,
          heightAuto: true,
          icon: 'error',
          title: 'Sai thông tin đăng nhập.\n' +
            'Vui lòng đăng nhập lại.',

          toast: true,
          showConfirmButton: false,
          timer: 3000,
        });

      }
    }
  );
}


}
