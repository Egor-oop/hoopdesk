const date = {
  getToken: () => {
    return {
      access: localStorage.getItem('access_token'),
      refresh: localStorage.getItem('refresh_token')
    }
  },
}

export default date