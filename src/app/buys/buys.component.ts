import { Component, OnInit } from '@angular/core';
import { Buy } from '../buy';
import { BuyService } from '../buy.service';

@Component({
  selector: 'app-buys',
  templateUrl: './buys.component.html',
  styleUrls: ['./buys.component.css']
})
export class BuysComponent implements OnInit {

  compras:Buy[];

  constructor(private buyService:BuyService){}

  ngOnInit(): void {
    this.obtenerCompras();
  
  }

  private obtenerCompras(){
    this.buyService.obtenerListaDeCompras().subscribe(dato => {
        this.compras = dato;
    });
  }

}
