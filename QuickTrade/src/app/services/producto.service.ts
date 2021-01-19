
import {Injectable} from '@angular/core';   
import { IProducto, IMotor, IInmobiliaria, ITecnologia } from '../Interfaces';

@Injectable()   

export class ProductoService{
    productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [

        {
            "id": 1,
            "nombre": "PC sobremesa",
            "descripcion": "Asus",
            "categoria": "tecnologia",
            "precio": 900,
            "estado": "nuevo"

        },
        {
            "id": 2,
            "nombre": "Chalet",
            "descripcion": "Tiene tres pisos",
            "categoria": "Hogar",
            "precio": 200

        }
    ]
    getProductos(): (IProducto | IInmobiliaria | IMotor | ITecnologia)[]{
        return this.productos;
    }
    getProducto(id:number) : (IProducto | IInmobiliaria | IMotor | ITecnologia){
        return this.productos.find(x => x.id == id);
    } 
}