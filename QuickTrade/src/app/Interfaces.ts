export interface IProducto{
    "id":number,
    "nombre":string,
    "descripcion":string,
    "precio":number,
    "categoria":string,
    "usuario":number,
}


export interface IMotor extends IProducto{
    "tipo":string,
    "km":number,
    "anyo":number,
}


export interface IInmobiliaria extends IProducto{
    "m2":number,
    "nbanyos":number,
    "nhabitaciones":number,
    "localidad":string,

}


export interface ITecnologia extends IProducto{
    "estado":string,
}

export interface IUsuario extends IProducto{
    "id":number,
}
