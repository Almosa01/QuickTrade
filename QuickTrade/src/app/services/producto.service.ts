
import {Injectable} from '@angular/core';   
import { AngularFireDatabase } from '@angular/fire/database';
import { IProducto, IMotor, IInmobiliaria, ITecnologia, IUsuario } from '../Interfaces';

@Injectable()   

export class ProductoService{
    /*productos: (IProducto | IInmobiliaria | IMotor | ITecnologia)[] = [

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
    ]*/
    constructor(private _db: AngularFireDatabase){

    }
    getProductos():firebase.default.database.Reference{
        let ref = this._db.database.ref("productos")
        return ref
    }
    /*getProducto(id:number) : (IProducto | IInmobiliaria | IMotor | ITecnologia){
        return this.productos.find(x => x.id == id);
    } */
    setproducto(producto:(IProducto | IInmobiliaria | IMotor | ITecnologia | IUsuario)){
        
        let ref = this._db.database.ref("productos")
        let res = ref.push(producto);
        console.log("he insertado"+ ref.key)
    }
}