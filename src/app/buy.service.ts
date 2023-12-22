import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Buy } from './buy';
import { HttpHeaders } from '@angular/common/http';
import { ProductQuantity } from './product-quantity';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
productQuantity: ProductQuantity;
products: ProductQuantity[] = [];
prods: Product[] = [];



//--------------------------------Metodo para buscar todas las compras----------------------------------------------------
//Url para obtener el listado de todas las compras
  private baseURL = "http://localhost:8080/api/buys";
  
  constructor(private httpClient : HttpClient) { }

  obtenerListaDeCompras():Observable<Buy[]>{
    return this.httpClient.get<Buy[]>(`${this.baseURL}`);
  }

  registrarCompra(compra:Buy) : Observable<Object>{
       return this.httpClient.post(`${this.baseURL}`,compra);
   }

agregarProducto(product: Product, cantidad:number){

  this.productQuantity = new ProductQuantity();
  this.productQuantity.idProduct = product.id;
  this.productQuantity.quantity = cantidad;
  this.products.push(this.productQuantity);
  this.prods.push(product);

}



obtenerListaDeProductos(): ProductQuantity[]{
  return this.products;
}

obtenerProds(): Product[]{
  return this.prods;
}

vaciarProductos(){
  this.products = [];
  this.prods = [];
}
 

}
