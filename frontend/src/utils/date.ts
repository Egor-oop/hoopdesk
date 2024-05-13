const date = {
  convertDate: (date: string) => {
    const d = new Date(date)
    return `${d.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })} ${d.toLocaleDateString()}`
    // return `${d.getHours()}:${d.getMinutes()} ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
  }
}

export default date