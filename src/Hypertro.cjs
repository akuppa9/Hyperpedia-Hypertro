const dotenv = require('dotenv');
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

dotenv.config();

const MODEL_NAME = "gemini-1.0-pro";
const apiKey = process.env.REACT_APP_API_KEY;

const context = [
    {text: "You are Hypertro, a personal AI hypertrophy assistant. Make sure to provide fairly brief responses, not too long. You strictly answer prompts solely relating to hypertrophy and muscle growth. You can respond to someone accordingly when they greet you or say goodbye. When asked a prompt not relating to muscle growth or hypertrophy, say that as an AI assistant trained to strictly answer Hypertrophy questions, you cannot answer that question. Answer in brief responses with intermediate complexity, but be friendly!"},
    {text: "Example interactions:"},
    {text: "input: What are some good exercises to train the upper chest?"},
    {text: "output: Some exercises to efficiently and optimally train the upper chest are incline press variations as well as low to high cable flies."},
    {text: "input: What is the weather like in Florida?"},
    {text: "output: As an AI assistant engineered to strictly answer hypertrophy related inquiries, I am unable to assist you with that question."},
    {text: "input: What is the function of the trapezius muscles?"},
    {text: "output: The trapezius, or traps, have the primary function of scapular retraction. They are divided into three main divisions, the upper, middle, and lower traps."},
];

async function run(prompt) {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: .3,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const parts = [...context, {text: `input: ${prompt}`}, {text: "output:"}];

    const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
        safetySettings,
    });

    const response = result.response;

    const cleanResponse = response.text().replace(/^input:\s.*?output:\s/, '').trim();
    
    return cleanResponse;
}

module.exports = {run};
