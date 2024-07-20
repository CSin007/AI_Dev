
const openai = require("../config/openConfig")

const generateMeta = async (req,res) => {
    const {title} = req.body 
    const description = await openai.chat.completions.create({
        messages: [
        { 
           role: 'user',
           content: `Come up with a description for a Youtube video called ${title}`,      
        }
        ],
        model: "gpt-4o",
        max_tokens: 100
      })
   // console.log(description.choices[0].message.content);
     
    const tags = await openai.chat.completions.create({
        messages: [
        { 
           role: 'user',
           content: `come up with 10 keywords for a YouTube video called ${title}`,      
        }
        ],
        model: "gpt-4o",
        max_tokens: 20
      })
    //console.log(tags.choices[0].message.content);
     res.status(200).json({
        description: description.choices[0].message.content,
        tags: tags.choices[0].message.content
     })

    }

const generateImage = async (req,res) =>
{
    const image = await openai.images.generate({ 
        model: "dall-e-3", 
        prompt: req.body.prompt, 
        size: "1024x1024",
    });
    //console.log(image.data[0].url);
  res.json({
    url: image.data[0].url
  })
}
module.exports = { generateMeta,generateImage}