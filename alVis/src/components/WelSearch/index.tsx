import React from 'react'
import { Input } from 'antd'
import './index.scss'
import Item from '../Item';
const { Search } = Input;
export default function WelSearch() {
    // const [hot,setHot] = useState([{}])
    const onSearch  = (value:string) => {
        console.log(value)
    }
  return (
    <div className='WelSearch'>
        <Search size='large' className='WelSearch-input' placeholder="input search text" onSearch={onSearch} enterButton />
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
            <div>为您找到3个相关结果</div> 
            <div className='WelSearch-result-main'>
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </div>
        </div>
        
    </div>
  )
}
