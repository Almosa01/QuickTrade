import { Component } from '@angular/core';

import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../Interfaces';

import { AlertController } from '@ionic/angular';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  cat: string = "Categoria";
  tipo: string = "number";



  productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [];
  

  constructor(public alertController: AlertController, private _productoService: ProductoService) {
  

   }


  }
