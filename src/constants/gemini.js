
import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = "AIzaSyBX7f8i8lHPrlli9PRGxIaAV5hFNFzHv6g"
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function runChat(prompt) {
    const xhr = new XMLHttpRequest();
    try{
      const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
      });
    
      const result = await chatSession.sendMessage(prompt);
      // console.log(result.response.text());
      return result.response.text();
    }catch(error){
      if (xhr.status === 429) {
        console.log(xhr.status)
        console.warn(`Too Many Requests`);
      }
    }
  }
  
  export default runChat;