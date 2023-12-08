import {voiceReconizeApi} from '../api/api'
import Recorder from 'js-audio-recorder'
let recorder:any 
export function fileToBase64 (file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        resolve(reader.result.split('base64,')[1])
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }
export  const startRecord = () => { // 语音输入开始
    recorder= new Recorder({
        sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
        sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
        numChannels: 1
    })
    recorder.start().then(
        () => {
          // 开始录音
          console.log('开始录音了=========')
        },
        (error:any) => {
          // 出错了
          console.log(error)
        }
      )
}
export const stopRecord = (beforeFin:Function,aftereFin:Function,apiType:string) => { // 语音输入结束
    beforeFin()
    recorder.stop()
    const wavBlob = recorder.getWAVBlob()
    const file = new File([wavBlob], 'test.wav', { type: 'audio/wav' });
    fileToBase64(file)
    .then((base64Data:any) => {
      voiceReconizeApi(apiType,base64Data).then(data=>{
            aftereFin(data['语音内容'])
      })
    })
    .catch(error => {
      console.error(error);
    });
  }