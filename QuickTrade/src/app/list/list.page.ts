import { Component, OnInit } from '@angular/core';
import { IProducto, IMotor, IInmobiliaria, ITecnologia, IUsuario } from '../Interfaces';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuario:number
  nombre :string;
  productos: (IProducto | IInmobiliaria | IMotor | ITecnologia | IUsuario)[];

  constructor(private _activatedRoute: ActivatedRoute, private _productoService: ProductoService) { }

  ngOnInit() {
    let ref= this._productoService.getProductos();

    ref.once("value",snapshot =>{
      snapshot.forEach(child =>{
        let value =child.val();
        this.productos.push(value);
        console.log("El total de me gusta de los usuarios es: " +child.val().usuario);
      })
    })
  }

}
