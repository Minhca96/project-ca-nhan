import { Injectable } from '@angular/core';
import {HttpClient,  HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class StoreService {
  // httpOptions: any;
  API = "http://localhost:8080/";

  constructor(private httpClient : HttpClient) {
  }


  public getHeaders(){
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set(
      'Authorization', 'Bearer ' + token): null;
  }



  // smartphone;
  //list smartphone;
  public getListSmartPhone(nameProduct: string) {
      return this.httpClient.post(this.API + "Product/listSmartPhone?nameProduct=" + nameProduct,0,{ headers: this.getHeaders()})

    }


  // findByIdProduct
  public  findByIdProduct(idProduct: number){
    return this.httpClient.post(this.API + "Product/findByIdProduct/" + idProduct,0,{headers: this.getHeaders()})
  }


  // tablet
  //list tablet
  public  getListTablet(nameProduct : string) {
    return this.httpClient.post(this.API +"Product/listTablet?nameProduct=" + nameProduct ,  0,{ headers: this.getHeaders()})
  }


  // smartwatch
  //list smartwatch
  public getListSmartWatch(nameProduct: string){
      return this.httpClient.post(this.API + "Product/listSmartWatch?nameProduct=" +nameProduct, 0,{ headers: this.getHeaders()})
  }


  // smartTV
  //list smartTV
  public getListSmartTV(nameProduct: string) {
    return this.httpClient.post(this.API + "Product/listSmartTV?nameProduct=" +nameProduct, 0,{ headers: this.getHeaders()})
  }

  //register
  public registerUser(user: any){
    return this.httpClient.post(this.API + "registerUser",user)
  }


  //registerRole
  public registerRole(role: any){
    return this.httpClient.post(this.API + "registerUser",role)
  }


  //authenticate
  public authenticateUser(user: any){
    return this.httpClient.post(this.API +"authenticate",user)
  }

  // get all product
  getAllProduct( nameProduct: string, codeProduct: string, page: number) {
    return this.httpClient.get(this.API + "Product/getAllProduct?nameProduct=" + nameProduct + "&codeProduct=" +codeProduct + "&page=" +page ,{ headers: this.getHeaders()})
  }
}
