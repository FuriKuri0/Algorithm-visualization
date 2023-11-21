import React,{useRef,useState,useEffect} from 'react'
import {UserOutlined,RobotOutlined,RocketOutlined,} from '@ant-design/icons';
import './index.scss'
import { usePath } from '../../../../utils/hook';
export default function ROBOTR() {
  const peopleInput = useRef<any>()
  const main = useRef<any>()
  const {pathName} = usePath()
  const [data,setData] = useState(['你好，有什么可以帮助您？'])
  useEffect(()=>{
    switch (pathName) {
      case '/model/chat':
        setData(['你好，有什么可以帮助您？'])
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
  const send =async ()=>{
    if(peopleInput.current.value){
      const temp = peopleInput.current.value
      setData(pre=>[...pre,temp])
      peopleInput.current.value=''
      // let ans:any = await chatRobotApi(temp)
      // ans = ans||'出现了点故障哦'
      // setData(pre=>[...pre,ans])
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
            return <li key={i}>{i%2===0?<RobotOutlined style={{fontSize:'30px'}}/>:<UserOutlined style={{fontSize:'30px'}}/>}<div className='ycd-ChatRobot-li'>{v}</div></li>
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
