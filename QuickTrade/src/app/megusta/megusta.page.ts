import { Component, OnInit } from '@angular/core';
import {IProducto} from '../Interfaces';
import {ProductoService} from '../services/producto.service';

@Component({
  selector: 'app-megusta',
  templateUrl: './megusta.page.html',
  styleUrls: ['./megusta.page.scss'],
})
export class MegustaPage implements OnInit {

  constructor(private _productoService: ProductoService) { }
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string; 
  usuario: number;
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
      "usuario": this.usuario,
    }
    this._productoService.setproducto(producto)
  }
}
