
import axios from "axios"

const createBot = async (data) => {
    const reponse = await axios.post("posts/create", {
        body: JSON.stringify({
          name: data.name,
          code: data.code,
          date: data.date,
          time: data.time,
        }),
      });
}

export default createBot

