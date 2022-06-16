
class BotAPIController {
    API_list = []
    
    get_api_list() {
        return this.API_list
    }
    addBotAPI(botAPI) {
        this.API_list.push(botAPI)
        //this is gonna be the id
        return this.API_list.length-1       
    }
    getBotAPI(id) {
        console.log(`getting botApi with id ${id}`)
        return this.API_list[id]
    }
}

module.exports = BotAPIController