import { Videojuego } from "../interfaces/videojuego.interfaces"

interface Props {
    videojuego: Videojuego
}

function VideojuegoItem({videojuego}: Props) {
  return (
    <div key={videojuego._id}>
        <th>{videojuego.titulo}</th>
        <img src={videojuego.portada}/>
        <th>{videojuego.genero}</th>
        <th>{videojuego.desarrollador}</th>
        <th>{videojuego.distribuidor}</th>
        <th>{videojuego.año_lanzamiento}</th>
        <th>{videojuego.plataforma}</th>
        <img src={videojuego.logo_plataforma}/>
        <th>{videojuego.score}</th>
    </div>
  )
}

export default VideojuegoItem