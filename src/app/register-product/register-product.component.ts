import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  producto : Product = new Product();
  constructor(private productService:ProductService, private router:Router) { }
  
  ngOnInit(): void{
   
  }

  guardarProducto(){
    this.productService.registrarProducto(this.producto).subscribe(dato => {
      console.log(dato);
      this.irALaListaDeProductos();

    }, error => console.log(error));
  }

  irALaListaDeProductos(){
    this.router.navigate(['/productos'])
    swal('Producto creado',`El producto ${this.producto.name} ha sido creado con exito`, `success`);
  }



  onSubmit(){
    this.guardarProducto();
  }

}
