import './index.scss'
import { usePath } from '../../utils/hook'
export default function Item({name,path}:{name:string,path:string}) {
  const {changePath} = usePath()
  const handleClick = () =>{
    changePath(path)
  }
  return (
    <div className='Item' onClick={handleClick}>
        <img src="http://10.252.40.1:8888/static/img/logo.ico" alt="" />
        <div className='Item-right'>
        <h1>{name}</h1>
        <p className='oneEllipsis'>多场景、多语种、高精度的整图文字检测和识别服务，可识别各类印刷文档</p>
        </div>
       
    </div>
  )
}
