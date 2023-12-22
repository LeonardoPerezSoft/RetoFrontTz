import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number;
  producto : Product = new Product();
  constructor(private productService:ProductService, private router:Router, private route:ActivatedRoute) { }
  
  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.productService.obtenerEmpleadoPorId(this.id).subscribe( dato => {
      this.producto = dato;
    }, error => console.log(error));
    
  }
 
  irALaListaDeProductos(){
    this.router.navigate(['/productos'])
    swal('Producto actualizado',`El producto ${this.producto.name} ha sido actualizado con exito`, `success`);
  }

  onSubmit(){
    this.productService.actualizarProducto(this.id, this.producto).subscribe( dato => {
      this.irALaListaDeProductos();
    },error => console.log(error));
  }   
}


