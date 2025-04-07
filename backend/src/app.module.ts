import { Module } from '@nestjs/common';
import { VideojuegosModule } from './videojuegos/videojuegos.module';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/videojuegosdb'),
    VideojuegosModule],
})
export class AppModule {}
