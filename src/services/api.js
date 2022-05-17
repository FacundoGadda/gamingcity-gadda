import axios from "axios"

export const getProducts = async () => {
    try {
        const response = await axios("https://api.mercadolibre.com/sites/MLA/search?category=MLA1648")
        return response.data
    } catch (error) {    
        console.log(error)
    }
}