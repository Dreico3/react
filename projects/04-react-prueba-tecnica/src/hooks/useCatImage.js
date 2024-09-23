import { useEffect,useState } from "react"

export default function useCatImage(fact) {
    const [urlImage, setUrlImage] = useState()
    useEffect(() => {
        if (!fact) return
        const firstThreeWords = fact.split(' ', 3).join(' ')
        setUrlImage(`https://cataas.com/cat/says/${firstThreeWords}?size=50`)
    }, [fact])
    return { urlImage }
}