import React from 'react'
import './index.scss'
export default function Item() {
  return (
    <div className='Item'>
        <img src="http://10.252.40.1:8888/static/img/logo.ico" alt="" />
        <div className='Item-right'>
        <h1>通用文本识别</h1>
        <p className='oneEllipsis'>多场景、多语种、高精度的整图文字检测和识别服务，可识别各类印刷文档</p>
        </div>
       
    </div>
  )
}
