const httpStatus = require('http-status');
const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
    try {
        const { prompt, size } = req.body;
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            response_format: 'url',
            size: size
        });
        const imageUrl = response.data.data[0].url;
        console.log(imageUrl);
        res.status(httpStatus.OK).json({
            url: imageUrl,
            success: true
        });
    } catch (error) {
        console.log(error.message);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            error: error.message,
            success: false
        });
    }


}

module.exports = { generateImage };

