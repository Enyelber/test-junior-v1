import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts'
import { getImagenFact } from './services/imagenFacts'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
export default function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact))
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
    getImagenFact(threeFirstWords).then((data) => {
      setImageUrl(data)
    })
  }, [fact])

  const handdleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }
  return (
    <main>
      <h1>APP CAT</h1>

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
