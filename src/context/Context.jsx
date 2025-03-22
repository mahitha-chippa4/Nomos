import { createContext, useState } from "react";
import runChat from "../config/gemini";
import { marked } from 'marked';

export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, SetRecentPrompt] = useState("");
  const [prevprompt, SetPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultdata, setresultdata] = useState("");

  const delayPara = (index, nextword) => {
    setTimeout(()=>{
        setresultdata((prev)=>prev+nextword)
    },75*index)
  };

  const newchat =()=>{
    setLoading(false)
    setShowResult(false);
  }

  const onSent = async (prompt) => {
    setresultdata("");
    setLoading(true);
    setShowResult(true);
    let response;
    if(prompt!==undefined){
          response=await runChat(prompt);
          SetRecentPrompt(prompt)
    }
    else{
            SetPrevPrompt(prev=>[...prev,input])
            SetRecentPrompt(input)
            response=await runChat(input);
    }
    SetRecentPrompt(input);
    SetPrevPrompt(prev=>[...prev,input]);
    let responseArray=response.split("**");
    let newresponse="";
    for(let i=0;i<responseArray.length;i++)
        {
            if(i===0 || i%2 !==1){
                newresponse+=responseArray[i];
            }
            else{
                newresponse+="<b>"+responseArray[i]+"</b>";
            }
        }
    let newresponse2=newresponse.split("*").join("<br><br>")
    let newresponseArray=newresponse2.split(" ");
    for(let i=0;i<newresponseArray.length;i++)
        {
           const nextword=newresponseArray[i];
           delayPara(i,nextword+" ");
        }
    setLoading(false);
    setInput("");
  };


//   const onSent = async (prompt) => {
//     setresultdata("");
//     setLoading(true);
//     setShowResult(true);
//     let response;

//     if (prompt !== undefined) {
//         response = await runChat(prompt);
//         SetRecentPrompt(prompt);
//     } else {
//         SetPrevPrompt(prev => [...prev, input]);
//         SetRecentPrompt(input);
//         response = await runChat(input);
//     }

//     // Use marked.js to convert markdown to HTML
//     let newresponse = marked(response);

//     // Optionally, you can split the response if you still need that logic
//     let newresponseArray = newresponse.split(" ");
//     for (let i = 0; i < newresponseArray.length; i++) {
//         const nextword = newresponseArray[i];
//         delayPara(i, nextword + " ");
//     }

//     setLoading(false);
//     setInput("");
// };
  const contextValue = {
    prevprompt,
    SetPrevPrompt,
    onSent,
    SetRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultdata,
    input,
    setInput,
    newchat,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
