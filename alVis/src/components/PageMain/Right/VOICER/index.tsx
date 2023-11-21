import {useState}from 'react'
import {Button} from 'antd'
import {
    AudioOutlined,
    AudioMutedOutlined
  } from '@ant-design/icons';
import './index.scss'
export default function VOICER() {
    const [recording,setRecording] = useState(false)
  return (
    <div className='VOICER'>
        <div className='VOICER-resultV'>识别结果</div>
        <div className='VOICER-resultT'>点击按钮开始说话，您的语音将会被转为文本，请允许浏览器获取麦克风权限
        
        <Button danger={recording} type='primary' onClick={()=>setRecording((pre:boolean)=>!pre)}  className='VOICER-start' icon={recording?<AudioMutedOutlined/>:<AudioOutlined/>}>{recording?'结束录音':'开始录音'}</Button>
        </div>

    </div>
  )
}
