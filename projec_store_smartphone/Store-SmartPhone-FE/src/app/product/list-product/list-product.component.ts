import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../store.service';



@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],

})
export class ListProductComponent implements OnInit {
  listProduct : any = [];
  nameProduct: string = "";
  codeProduct: string = "";
  page: number = 0;
  totalPages: number;
  totalElements: number;




  constructor(
    private storeService: StoreService,

  ) { }

  ngOnInit(): void {
    this.storeService.getAllProduct(this.nameProduct, this.codeProduct, this.page).subscribe(value => {
      this.listProduct = value ["content"];
      this.totalPages = value ["totalPages"];
      this.totalElements = value ["totalElements"]
      console.log(value);
    })
  }

  previousPage() {
    this.page = this.page -1;
    if (this.page == 0 || this.page < 0) {
      this.page = 0
    this.ngOnInit()
    }else {
      this.ngOnInit()
    }
  }

  nextPage() {
    this.page = this.page + 1;
    if (this.page > this.totalPages ) {
      this.page = this.totalPages;
      this.ngOnInit();
    }else {
      this.ngOnInit();
    }
  }

  search() {
    this.ngOnInit();
  }
}
