import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

//--------------------------------Metodo para buscar todos los productos----------------------------------------------------
//Url para obtener el listado de todos los productos
  private baseURL = "http://localhost:8080/api/products";

  constructor(private httpClient : HttpClient) { }
 
  //Metodo para obtener lista de productos
  obtenerListaDeProductos():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

//--------------------------------------------------------------------------------------------------------------------------

//--------------------------------Metodo para registrar productos ----------------------------------------------------------

registrarProducto(product:Product) : Observable<Object>{
   return this.httpClient.post(`${this.baseURL}`,product);
}

//--------------------------------Metodo para encontrar producto por Id ----------------------------------------------------------

obtenerEmpleadoPorId(id:number):Observable<Product>{
  return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
}

//-----------------------------------Metodo para Actualizar Producto --------------------------------------------------------------

actualizarProducto(id:number, product:Product):Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, product);
}


//----------------------------------------Metodo para Eliminar Producto -----------------------------------------------------------


eliminarProducto(id:number): Observable<object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}


}
