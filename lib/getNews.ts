const getNews = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'aplication/json',
      'x-api-key': process.env.NEXT_PUBLIC_NEWS_API_KEY || ''
    }
  })
  const data = await response.json()
  return data
}

export default getNews
