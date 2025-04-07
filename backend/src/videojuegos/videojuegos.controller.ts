import { Controller, Get, Post, Delete, Put, Body, Param, ConflictException, NotFoundException, HttpCode } from '@nestjs/common';
import { VideojuegosService } from './videojuegos.service';
import { CreateVideojuegoDto } from 'src/dto/create-videojuego.dto';

@Controller('videojuegos')
export class VideojuegosController {
    constructor(private videojuegoService: VideojuegosService){}

    @Get()
    findAll(){
        return this.videojuegoService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        const videojuego = await this.videojuegoService.findOne(id);
        if(!videojuego) throw new NotFoundException('Videojuego No Encontrado');
        return videojuego;
    }

    @Post()
    async create(@Body() body: CreateVideojuegoDto){
        try{
            return await this.videojuegoService.create(body);
        }catch(error){
            if(error.code == 11000) {
                throw new ConflictException('Videojuego Ya Existe');
            }
            throw error;
        }
    }
    
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string){
        const videojuego = await this.videojuegoService.delete(id);
        if(!videojuego) throw new NotFoundException('Videojuego No Encontrado');
        return videojuego;
    }
    
    @Put(':id')
    async update(@Param('id') id: string, @Body() body: any){
        const videojuego = await this.videojuegoService.update(id,body);
        if(!videojuego) throw new NotFoundException('Videojuego No Encontrado');
        return videojuego;
    }
}