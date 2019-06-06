import axios from 'axios'
const URL = "http://localhost:4567"

const businessApi = axios.create({
  baseURL: `${URL}/businesses`
})

const userApi = axios.create({
  baseURL: `${URL}/users`
})

export const displayAllShops = async () =>{
  try{
    const shops = await businessApi.get("/")
    console.log(shops.data)
    return shops.data
  } catch (error) {
    console.log(error)
  }
}

//business owner CRUD
export const getUser = async (id) =>{
  try{
    const user = await userApi.get(`/${id}`)
    console.log(user.data)
    return user.data
  } catch (error) {
    console.log(error)
  }
}


//reviews CRUD


//user auth
// export const login = async (data) =>{
//   const user = await api.post("/auth/login", data)
//   return user.data
  
// }