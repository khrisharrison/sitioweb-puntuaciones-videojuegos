import VideojuegoList from './components/VideojuegoList'
import VideojuegoFrom from './components/VideojuegoForm'

function App() {
  return (
    <div className="bg-black h-full text-white flex items-center justify-center">
      <div className="bg-red-950 p-4 w-4/5">
        <h1 className="text-5xl font-bold text-center black my-10">Pagina de Calificaciones de Videojuegos</h1>
        <VideojuegoFrom/>
        <VideojuegoList/>
      </div>
    </div>
  )
}

export default App