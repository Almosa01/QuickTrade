import { Component, OnInit } from '@angular/core';
import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../Interfaces';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[];

  constructor(private _activatedRoute: ActivatedRoute, private _productoService: ProductoService) { }

  ngOnInit() {
    this.productos = this._productoService.getProductos();
  }

}
