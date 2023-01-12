import axios from "axios"

const API_KEY = '563492ad6f91700001000001b51079712d43487ebdc8ca5a92a0dd72'

export const getImages = async (searchTerm, page = 1) => 
  axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}&page=${page}`, {
    headers: {
      Authorization: API_KEY
    }
  })