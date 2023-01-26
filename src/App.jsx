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

        const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
        // const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords)

        // fetch(CAT_ENPOINT_IMAGE_URL)
        fetch(
          `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data.url)
            const { url } = data
            setImageUrl(url)
          })
      })
  }, [])

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
