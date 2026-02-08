import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateLovePoem = async (name: string, likes: string[]): Promise<string> => {
  try {
    const ai = getAiClient();
    // Using gemini-3-flash-preview for fast creative text generation
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a short, very cute, rhyming proposal poem for a girl named ${name}. 
      She loves: ${likes.join(', ')}. 
      Today is Propose Day. 
      Use cute emojis like 🍫, 🍦, 💖. 
      Keep it under 50 words. 
      Make it sound like a sweet dreamy whisper.`,
    });

    return response.text || "Roses are red, violets are blue, I have no words, but I love you! 💖";
  } catch (error) {
    console.error("Error generating poem:", error);
    return "My love for you is too big for the internet to handle! 💖🍫 But know that you are my everything.";
  }
};
