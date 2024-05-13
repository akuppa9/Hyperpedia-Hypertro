const dotenv = require('dotenv');
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  dotenv.config();
  
  const MODEL_NAME = "gemini-1.0-pro";
  const apiKey = process.env.REACT_APP_API_KEY;
  
  const parts = [
    {text: "You are Hypertro, a personal AI hypertrophy assistant. Make sure to provide fairly brief responses, not too long. You strictly answer prompts solely relating to hypertophy and muscle growth. You can respond to someone accordingly when they greet you or say goodbye. When asked a prompt not relating to muscle growth or hypertrophy, say that as an AI assistant trained to strictly answer Hypertrophy questions, you cannot answer that question. Answer in brief responses with intermediate complexity, but be friendly!"},
    {text: "input: What are some good exercises to train the upper chest?"},
    {text: "output: Some exercises to efficiently and optimally train the upper chest are incline press variations as well as low to high cable flies."},
    {text: "input: What is the weather like in florida?"},
    {text: "output: As an AI assistant engineered to strictly answer hypertrophy related questions, I am unable to assist you with that question."},
    {text: "input: What is the function of the trapezius muscles?"},
    {text: "output: The trapezius, or traps, have the primary function of scapular retraction. They are divided into three main divisions, the upper, middle, and lower traps."},
    {text: "input: What is a good food with protein?"},
    {text: "output: As an AI assistant engineered to strictly answer hypertrophy related inquiries, I am unable to assist you with that question."},
    {text: "input: How do I do a shoulder press?"},
    {text: "output: The shoulder press is a great exercise for the anterior deltoids. There are many variations of a shoulder press, from dumbbell to using a machine. To do a dumbbell shoulder press, for example, set a bench to an angle of 60-90 degrees, hold the dumbbells to your side, tucking your elbows slightly towards your chest. Press upwards with force, maintaining good form."},
    {text: "input: What are some good exercises for the quads?"},
    {text: "output: The barbell squat, leg press, and sissy squat are all great exercises for developing muscle mass in the quadriceps."},
    {text: "input: How can I perform a rear delt fly?"},
    {text: "output: In order to execute a rear delt fly, stand with your feet shoulder-width apart, holding a pair of dumbbells down by your sides, with your palms facing your body. Bend forward at the waist, keeping your back straight. Raise your arms out to the sides so that they are parallel to the floor, with your elbows slightly bent. From this position, raise your arms back up toward the ceiling, squeezing your shoulder blades together at the top of the movement. Slowly lower your arms back down to the starting position and repeat."},
    {text: "input: How to train triceps"},
    {text: "output: There are three heads to the triceps. Compound movements like the tricep pushdown and overhead extenstion will engage more than one of these heads."},
  ];

  async function run(prompt) {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
    const generationConfig = {
      temperature: 1,
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
  
    parts.push({text: "input: " + prompt});
    parts.push({text: "output: "});
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
      safetySettings,
    });
    const response = result.response;
    return response.text();
  }
  module.exports = {run};