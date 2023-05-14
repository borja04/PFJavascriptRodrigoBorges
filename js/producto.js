class producto{
    id;
    nombre;
    precio;
    cantidad;
    ruta;
    constructor (id,nombre,precio,cantidad,ruta){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.ruta=ruta;
        console.log(nombre,ruta);
    }
    subTotal = () => {
        return this.precio*this.cantidad;
    }
    getRuta = ()  => {
        return this.ruta;
    }
}