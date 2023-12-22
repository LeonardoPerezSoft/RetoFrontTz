import { Component, OnInit } from '@angular/core';
import { Buy } from '../buy';
import { BuyService } from '../buy.service';
import { Router } from '@angular/router';
import { ProductQuantity } from '../product-quantity';
import swal from 'sweetalert2';
import { Product } from '../product';

@Component({
  selector: 'app-register-buy',
  templateUrl: './register-buy.component.html',
  styleUrls: ['./register-buy.component.css']
})
export class RegisterBuyComponent implements OnInit {

compra: Buy = new Buy();
productQuantity:ProductQuantity;
productId: number;
quantity:number;

products: ProductQuantity[] = [];

constructor(private compraService:BuyService, private router:Router){}


ngOnInit(): void {
 
}

guardarCompra(){
  const productQuantity: ProductQuantity ={
    idProduct: this.productId,
    quantity: this.quantity
  }

 // const productQuantity= this.compraService.obtenerListaDeProductos();
  this.compra.products = [productQuantity];
  //this.products = [productQuantity];

    this.compraService.registrarCompra(this.compra).subscribe(
      dato => {
      console.log(dato);
      this.irALaListaDeCompras();
    }, error => console.log(error));
}
  




// guardarCompra(){
//   this.compraService.registrarCompra(this.compra).subscribe(dato => {
//       console.log(dato);
//       this.irALaListaDeCompras();
//     }, error => console.log(error));
// }


irALaListaDeCompras(){
  this.router.navigate(['/compras'])
}


onSubmit(){
 this.guardarCompra();
}



obtenerListaDeProductos(): ProductQuantity[]{
  return this.compraService.obtenerListaDeProductos();
}



}
