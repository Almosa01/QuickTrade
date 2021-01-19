import { Component, OnInit } from '@angular/core';
import {IProducto} from '../Interfaces';
import {ProductoService} from '../services/producto.service';


@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {

  constructor(private _productoService: ProductoService ) {} 
  id:number;

  nombre: string;

  descripcion: string;

  precio: number;

  categoria: string; 

  productos: (IProducto)[] = []  

  ngOnInit() {
  }
  async insertar(){
    
    let producto: IProducto ={
      "id": this.productos.length + 1,
      "nombre": this.nombre,
      "descripcion": this.descripcion,
      "precio": this.precio,
      "categoria" : this.categoria,
    }


    this._productoService.setproducto(producto);



  };

}
