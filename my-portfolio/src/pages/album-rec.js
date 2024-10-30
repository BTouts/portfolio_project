import React, { useState, useEffect } from 'react'
import getAccessToken from './spotifyAuth'

function RandomAlbum() {
  const [randomAlbum, setRandomAlbum] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchRandomAlbum = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const token = await getAccessToken()
      const response = await fetch(
        'https://api.spotify.com/v1/me/albums?limit=50',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      const albums = data.items
      const randomAlbum =
        albums[Math.floor(Math.random() * albums.length)].album
      setRandomAlbum(randomAlbum)
    } catch (err) {
      setError('Failed to fetch album: ' + err.message)
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRandomAlbum()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!randomAlbum) return <div>No album found</div>

  return (
    <div>
      <h2>{randomAlbum.name}</h2>
      <p>Artist: {randomAlbum.artists[0].name}</p>
      <img src={randomAlbum.images[0].url} alt={randomAlbum.name} />
      <button onClick={fetchRandomAlbum}>Get Another Random Album</button>
    </div>
  )
}

export default RandomAlbum
