import { useEffect, useState } from 'react'
import {getVideojuegoRequest} from '../api/useFetch'
import { Videojuego } from '../interfaces/videojuego.interfaces'
//import VideojuegoItem from './VideojuegoItem'

function VideojuegoList() {
    
    const [videojuegos, setVideojuegos] = useState<Videojuego[]>([])

    useEffect(() => {
        getVideojuegoRequest()
            .then((response) => response.json())
            .then((data) => setVideojuegos(data))
    }, [])

    return (
        <div>
            <table style={{ borderCollapse: 'collapse', width: '100%', color: 'grey', fontSize: '16px', textAlign: 'center' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Portada</th>
                        <th>Genero</th>
                        <th>Desarrollador</th>
                        <th>Distribuidor</th>
                        <th>Año</th>
                        <th>Plataforma</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                {videojuegos.map((videojuego) => (
                    <tr key={videojuego._id} style={{ borderBottom: '1px solid #ddd' }}>
                        <td>{videojuego._id}</td>
                        <td>
                            <img 
                            src={videojuego.portada}
                            alt="Portada"
                            style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'cover'
                            }}
                            />
                        </td>
                        <td>{videojuego.genero}</td>
                        <td>{videojuego.titulo}</td>
                        <td>{videojuego.desarrollador}</td>
                        <td>{videojuego.distribuidor}</td>
                        <td>{videojuego.año_lanzamiento}</td>
                        <img 
                            src={videojuego.logo_plataforma}
                            alt="Logo Plataforma"
                            style={{
                            width: '115px',
                            height: '80px',
                            objectFit: 'contain',
                            objectPosition: 'center',
                            }}/>
                        <td>{videojuego.score}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default VideojuegoList