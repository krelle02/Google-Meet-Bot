import axios from "axios"

const runBot = async (id) => {
    window.alert("Bot is waiting to run")
    const reponse = await axios.post("posts/run", { 
          id: id 
      });
}
export default runBot