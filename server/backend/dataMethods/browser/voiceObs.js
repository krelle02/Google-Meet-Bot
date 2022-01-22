


//function that get executed in the browser
const voiceObserver = async (page) => {
    
    //executes javascript inside browser
    await page.evaluate( async () => {

        //helper fuction to get the oberver-key
        async function getUser(mutation,bool) {
            //backtracks through the DOM to get the target
            let target = mutation.target;
            while(!target.classList.contains('KV1GEc')) {
                target = target.parentElement;   
            };
            const key = await getKey(target.innerHTML)
            await updateMember(key,bool); 
        };

        const observers = {};
        //creates an mutationObserver that checks for changes in the voiceChat
        const Observer = new MutationObserver(async (mutations) => {
            for(let mutation of mutations) {
                if(mutation.addedNodes.length) {

                    //checks if a new member joined the meet and adds the member to the members list
                    if(mutation.target.classList.contains('GvcuGe')) {
                        console.log('new member has joined');
                        await addMember();
                        const box = mutation.addedNodes[0];
                        const key = await getKey(box.innerHTML);
                        
                        //gets the span element which is the parent node to the node that mutates when member speaks
                        const targetNode = mutation.addedNodes[0].lastChild.firstChild.firstChild.firstChild.firstChild.firstChild.lastChild//.firstChild.firstchild is the actual node
                       
                        //creates a new MutationObserver for the added member - This approach only works when the meet has not been created by the account the bot is using
                        observers[key] = new MutationObserver(async (mutations)=> {
                            for(let mutation of mutations) {
                                
                                //checks if user started talking
                                if(mutation.oldValue === 'IisKdb u5mc1b BbJhmb YE1TS MNVeFb kT2pkb gjg47c' || mutation.oldValue === 'IisKdb gjg47c u5mc1b BbJhmb YE1TS MNVeFb kT2pkb' ){
                                    //console.log('start talking');
                                    getUser(mutation,true);
                                }                                                                                 
                                //checks if user stopped talking
                                else if(mutation.target.getAttribute('class') === 'IisKdb u5mc1b BbJhmb YE1TS MNVeFb kT2pkb gjg47c' || mutation.target.getAttribute('class') === 'IisKdb gjg47c u5mc1b BbJhmb YE1TS MNVeFb kT2pkb') {
                                    //console.log('stop talking');
                                    getUser(mutation,false);
                                };
                                return
                            };                       
                        }
                        );
                        //start observing the target node
                        observers[key].observe(targetNode, {attributeOldValue: true, subtree: true});
                        console.log(observers)
                    };
                };
            };
        });
        const voiceChat = document.getElementsByClassName('GvcuGe')[0];
        //start observing voiceChat for new members
        Observer.observe(voiceChat, {childList: true, subtree: false });
      });       
};

module.exports = voiceObserver;