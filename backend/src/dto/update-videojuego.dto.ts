import { IsDecimal, IsNotEmpty, IsNumberString, IsOptional, IsString, IsUrl, Length } from 'class-validator';

export class UpdateVideojuegoDto{
    
    @IsOptional()
    @IsString()
    @Length(3, 60)
    titulo?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsUrl()
    portada?: string;

    @IsOptional()
    @IsString()
    @Length(3, 30)
    genero?: string;

    @IsOptional()
    @IsString()
    @Length(3, 50)
    distribuidora?: string;

    @IsOptional()
    @IsString()
    @Length(3, 50)
    desarrolladora?: string;

    @IsOptional()
    @IsNumberString()
    @Length(4, 4)
    año_lanzamiento?: string;

    @IsOptional()
    @IsString()
    @Length(3, 20)
    plataforma?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsUrl()
    logo_plataforma?: string;

    @IsOptional()
    @IsDecimal()
    score?: number;
}