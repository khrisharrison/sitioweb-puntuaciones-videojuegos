import { Module } from '@nestjs/common';
import { VideojuegosController } from './videojuegos.controller';
import { VideojuegosService } from './videojuegos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Videojuego, VideojuegoSchema } from '../schemas/videojuegos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Videojuego.name,
        schema: VideojuegoSchema,
      },
    ]),
  ],
  controllers: [VideojuegosController],
  providers: [VideojuegosService]
})
export class VideojuegosModule {}
