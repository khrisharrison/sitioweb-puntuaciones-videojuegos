import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Videojuego } from '../schemas/videojuegos.schema';
import { Model } from 'mongoose';
import { CreateVideojuegoDto } from '../dto/create-videojuego.dto';
import { UpdateVideojuegoDto } from '../dto/update-videojuego.dto';

@Injectable()
export class VideojuegosService {
    constructor(@InjectModel(Videojuego.name) private videojuegoModel: Model<Videojuego>) {}

    findAll(){
        return this.videojuegoModel.find();
    }
    async create(createVideojuego: CreateVideojuegoDto){
        const createdVideojuego = new this.videojuegoModel(createVideojuego);
        return createdVideojuego.save();
    }
    async findOne(id: string){
        return this.videojuegoModel.findById(id);
    }
    async update(id: string, Videojuego: UpdateVideojuegoDto){
        return this.videojuegoModel.findByIdAndUpdate(id, Videojuego, {new:true});
    }
    async delete(id: string){
        return this.videojuegoModel.findByIdAndDelete(id);
    }
}
