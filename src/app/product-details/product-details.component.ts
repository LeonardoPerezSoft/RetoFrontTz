import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

id:number;
producto:Product;
constructor(private route:ActivatedRoute, private productService:ProductService){}

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.producto = new Product();
  this.productService.obtenerEmpleadoPorId(this.id).subscribe(dato => {
    this.producto = dato;
  });
  
}


}
