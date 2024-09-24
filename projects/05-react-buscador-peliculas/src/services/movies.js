const APIKEY = '7afa4a81'
export const searchMovies = async (searcsh) => {
    if (searcsh==='') return null
    try{
        const response = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${searcsh}`)
        const json = await response.json()
        const movies = json.Search
        return movies?.map(mo=>({
            id: mo.imdbID,
            title: mo.Title,
            year: mo.Year,
            poster: mo.Poster
        }))
    }catch (error) {
        throw new Error('error searching movies', error)
    }
}