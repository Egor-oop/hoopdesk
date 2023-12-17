const storage = {
  getToken: () => {
    return {
      access: localStorage.getItem('access_token'),
      refresh: localStorage.getItem('refresh_token')
    }
  },
  setToken: (accessToken: string, refreshToken: string) => {
    localStorage.setItem('access_token', accessToken)
    localStorage.setItem('refresh_token', refreshToken)
  },
  clearToken: () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  }
}

export default storage