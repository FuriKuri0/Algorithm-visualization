import './index.scss'
import { usePath } from '../../utils/hook'
export default function Item({name,path,iconUrl}:{[key:string]:string}) {
  const {changePath} = usePath()
  const handleClick = () =>{
    changePath(path)
  }
  return (
    <div className='Item slide-in-blurred-bottom' onClick={handleClick}>
        <img src={iconUrl} alt="" />
        <div className='Item-right'>
        <h1>{name}</h1>
        <p className='oneEllipsis'>多场景、多语种、高精度的整图文字检测和识别服务，可识别各类印刷文档</p>
        </div>
       
    </div>
  )
}
