const getAccessToken = async () => {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
  const refreshToken = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN

  if (!refreshToken) {
    throw new Error('Refresh token is missing or undefined')
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    console.error('Error response:', response.status, errorBody)
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  return data.access_token
}

export default getAccessToken
