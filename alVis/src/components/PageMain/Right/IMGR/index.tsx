import  { useEffect, useMemo, useState } from 'react'
import {Input,Upload,Spin } from 'antd'
const { Search } = Input;
import type { UploadProps } from 'antd';
import './index.scss'
import { useRefresh,usePath } from '../../../../utils/hook';
import imgList from './data';
import { textReconizeApi } from '../../../../api/api';
export default function IMGR() {
    const [src,setSrc] = useState('')
    const [index,setIndex] = useState(0)
    const [imgLoad,setImgLoad] = useState(false)
    const {refresh} = useRefresh()
    const {pathName,apiType} = usePath()
    const [newResult,setNewResult] = useState([])
    const [resultLoad,setResultLoad] = useState(false)
    const state = useMemo(()=>{
        return imgList[pathName]
    },[pathName])
    useEffect(()=>{
        setImgLoad(true)
        setSrc(state.img[0])
        setIndex(0)
    },[pathName])
    const updateImg = (src:string,noExchange:boolean) => {
        const searchType = noExchange?'base64':'url'
            setResultLoad(true)
        textReconizeApi(apiType,src.split('base64,')[1],setResultLoad,searchType).then((data)=>{
            const arr = Object.entries(data).map(([key, value]) => `${key}:  ${value}`);
            setNewResult(arr)
            setResultLoad(false)
        })
        setSrc(src)
        setIndex(-1)
    }
    const onSearch = (e:string)=>{
        updateImg(e,false)
    }
    const props: UploadProps = {
        maxCount:1,
        accept: '.png,.jpg,.jpeg,.pdf',
        onChange: (info) => {
          const file =info.file!; // 获取到用户选择的文件
          if (file.status !== 'uploading') {
            const reader = new FileReader();
            reader.onload = function(e) {
                updateImg(e.target?.result as string,true)
            };
            reader.readAsDataURL(file.originFileObj);  // 以 Data URL 形式读取文件
          }
        },
      };
      const changeExample = (index:number) => {
        setIndex(index)
        setSrc(state.img[index])
      }
  return (
    <div>
      
            <div className={refresh?'PageMain-RightMain slide-in-right':'PageMain-RightMain'}>
            <div className='PageMain-RightMainAsk '>
                <div className='PageMain-RightMainBg'>
                    {src?<img src={src} onLoad={()=>setImgLoad(false)} alt="" id='imgPreview' />:<></>}
                    {imgLoad?<Spin  size="large" className='imgLoad'/>:<></>}
                </div>
                <div className='PageMain-RightMainAsk-example'>
                {state?.img.map((v:string,i:number)=>{
                    return <img onClick={()=>changeExample(i)} key={v} className={i===index?'active':''} src={v} alt="" />
                })}
                    </div>
            </div>
            <div className='PageMain-RightMainAns'>
            {resultLoad?<Spin  size="large" className='imgLoad'/>:<></>}
            <ul className="PageMain-RightMainBg-container">
                <li key='识别结果识别结果的keyyyy'>识别结果</li>
                {index===-1?newResult.map((v:string,i:number)=>{
                    return  <li key={v+i} className='changeLine'>{v}</li>
                }):state?.result[index]?.map((v:string,i:number)=>{
                    return  <li key={v+i} className='changeLine'>{v}</li>
                })}
            </ul>
            </div>
           
        </div>
        <div className={refresh?'PageMain-Bottom slide-in-blurred-bottom':'PageMain-Bottom'}>
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
