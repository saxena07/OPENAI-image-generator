const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_APIKEY,
});
const openai = new OpenAIApi(configuration);

const generateimg = async (req, res) => {
    const prompt = req.body.prompt;
    const imgsize = req.body.size;

    const imagesize = imgsize === 'small' ? '256x256' : imgsize === 'medium' ? '512x512' : '1024x1024';

    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: imagesize,
      });
      image_url = response.data.data[0].url;
      
    res.status(200).json({
        success: true,
        imageurl: image_url
    });

};

module.exports = { generateimg };

