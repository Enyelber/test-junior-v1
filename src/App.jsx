import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export default function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handdleClick = async () => {
    refreshFact()
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
