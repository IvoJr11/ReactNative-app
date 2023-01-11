export const themes = (scheme) => {
  return scheme === 'dark' ?
  {
    textPrimary: 'white',
    pinBackground: '#171C26',
    card: 'rgb(14, 18, 26)',
    border: 'rgba(199, 199, 204, 0)',
    notification: 'rgb(255, 69, 58)',
  }
  :
  {
    textPrimary: 'black',
    pinBackground: 'rgba(255, 255, 255, 1)',
    card: 'rgb(255, 255, 255)',
    border: 'rgba(199, 199, 204, 0)',
    notification: 'rgb(255, 69, 58)',
  }
}
