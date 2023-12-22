import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  productos:Product[];


constructor(private productService:ProductService, private router:Router) { }

ngOnInit(): void {
  this.obtenerProductos();

}

  actualizarProducto(id:number){
    this.router.navigate(['update-product', id]);
  }

  private obtenerProductos(){
    this.productService.obtenerListaDeProductos().subscribe(dato => {
   this.productos = dato;
    });
  }
  
  eliminarProducto(id:number){
     swal({
            title: 'Estas seguro?',
            text: "Confirma si deseas eliminar el producto",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'No, Cancelar',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true
     }).then((result) => {
        if (result.value){
          this.productService.eliminarProducto(id).subscribe(dato => {
            console.log(dato);
            this.obtenerProductos();
            swal(
              'Producto eliminado!!',
              'El producto ha sido eliminado con exito',
              'success'
            )

        })
     }
    
    });

  }
    
   detallesProducto(id:Number){
    this.router.navigate(['product-details', id]);
   }




}
