import {Component, OnInit, Output} from '@angular/core';
import {StoreService} from '../store.service';
import {FormControl, FormGroup} from '@angular/forms';
import {NzNotificationService} from 'ng-zorro-antd/notification';
// import {NzNotificationService} from 'ng-zorro-antd/notification';
// import {NzMessageService} from 'ng-zorro-antd/message';
// import {NzNotificationService} from 'ng-zorro-antd/notification';
// import {NzMessageModule, NzMessageService} from 'ng-zorro-antd/message';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  listSmartPhone: any = [];
  listTablet: any = [];
  listSmartWatch: any = [];
  listSmartTV: any = [];
  nameSmartPhone: string = "";
  nameTablet: string = "";
  nameSmartWatch: string = "";
  nameSmartTV: string = "";
  obj: any = "";
  carts: any = [];
  sumPrice: number = 0;
  values: any = [];

  formProduct = new FormGroup(
    {
      id: new FormControl(""),
      priceProduct: new FormControl(""),
      imageProduct: new FormControl(""),
      name: new FormControl(""),
      configurationProduct: new FormControl(""),
      codeProduct: new FormControl(""),
      flag: new FormControl("")
    }
  )
  constructor(
    private storeService: StoreService,
    private notification: NzNotificationService,
    // private message: NzMessageService
  ) { }

  ngOnInit(): void {


    this.storeService.getListSmartPhone(this.nameSmartPhone).subscribe(value => {
      this.listSmartPhone = value;
      // console.log(value);
    });

    this.storeService.getListTablet(this.nameTablet).subscribe(value1 => {
      this.listTablet = value1;
      // console.log(value1);
    });

    this.storeService.getListSmartWatch(this.nameSmartWatch).subscribe(value2 => {
      this.listSmartWatch = value2;
      // console.log(value2);
    });

    this.storeService.getListSmartTV(this.nameSmartTV).subscribe(value3 => {
      this.listSmartTV = value3;
      // console.log(value3);
    });

  }


  requestId(idProduct: any) {
    // console.log(123);
  this.storeService.findByIdProduct(idProduct).subscribe(value => {
    this.obj = value;
    // console.log(value);
  })
  }

  @Output()
  addCart(id: any) {
    this.storeService.findByIdProduct(id).subscribe(value => {
      this.formProduct.setValue(value);
      this.sumPrice += Number(this.formProduct.value.priceProduct)
      this.carts.push(value);
      this.notification.success("",'The product has been added to cart')
      // this.message.success('Loading finished', { nzDuration: 2500 }).onClose!;

    })
  }

  delete(i: number, cart: any, sumPrice: number) {
    for (let k = 0; k<=cart.length;k++) {
      if (k == i) {
      this.sumPrice =  sumPrice - Number(cart[k].priceProduct)
        cart.splice(k,1);
      }
    }

  }
}
