import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
export default function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((response) => response.json())
      .then((data) => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])

  const handdleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }
  return (
    <main>
      <h1>APP de Gatos</h1>

      <button onClick={handdleClick}>Get new fact</button>

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
