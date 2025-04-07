import { CreateVideojuego } from '../interfaces/videojuego.interfaces';

const API = 'http://localhost:3000/api';

export const createVideojuegoRequest = (videojuego: CreateVideojuego) => {
    fetch(`${API}/videojuegos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(videojuego)
    });
} 

export const getVideojuegoRequest = () => fetch(`${API}/videojuegos`)