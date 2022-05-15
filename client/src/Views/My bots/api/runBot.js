import axios from "axios"

const runBot = async (id) => {
    const reponse = await axios.post("posts/run", { 
          id: id 
      });
}
export default runBot