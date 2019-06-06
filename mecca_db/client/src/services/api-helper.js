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

//create shop
// /users/:user_id/businesses(.:format)                                                     b
export const createShop = async (user_id, data) =>{
  try{
    const newShop = await userApi.post(`/${user_id}/businesses`, data)
    return newShop.data
  }catch(e){
    console.log(e)
  }
}

//update shop

export const updateShop = async (user_id, shop_id, data) =>{
  try{
    const newShop = await userApi.put(`/${user_id}/businesses/${shop_id}`, data)
    return newShop.data
  }catch(e){
    console.log(e)
  }
}




// restaurantRouter.post('/restaurants', async (request, response) => {
//   try {
//     const restaurant = await Restaurant.create(request.body)
//     response.json({
//       restaurant
//     })
//   } catch (e) {
//     response.status(500).json({ msg: e.message })
//   }
// })


//reviews CRUD


//user auth
// export const login = async (data) =>{
//   const user = await api.post("/auth/login", data)
//   return user.data
  
// }