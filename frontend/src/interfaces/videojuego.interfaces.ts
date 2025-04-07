export interface Videojuego {
    _id: string;
    titulo: string;
    portada: string;
    genero: string;
    desarrollador: string;
    distribuidor: string;
    año_lanzamiento: string;
    plataforma: string;
    logo_plataforma: string;
    score: number;
    createdAt?: Date;
    updatedAt?: Date; 
}

export type CreateVideojuego = Omit<Videojuego, 'createdAt' | 'updatedAt'>;