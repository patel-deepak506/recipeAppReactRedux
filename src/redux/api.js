import axios  from "axios"

const YOUR_APP_ID = "6402f24e"
const YOUR_APP_KEY = "31b3546e881c2286c46b40270f2bb1c3"

export const getRecipes = async (query)=>{
    const url = ` https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
   return await axios.get(url)
}
