export const getImagenFact = async (threeFirstWords) => {
  try {
    const response = await fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
    if (!response.ok)
      throw new Error('Error feching image fact')
    const data = await response.json()
    const { url } = data
    return url
  } catch (err) {
    console.error(err)
  }
}