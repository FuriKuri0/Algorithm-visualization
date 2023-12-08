import serviceAxios from ".";
export const textReconizeApi = (type:string,data:string,setResultLoad:Function,searchType:string)=>{
    const postData = {data,type,searchType}
    return new Promise((resolve)=>{
        serviceAxios.post('ocr',postData).then((ans)=>{resolve(ans);setResultLoad(false)}
        ,(err)=>{setResultLoad(false)}
        )
    })
}

export const voiceReconizeApi = (type:string,data:string,symbol='yes')=>{
    const postData = {type,data,symbol}
    return new Promise((resolve)=>{
        serviceAxios.post('asr',postData).then((ans)=>resolve(ans))
    })
}

export const ttsApi = (text:string)=>{
    const postData = {text}
    return new Promise((resolve)=>{
        serviceAxios.post('tts',postData,{responseType: 'arraybuffer'}).then((ans)=>resolve(ans))
    })
}

export const chatApi = (text:string,type:string)=>{
    const postData = {type,text}
    return new Promise((resolve)=>{
        serviceAxios.post('chat',postData).then((ans)=>resolve(ans))
    })
}