import { useState,useEffect } from "react"
import { getRandomFact } from "../services/facts"
export default function() {
    const [fact, setFact] = useState()
    const refreshFact = () => {
        getRandomFact().then(res => setFact(res))
    }
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}