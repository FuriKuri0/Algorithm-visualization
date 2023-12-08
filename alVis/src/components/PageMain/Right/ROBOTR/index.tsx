import {useRef,useState,useEffect} from 'react'
import {UserOutlined,RobotOutlined,RocketOutlined,} from '@ant-design/icons';
import './index.scss'
import { usePath } from '../../../../utils/hook';
import { ttsApi,chatApi } from '../../../../api/api';
import { message } from 'antd';
import path from '../../../../store/reducers/path';
export default function ROBOTR() {
  const peopleInput = useRef<any>()
  const main = useRef<any>()
  const {pathName} = usePath()
  const [data,setData] = useState(['你好，有什么可以帮助您？'])
  useEffect(()=>{
    switch (pathName) {
      case '/model/chat':
        setData(['你好，有什么可以帮助您？'])
        chatApi('','clear')
        break;
        case '/voice/synthesis':
        setData(['你好，请向我输入文字，我将合成语音发送给您~'])
          break;
      default:
        break;
    }
  },[pathName])
  const handleKeyDown = (e:any)=>{
    if (e.keyCode === 13) {
      send()
  }
  }
  const printer = () => {
    const source=new EventSource("http://10.252.40.1:5566/api/chat/stream");
    source.onmessage=function(event) {
    if(event.data != 'stream_over'){
    let text =event.data;
    text = text.replace(/<br>/g, "\n");
    console.log(text,'text')
    setData(pre=>{
      const newArray = [...pre]; // 创建一个 pre 数组的副本
  newArray.splice(newArray.length - 1, 1, text); // 替换最后一个元素为 text
  return newArray;
    })
    }
    else{
    source.close();
    }
}
};

  const send = ()=>{
    if(peopleInput.current.value){
      const temp = peopleInput.current.value
      setData(pre=>[...pre,temp])
      peopleInput.current.value=''
      if(pathName==='/voice/synthesis'){
        ttsApi(temp).then(data=>{
          const url = URL.createObjectURL(new Blob([data], { type: 'audio/mp3' }))
          setData(pre=>[...pre,url])
        })
      }else{
        chatApi(temp,'chat').then(data=>{
          const {text,status} = data
          if(status==='YES'){
            setData(pre=>[...pre,text])
            printer()
          }else{
            message.error('出错了')
          }
          
        })
      }
    }
  }
  useEffect(() => {
    setTimeout(() => {
        if (main.current) {
            main.current.scroll({
                top: 1000000000,
                behavior: 'smooth'
            });
        }
    }, 1)
}, [data.length])
  return (
    <div className='ycd-ChatRobot'>
        <div className='ycd-ChatRobot-main'>
        <div className='ycd-ChatRobot-top' ref={main}>
          <ul>
          {data.map((v,i)=>{
            return <li key={i}>{i%2===0?<RobotOutlined style={{fontSize:'30px'}}/>
            :<UserOutlined style={{fontSize:'30px'}}/> }<div className='ycd-ChatRobot-li'>{i%2===0&&i!==0&&pathName==='/voice/synthesis'?<audio src={v} controls></audio>:v}</div></li>
          })}
          </ul>
        </div>
          <div className='ycd-ChatRobot-bottom'>
          <div className='WordInput'>
        <div className="input"><input type="text" name="wordInput" id="wordInput"   placeholder='请输入' onKeyDown={handleKeyDown} ref={peopleInput} /></div> :
        <div className="send" onClick={send}>
            <RocketOutlined className='icon'   />
        </div>
          </div>
          </div>
        
        </div>
    </div>
  )
}
