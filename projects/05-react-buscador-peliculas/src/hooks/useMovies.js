import { useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'
//import withResults from '../mocks/with-results.json'

export function useMovies({ searcsh, sort }) {
    const [listMovies, setListMovies] = useState([])
    const previusSearch = useRef(searcsh)
    const getMovies = async () => {
        //this is to no repeat the finding if no change the name
        if (searcsh === previusSearch) return
        const newMovies = await searchMovies(searcsh)
        previusSearch.current = searcsh
        setListMovies(newMovies)
    }
    const sortedMovies = useMemo(()=>{
        console.log('guarda calculos para q no se ejecute cada vez q se renderize')
        return sort
        ? [...listMovies].sort((a, b) => a.title.localeCompare(b.title))
        : listMovies
    },[sort,listMovies])
    /* const sortedMovies = sort
        ? [...listMovies].sort((a, b) => a.title.localeCompare(b.title))
        : listMovies */
    return { listMovies: sortedMovies, getMovies }
}