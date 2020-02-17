const axios = require('axios');
const args = process.argv.slice(2)
const language = args[0]
const word = args[1]
console.log(word)

const request_url= `https://od-api.oxforddictionaries.com/api/v2/entries/${language}/${word}`



const dictionarie= async()=>{
    try{
        const response = await axios.get(request_url, {
            headers:{
               app_Id: '4647ae82',
               app_Key:'ff16e77619a7f30f3694dc503e8d9bad'
            }
        })
        const data = await response.data
        
        
        console.log(data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0])
    }
    catch(err){
        console.log(err)
    
    }

    
    
    
}
dictionarie()