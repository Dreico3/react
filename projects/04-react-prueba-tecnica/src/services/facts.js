const CAT_ENDPOIND_RANOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOIND_RANOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
}