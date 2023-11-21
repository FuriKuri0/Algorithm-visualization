import React, { useEffect, useState } from 'react'
import {Input,Upload } from 'antd'
const { Search } = Input;
import type { UploadProps } from 'antd';
import './index.scss'
import { usePath } from '../../../../utils/hook';
export default function IMGR() {
    const [src,setSrc] = useState('')
    const {pathName} = usePath()
    useEffect(()=>{
        setSrc('')
    },[pathName])
    const onSearch = (e:string)=>{
        setSrc(e)
    }
    const props: UploadProps = {
        maxCount:1,
        accept: '.png,.jpg,.jpeg,.pdf',
        onChange: (info) => {
          const file =info.fileList[0].originFileObj!; // 获取到用户选择的文件
          if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                setSrc(e.target?.result as string)
            };
            reader.readAsDataURL(file);  // 以 Data URL 形式读取文件
          }
        },
      };
  return (
    <div>
         <div className='PageMain-RightMain'>
            <div className='PageMain-RightMainAsk'>
                <div className='PageMain-RightMainBg'>
                    {src?<img src={src} alt="" id='imgPreview' />:<></>}
                </div>
            </div>
            <div className='PageMain-RightMainAns'>
            <div className='PageMain-RightMainBg'>
                识别结果
            </div>
            </div>
           
        </div>
        <div className='PageMain-Bottom'>
            <div  className='PageMain-BottomLeft'> 
            <Upload {...props}>
    <button className='PageMain-BottomLeftUpload'>上传本地文件</button>
  </Upload> 或 
                <Search size='large' className='PageMain-input' placeholder="输入在线图片URL" onSearch={onSearch} enterButton />
                <p>支持PNG、JPG、JPEG等格式，图片大小不超过7M。如在使用中发现问题，可通过 反馈优化 提交反馈。</p>
            </div>
            <div className='PageMain-BottomLeft'></div>
        </div>
    </div>
  )
}
