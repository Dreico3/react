function ListMovies({ listMovies }) {
    return (
        <ul>
            {
                listMovies.map(movie => {
                    return (
                        <li key={movie.id}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt="poster of movie" />
                        </li>
                    )
                })
            }
        </ul>
    )
}
function NoMoviesResults() {
    return (
        <p>no se encontaron peliculas para esta busqueda</p>
    )
}
export function Movies({ movies }) {
    const hasMovies = movies?.length > 0
    return (
        hasMovies
            ? <ListMovies listMovies={movies}></ListMovies>
            : <NoMoviesResults></NoMoviesResults>
    )
}