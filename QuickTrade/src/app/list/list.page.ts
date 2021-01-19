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


  nombre :string;
  productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[];

  constructor(private _activatedRoute: ActivatedRoute, private _productoService: ProductoService) { }

  ngOnInit() {
    let ref= this._productoService.getProductos();

    ref.once("value",snapshot =>{
      snapshot.forEach(child =>{
        this.nombre=child.val().nombre
      })
    })
  }

}
