import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firsWord}?size=50&color=white&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
export default function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENPOINT_RAMDOM_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')

    console.log(threeFirstWords)

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((response) => response.json())
      .then((data) => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>APP de Gatos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
          alt={`Image extracted using the first three word ${fact}`}
        />
      )}
    </main>
  )
}
