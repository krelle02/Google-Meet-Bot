import axios from "axios";

const runBot = async (id) => {
<<<<<<< HEAD
  window.alert("Bot is waiting to run");
  const reponse = await axios.post("posts/run", {
    id: id,
  });
};
export default runBot;
=======
    window.alert("Bot is waiting to run")
    const reponse = await axios.post("posts/run", { 
          id: id 
      });
}
export default runBot
>>>>>>> dcca3e0178c51e404df4178d55fbc25a339a8972
