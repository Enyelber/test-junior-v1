import { useEffect, useState } from 'react'
import { getImagenFact } from '../services/imagenFacts'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
    getImagenFact(threeFirstWords).then((data) => {
      setImageUrl(data)
    })
  }, [fact])

  return { imageUrl }
}