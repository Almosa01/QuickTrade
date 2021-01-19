import { Component } from '@angular/core';

import { IProducto, IMotor, IInmobiliaria, ITecnologia,IUsuario } from '../Interfaces';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  usuario:number
  nombre :string;
  productos: (IProducto | IInmobiliaria | IMotor | ITecnologia | IUsuario)[];

  constructor(private _activatedRoute: ActivatedRoute, private _productoService: ProductoService) { }

  ngOnInit() {
    let ref= this._productoService.getProductos();

    ref.once("value",snapshot =>{
      snapshot.forEach(child =>{
        let value =child.val();
        console.log("El total de me gusta de los usuarios es: " +child.val().usuario);
      })
    })
  }
}
