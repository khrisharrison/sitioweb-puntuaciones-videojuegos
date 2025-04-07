import { ChangeEvent, FormEvent, useState } from 'react'
import { createVideojuegoRequest } from '../api/useFetch'
import { CreateVideojuego } from '../interfaces/videojuego.interfaces';

function VideojuegoForm() {
    const [videojuego, setVideojuego] = useState<CreateVideojuego>({
        _id: "",
        titulo: "",
        portada: "",
        genero: "",
        desarrollador: "",
        distribuidor: "",
        año_lanzamiento: "",
        plataforma: "",
        logo_plataforma: "",
        score: 0
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVideojuego(prev => ({ ...prev, [name]: name === 'score' ? Number(value) : value }));
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(videojuego);
        createVideojuegoRequest(videojuego)
        //const data = await res.json()
        //console.log(data);
            
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-zinc-900 p-10 rounded-lg">
                <input type="text" name="_id"
                className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Escribe el ID perzonalizado"
                onChange={handleChange}/>

                <input type="text" name="titulo"
                className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Escribe el Nombre del Titulo"
                onChange={handleChange}/>

                <input type="text" name="portada"
                className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Escribe el link de la Portada"
                onChange={handleChange}/>

                <input type="text" name="genero"
                className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Escribe el Genero"
                onChange={handleChange}/>

                <input type="text" name="desarrollador"
                className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Escribe el Nombre de la Desarrolladora"
                onChange={handleChange}/>

                <input type="text" name="distribuidor"
                className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Escribe el Nombre del Distribuidor"
                onChange={handleChange}/>

                <input type="text" name="año_lanzamiento"
                className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Escribe el Año de Lanzamiento"
                onChange={handleChange}/>

                <input type="text" name="plataforma"
                className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Escribe la Plataforma"
                onChange={handleChange}/>

                <input type="text" name="logo_plataforma"
                className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Escribe el Link del Logo de la Plataforma"
                onChange={handleChange}/>

                <input type="text" name="score"
                className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                placeholder="Escribe el Score"
                onChange={handleChange}/>

                <button className="bg-indigo-500 px-3 block py-2 w-full">Guardar</button>
            </form>
        </div>
    )
}

export default VideojuegoForm