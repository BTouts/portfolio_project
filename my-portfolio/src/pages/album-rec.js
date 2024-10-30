import React, { useState, useEffect } from 'react'
import { getAccessToken, fetchSavedAlbums } from './spotifyAuth'

function RandomAlbum() {
  const [randomAlbum, setRandomAlbum] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRandomAlbum = async () => {
      try {
        setIsLoading(true)
        const accessToken = await getAccessToken()
        const albums = await fetchSavedAlbums(accessToken)
        const randomAlbum =
          albums[Math.floor(Math.random() * albums.length)].album
        setRandomAlbum(randomAlbum)
      } catch (error) {
        console.error('Error fetching random album:', error)
        setError('Failed to fetch album')
      } finally {
        setIsLoading(false)
      }
    }

    fetchRandomAlbum()
  }, []) // Empty dependency array ensures this effect runs only once on mount

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!randomAlbum) return <div>No album found</div>

  return (
    <div>
      <h2>{randomAlbum.name}</h2>
      <p>Artist: {randomAlbum.artists[0].name}</p>
      <img src={randomAlbum.images[0].url} alt={randomAlbum.name} />
    </div>
  )
}

export default RandomAlbum
