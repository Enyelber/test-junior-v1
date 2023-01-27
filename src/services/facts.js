const CAT_ENPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  try {
    const response = await fetch(CAT_ENPOINT_RAMDOM_FACT)
    if (!response.ok)
      throw new Error('Error feching fact')
    const data = await response.json()
    const { fact } = data
    return fact
  } catch (err) {
    console.error(err)
  }
}