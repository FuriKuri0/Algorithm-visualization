import { usePath } from '../../utils/hook'
import './index.scss'
import MainRight from './Right'
export default function PageMain() {
  const {current,pathName,changePath} = usePath()
  const node = current.routes.find(v=>pathName.includes(v.path))
  const list = node?.children
  const child = list?.find(v=>pathName.includes(v.path))
  return (
    <div className='PageMain'>
      {
      list?<ul className='PageMain-Nav'>
      {current.routes.find(v=>pathName.includes(v.path))?.children?.map((v)=>{
        return <li key={v.name} onClick={()=>changePath(v.path)} className={pathName.includes(v.path)?'active':''}>{v.name}</li>
      })}
    </ul>:<></>
    }
    <MainRight  introduce={child?child.introduce:node?.introduce as string} type={node!.type}/>
    </div>
  )
}
