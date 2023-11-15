import React,{useState} from 'react'
import { Input } from 'antd'
import './index.scss'
import Item from '../Item';
import list from './list';
const { Search } = Input;
export default function WelSearch() {
    const [hot,setHot] = useState<Array<{[key:string]:string}>>([])
    const onSearch  = (value:string) => {
        setHot(list.filter(v=>v.name.includes(value)))
    }
  return (
    <div className='WelSearch'>
        <Search size='large' className='WelSearch-input' placeholder="请输入算法应用" onSearch={onSearch} enterButton />
       {/* 热门 */}
        <div className='WelSearch-hot'>
        <div>热门搜索</div>
        <ul>
            <li>通用场景文字识别</li>
            <li>语音识别</li>
            <li>语音合成</li>
        </ul>
        </div>
        {/* 结果 */}
        <div className='WelSearch-result'>
            <div>为您找到{hot.length}个相关结果</div> 
            <div className='WelSearch-result-main'>
                {hot?.map((v)=>(<Item key={v.name} name={v.name} path={v.path}></Item>))}
            </div>
        </div>
        
    </div>
  )
}
