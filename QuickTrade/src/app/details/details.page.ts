import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducto } from '../Interfaces';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id:number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;

  tipos: string;
  km: number;
  anyo: number;

  m2: number;
  nbanyos: number;
  nhabitaciones: number;
  localidad: string;
  
  estado:string;

  constructor(private _activatedRoute: ActivatedRoute, private _productoService: ProductoService) { }

  ngOnInit() {
      
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');


    this.id = this._productoService.getProducto(this.id).id;
    this.nombre = this._productoService.getProducto(this.id).nombre;
    this.descripcion = this._productoService.getProducto(this.id).descripcion;
    this.precio = this._productoService.getProducto(this.id).precio;
    this.categoria = this._productoService.getProducto(this.id).categoria;

  
  }

}
