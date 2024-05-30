import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ActualizarProductoDto } from './DTO/ActualizarProductoDto';
import { CrearProductoDto } from './DTO/CrearProductoDto';

@Controller('productos')
export class ProductosController {



    constructor(
        private readonly productosService: ProductosService
    ) {}
    
    @Get()
    getAllProductos(){
        // return this.productos;
        return this.productosService.GetAll();
    }

    @Get(":id")
    getProductosById(@Param("id") id:String){
        // return this.productos[+id];
        return this.productosService.GetAllId(+id);
    }

    @Post()
    crearProducto(@Body() crearDto:CrearProductoDto){
        return this.productosService.create(crearDto);

    }
    @Patch(":id")
    actualizarProducto(
        @Param("id") id:String,
        @Body() updateDto:ActualizarProductoDto){
        return this.productosService.update(+id,updateDto);
    }

    @Delete(":id")
    eliminarProducto(@Param("id") id:String){
        return this.productosService.delete(+id);
    }






}
