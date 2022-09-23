import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../store.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister = new FormGroup({
    username: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required])
  })

  constructor(
    private storeService: StoreService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  register() {
  this.storeService.registerUser(this.formRegister.value).subscribe(()=>{
    this.router.navigateByUrl('authenticate').then(r =>
      // Swal.fire({
      //   icon: 'success',
      //   title: 'register user complete!'
      //   // text: 'thêm đối tượng:' + ,
      // })
      Swal.fire({
        position: 'top',
        background: '#f8f9fa',
        width: 500,
        heightAuto: true,
        icon: 'success',
        title: 'Successful account registration.',
        toast: true,
        showConfirmButton: false,
        timer: 6000,
      })
    );
  })
  }
}
