
import axios from "axios"

const createBot = async (data) => {
    const response = await axios.post("posts/create", { 
          name: data.name,
          code: data.code,
          date: data.date,
          time: data.time,
      });
    return response.data.id
}

export default createBot

