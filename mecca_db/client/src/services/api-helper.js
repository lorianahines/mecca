import axios from 'axios'
const URL = "http://localhost:4567"

const api = axios.create({
  baseURL: `${URL}/businesses`
})

export const displayAllShops = async () =>{
  try{
    const shops = await api.get("/")
    console.log(shops.data)
    return shops.data
  } catch (error) {
    console.log(error)
  }
}