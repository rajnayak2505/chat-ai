import { createContext, useState } from "react";
import runChat from "../constants/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    
    const delayParagraphAnimation = (index,nextWord) => {
        if(nextWord){
            setTimeout(function() {
                setResultData(prev=>prev+nextWord);
            },75*index)
        }else{
            setResultData("Too Many Requests")
        }
    }

    const newChat = () => {
        setLoading(false);
        setShowResult(false)
    }

    const onSent = async (prompt) => {
        try{
            setResultData("");
            setLoading(true);
            setShowResult(true);
            let response
            if(prompt !== undefined) {
                response = await runChat(prompt);
                setRecentPrompt(prompt);
            }else{
                setPrevPrompts(prev=>[...prev, input]);
                setRecentPrompt(input);
                response = await runChat(input);
            }
            let responseArray = response.split("**");
            let newResponse = ""; 
        
            for (let i = 0; i < responseArray.length; i++) {  
                if (i === 0 || i % 2 !== 1) {
                    newResponse += responseArray[i];
                } else {
                    newResponse += `<b>${responseArray[i]}</b>`;
                }
            }
            let newResponse2 = newResponse.split("*").join("<br/>") || newResponse.split("*").join("<br/>");
            let newResponseArray = newResponse2.split(" ");
            for (let i = 0; i < newResponseArray.length; i++) {
                const nextWord = newResponseArray[i];
                delayParagraphAnimation(i, nextWord + " ");
            }
        
            setLoading(false);
            setInput("");
            }catch(error){
                console.error("Error occurred:", error.message);
                console.error(error); // Log the stack trace for debugging
            }
    };
    

    const contextValue = {
        onSent,
        input,
        setInput,
        prevPrompts,
        setPrevPrompts,
        recentPrompt,
        setRecentPrompt,
        showResult,
        resultData,
        loading,
        newChat
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider