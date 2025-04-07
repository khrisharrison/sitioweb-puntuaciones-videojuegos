import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';

@Schema({
    timestamps: true
})
export class Videojuego{
    @Prop({
        unique: true,
        required: true,
        trim: true
    })
    _id: string;
    
    @Prop({
        required: true,
        trim: true
    })
    titulo: string;

    @Prop({
        required: true,
        trim: true
    })
    portada: string;

    @Prop({
        required: true,
        trim: true
    })
    genero: string;

    @Prop({
        required: true,
        trim: true
    })
    desarrollador: string;
    
    @Prop({
        required: true,
        trim: true
    })
    distribuidor: string;

    @Prop({
        required: true,
        trim: true
    })
    año_lanzamiento: string;

    @Prop({
        required: true,
        trim: true
    })
    plataforma: string;

    @Prop({
        required: true,
        trim: true
    })
    logo_plataforma: string;

    @Prop({
        required: true,
        trim: true
    })
    score: number;
}

export const VideojuegoSchema = SchemaFactory.createForClass(Videojuego);