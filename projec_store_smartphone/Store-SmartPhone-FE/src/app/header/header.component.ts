import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart:any=[];
  flag : boolean = false;
  checkToken = localStorage.getItem('token')



  constructor(
    private router:Router
  ) {

  }

  ngOnInit(): void {

    }


  logOut() {
    localStorage.clear();
    this.router.navigateByUrl("")
  }
}
