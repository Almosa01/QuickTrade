import { Component, OnInit } from '@angular/core';
import {IProducto} from '../Interfaces';
import {ProductoService} from '../services/producto.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {

  constructor(private _productoService: ProductoService,public toastController: ToastController ) {} 
  id:number;

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


    this._productoService.setproducto(producto);



  };
  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Se han guardado los cambios',
      duration: 2000
    });
    toast.present();
  }

}
