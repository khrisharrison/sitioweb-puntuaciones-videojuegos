import { IsDecimal, IsNotEmpty, IsNumber, IsNumberString, IsString, IsUrl, Length } from 'class-validator';

export class CreateVideojuegoDto{
    
    @IsNotEmpty()
    @IsString()
    _id: string; 
    
    @IsNotEmpty()
    @IsString()
    @Length(3, 60)
    titulo: string;

    @IsNotEmpty()
    @IsUrl()
    portada: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 30)
    genero: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    desarrollador: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    distribuidor: string;

    @IsNotEmpty()
    @IsNumberString()
    @Length(4, 4)
    año_lanzamiento: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 20)
    plataforma: string;

    @IsNotEmpty()
    @IsUrl()
    logo_plataforma: string;

    @IsNotEmpty()
    @IsNumber({maxDecimalPlaces: 1})
    score: number;
}