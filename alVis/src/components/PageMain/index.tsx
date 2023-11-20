import { usePath } from '../../utils/hook'
import './index.scss'
export default function PageMain() {
  const {current,pathName,changePath} = usePath()
  const list = current.routes.find(v=>pathName.includes(v.path))?.children
  return (
    <div className='PageMain'>
      {
      list?<ul>
      {current.routes.find(v=>pathName.includes(v.path))?.children?.map((v)=>{
        return <li key={v.name} onClick={()=>changePath(v.path)} className={pathName.includes(v.path)?'active':''}>{v.name}</li>
      })}
    </ul>:<></>
    }
      <div className='PageMain-Right'>123</div>
    </div>
  )
}
