import { Injectable, NotFoundException } from '@nestjs/common';
import { CrearProductoDto } from './DTO/CrearProductoDto';
import { ActualizarProductoDto } from './DTO/ActualizarProductoDto';

@Injectable()
export class ProductosService {

private Productos=[
    {id:1,nombre:'Xiaomi 14 Ultra',categoria:'Telefonos'},
    { id:2,nombre:'Xiaomi 14',categoria:'Telefonos'},
    { id:3,nombre:'Xiaomi 13T',categoria:'Telefonos'}, 
];


GetAll(){
    return this.Productos;
}
GetAllId(id:Number){
    const prod = this.Productos.find( p => p.id === id );
    if ( !prod ) throw new NotFoundException(`Producto con el id '${ id }' no encontrado`);
    
    return prod;
}



create(nuevo:CrearProductoDto){
    const New = {
        id: this.Productos.length+1,
        nombre:nuevo.nombre,
        categoria:nuevo.categoria
    }

    this.Productos.push( New );

}


delete(id:number){
    let prod = this.GetAllId(id);
    if(prod){
        this.Productos = this.Productos.filter (pp => pp.id !== id)
    }

}
update(id:number, prodActualizar:ActualizarProductoDto){
    let prod = this.GetAllId(id);
    console.log(prod);
   
    
    this.Productos = this.Productos.map( p => {

        if ( p.id === id ) {
            prod.nombre = prodActualizar.nombre;
            prod.categoria = prodActualizar.categoria;
            return prod;
        }

        return p;
    })

    return prod;
    
}

}