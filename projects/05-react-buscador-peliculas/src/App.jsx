import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useEffect, useState } from 'react'
function App() {
  const [sort, setSort] = useState(false)
  const [search, setSearch] = useState('')
  const { listMovies, getMovies } = useMovies({ searcsh: search,sort })
  const handleSubmint = (event) => {
    //interesting way to recover names all names of inputs
    event.preventDefault()
    const querrys = Object.fromEntries(
      new window.FormData(event.target)
    )
    setSearch(querrys.querry)
  }
  const handleSort = () => {
    setSort(!sort)
  }
  useEffect(() => {
    getMovies()
  }, [search])
  return (
    <div className='page'>
      <header>
        <h1>buscador de peliculas</h1>
        <form onSubmit={handleSubmint}>
          <input name='querry' placeholder='Avengers, Star Wars, the matrix ...' type="text" />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>buscar ...</button>
        </form>
      </header>
      <main>
        <h1>Peliculas</h1>
        {
          <Movies movies={listMovies}></Movies>
        }
      </main>
      <footer>
        <p><i>copyright</i></p>
      </footer>
    </div>
  )
}

export default App
