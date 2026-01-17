import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey });

export const generateHealthResponse = async (userPrompt: string): Promise<string> => {
  if (!apiKey) {
    return "I am unable to connect to the server at the moment (Missing API Key).";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are 'MediBot', a helpful, empathetic, and professional virtual assistant for MediCare Hospital. 
        
        Your duties:
        1. Answer general health questions (always include a disclaimer that you are not a doctor).
        2. Help users navigate hospital departments (Cardiology, Neurology, Pediatrics, Orthopedics).
        3. Advise on when to seek emergency care.
        4. Be concise and use simple language.
        
        IMPORTANT: If a user describes life-threatening symptoms (chest pain, severe bleeding, difficulty breathing), IMMEDIATELY advise them to call emergency services (911 or local equivalent) or go to the nearest ER. Do not try to diagnose critical conditions.`,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I apologize, but I'm having trouble connecting to my medical database right now. Please try again later.";
  }
};