import { useRef,useEffect, useState}from 'react'
import './index.scss'
import appList,{leftMap} from './appList'
import { usePath } from '../../utils/hook'
export default function WelMain() {
  const [list,setList] = useState(appList)
  const [index,setIndex] = useState(0)
  const [isFixed,setIsFixed] = useState(false)
  const navRef = useRef<HTMLDivElement>(null);
  const {changePath} = usePath()
  //点击导航
  const handleClickNav = (i:number)=>{
    setIndex(i)
    const main = document.querySelector('.WelMain-main')
    main?.children[i].scrollIntoView({ behavior: 'smooth', block: 'center' });  
    setList(pre=>pre.map((v,index)=>{
      v.active = false
      if(i===index){
        v.active = true
      }
      return v
    }))
  }
  //滚动
  const handleScroll = (box:HTMLDivElement,fixedTop:number)=>{
    const scrollTop = box.scrollTop; 
    const isFixed = scrollTop >= fixedTop!;
    setIsFixed(isFixed);
  }
  //页面跳转
  const navigate = (path:string) => {
    changePath(path)
  }
  useEffect(() => {
    const box = document.querySelector('.Welcome') as HTMLDivElement
    const fixedTop = navRef.current?.offsetTop;
    box.addEventListener('scroll',()=>handleScroll(box,fixedTop!));
    return () => {
    box.addEventListener('scroll',()=>handleScroll(box,fixedTop!));
    }}, []);
  return (  
    <div className='WelMain'>
      <h1>算法列表</h1>
    
     {/* 导航 */}
    <div className={isFixed?'WelMain-nav fixed':'WelMain-nav'} ref={navRef} >
      <ul>
      {list.map((v,i)=>{
        return <li  key={v.name} onClick={()=>handleClickNav(i)} className={v.active?'active oneEllipsis':'oneEllipsis'}>{v.name}</li>
      })}
        <li className='WelMain-nav-thumb' style={{left:`${leftMap[index]}px`}}></li>
      </ul>
      <div className='WelMain-nav-line'></div>
    </div>
      {/* main */}
    <div className='WelMain-main'>
    {list.map((v,i)=>{
      return (<div key={v.name} className='WelMain-main-module'>
        <h1 className={i===index?'mainActive':''}>{v.name}</h1>
        <ul>
         {v.routes?.map((vv)=>{
          return  <li key={vv.name} onClick={()=>navigate(vv.children?vv.children[0].path:vv.path)} className='oneEllipsis slide-in-right'><img src={vv.iconUrl} alt="" />{vv.name}</li>
         })} 
        </ul>
      </div>)
    })}
      
    </div>
    </div>
   

  )
}
