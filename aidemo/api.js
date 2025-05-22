const OpenAI = require('openai')
const client = new OpenAI({ apiKey: ""})


let apiTest = async ()=>{
    const completion = await client.chat.completions.create({
        model: "o4-mini",
        messages:[
            {
                role:"user", 
                content:"What is your knowledge cutoff date?"
            }
        ]
    })


    console.log("Answer:", completion.choices[0].message.content)
}

apiTest()