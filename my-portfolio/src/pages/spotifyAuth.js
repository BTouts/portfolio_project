// src/spotifyAuth.js

const clientId = 'd1beebd9f8594e3bb0ef2ec74e404a23' // Replace with your actual client ID
const redirectUri = 'http://localhost:3000/album-rec' // Use your app's redirect URI
const scopes = ['user-read-private', 'user-read-email', 'user-library-read']

export const getAccessToken = () => {
  if (localStorage.getItem('accessToken')) {
    return JSON.parse(localStorage.getItem('accessToken'))
  }

  const accessToken = window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
    }, {}).access_token

  if (accessToken) {
    localStorage.setItem('accessToken', JSON.stringify(accessToken))
    return accessToken
  } else {
    const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=token`
    window.location = accessUrl
  }
}

export const getUserProfile = async () => {
  const accessToken = getAccessToken()
  if (accessToken) {
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    return await response.json()
  }
}

export const fetchSavedAlbums = async () => {
  const accessToken = getAccessToken()
  if (accessToken) {
    const response = await fetch('https://api.spotify.com/v1/me/albums', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    const data = await response.json()
    return data.items
  }
}
