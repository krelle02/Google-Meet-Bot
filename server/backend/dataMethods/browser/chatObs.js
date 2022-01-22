


const chatObserver = async (page) => {

    //executes javascript inside browser
    await page.evaluate( async () => {
        //creates an mutationObserver that checks for changes in the chat
        const Observer = new MutationObserver( async (mutations) => {
            for(var mutation of mutations) {
                if(mutation.addedNodes.length) {
                    //check if  the change is a new box-section or just a text
                    if(mutation.addedNodes[0].hasAttribute('data-message-text')) {
                        await addText(mutation.addedNodes[0].innerHTML); 
                    }
                    else {
                        await getData(mutation.addedNodes[0].innerHTML);  
                    };  
                };
            };
        });
        const textChat = document.getElementsByClassName('z38b6')[0];
        //start observing
        Observer.observe(textChat, { attributes: false, childList: true, subtree: true }); 
    })
}

module.exports = chatObserver;