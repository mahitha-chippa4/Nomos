
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
async function runChat(prompt) {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
    });

    const generationConfig = {
        temperature: 2,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 4000,
        responseMimeType: "text/plain",
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


    const chatSession = model.startChat({
        generationConfig,
        safetySettings,
        history: [
        ],
    });

    const result = await chatSession.sendMessage(`As a legal chatbot specializing in Indian laws, your task is to provide responses that are highly accurate, contextually appropriate, and legally sound. Your responses should be structured in bullet points to clearly delineate distinct legal aspectsIF THE QUESTION IS NON LAW RELATED THEN JUST ANSWER "GIVE A LAW RELATED QUERY".INCLUDE ALL THE RELATED IPCs AND SECTIONS FROM THE INDIAN LAW AND CONSTITUTION WHICH MAYBE BE HELPFULL AND NECESSARY ONLY AND ALSO THE PROCEDURE TO FOLLOW FOR LEGAL PROCEDURE.It's important to clarify the general applicability of the rules or sections mentioned, addressing any common misconceptions. Your answers should be concise yet comprehensive, focusing only on essential information that directly addresses the user's query. Avoid making assumptions about specific contexts or details not provided by the user, and instead, offer Indian applicable legal interpretations unless otherwise specified. Finally, conclude each response with a brief summary that encapsulates the key points of the discussion and corrects any common misinterpretations related to the topic. This approach ensures that your responses are clear, precise, and helpful for users seeking legal information under all Indian laws.
    Only if required then go above the 10 line mark if the user asks to go in detail otherwise all your answers must include main points related to the question and should be under 10 point mark.
    If the user’s query is not related to law or any legal matters, politely respond by stating: "This query does not pertain to any legal issues or aspects of law. Please ask a question related to Indian law, and I would be happy to assist." try to be as short conscise and key point oriented as possible userprompt:${prompt}`);
    const response = result.response;
    console.log(response.text());
    return response.text();
}

export default runChat;


// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
// } from "@google/generative-ai";

// const API_KEY = "AIzaSyAqKJh8_tdNXp7xRmXtKhaHFhtBgUSbqdY";
// const MODEL_NAME = "gemini-1.5-pro-exp-0801";

// async function runChat(prompt) {
//     const genAI = new GoogleGenerativeAI(API_KEY);
//     const model = genAI.getGenerativeModel({ model: MODEL_NAME });

//     const generationConfig = {
//         temperature: 2,
//         topP: 0.95,
//         topK: 64,
//         maxOutputTokens: 4000,
//         responseMimeType: "text/plain",
//     };

//     const safetySettings = [
//         { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
//         { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
//         { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
//         { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
//     ];

//     const chatSession = model.startChat({ generationConfig, safetySettings });

//     // Each agent function provides its individual response based on its role
//     async function agentOne(response) {
//         const improvedResponse = await chatSession.sendMessage(
//             `Please review and refine this response to ensure accuracy and clarity: ${response}`
//         );
//         return improvedResponse.response.text();
//     }

//     async function agentTwo(response) {
//         const refinedResponse = await chatSession.sendMessage(
//             `Check the response for accuracy in legal references, add any missing IPC sections, and refine: ${response}`
//         );
//         return refinedResponse.response.text();
//     }

//     async function agentThree(response) {
//         const conciseResponse = await chatSession.sendMessage(
//             `Condense the response to focus only on key legal points and remove any redundancy: ${response}`
//         );
//         return conciseResponse.response.text();
//     }

//     async function agentFour(agentResponses) {
//         // Agent 4 reviews and selects the best response among agentResponses
//         const bestResponse = await chatSession.sendMessage(
//             `You are reviewing three responses from different agents. Choose the best response based on accuracy, clarity, and relevance, and summarize it briefly, focusing only on essential points:
//             \n\nResponse 1: ${agentResponses[0]}
//             \n\nResponse 2: ${agentResponses[1]}
//             \n\nResponse 3: ${agentResponses[2]}
//             `
//         );
//         return bestResponse.response.text();
//     }

//     // Initial response from the generative model
//     const initialResponse = await chatSession.sendMessage(
//         `As a legal chatbot specializing in Indian laws, your task is to provide responses that are accurate, contextually appropriate, and legally sound... userprompt:${prompt}`
//     );

//     // Collect individual responses from Agents 1-3
//     const agentOneResponse = await agentOne(initialResponse.response.text());
//     const agentTwoResponse = await agentTwo(initialResponse.response.text());
//     const agentThreeResponse = await agentThree(initialResponse.response.text());

//     // Collect responses in an array and pass to Agent 4
//     const agentResponses = [agentOneResponse, agentTwoResponse, agentThreeResponse];
//     const finalResponse = await agentFour(agentResponses);

//     console.log(finalResponse);
//     return finalResponse;
// }

// export default runChat;
