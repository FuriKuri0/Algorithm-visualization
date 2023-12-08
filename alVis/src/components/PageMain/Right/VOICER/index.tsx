import {useEffect, useState}from 'react'
import {Button,Spin} from 'antd'
import { usePath } from '../../../../utils/hook';
import { startRecord,stopRecord } from '../../../../utils';

import {
    AudioOutlined,
    AudioMutedOutlined
  } from '@ant-design/icons';
import './index.scss'

export default function VOICER() {
    const [recording,setRecording] = useState(false)
    const {apiType} = usePath()
    const [load,setLoad] = useState(false)
    const [result,setResult] = useState('')
    useEffect(()=>{
      setResult('')
    },[apiType])
    const link = () => {
      const source=new EventSource("http://10.252.40.1:5566/api/asr/stream");
      source.onmessage=function(event) {
        if(event.data != 'stream_over'){
        const text =event.data; //识别的结果
        setResult(text)
        }else{
        source.close();
        }
      }
    }
    
  const handleClick = () => {
    setRecording((pre:boolean)=>!pre)
    recording?stopRecord(beforeFin,afterFin,apiType):startRecord()
  }
  const beforeFin = () => {
    setLoad(true)
  }
  const afterFin = (data) => {
    setResult(data)
    setLoad(false)
    if(apiType==='pds'){
      link()
    }
  }
  return (
    <div className='VOICER'>
        <div className='VOICER-resultV'>识别结果</div>
        <div className='VOICER-resultT'>{result?result:"点击按钮开始说话，您的语音将会被转为文本，请允许浏览器获取麦克风权限"}
        {load?<Spin  size="large" />:<></>}
        <Button danger={recording} type='primary' onClick={handleClick}  className='VOICER-start' icon={recording?<AudioMutedOutlined/>:<AudioOutlined/>}>{recording?'结束录音':'开始录音'}</Button>
        </div>

    </div>
  )
}
