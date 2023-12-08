import {  useAppDispatch,useAppSelector } from './declare';
import { useEffect,useState } from 'react';
import {setPath,setCurrent} from '../../store/reducers/path';
import defaultProps from '../../pages/Home/defaultProps';
import {  useCallback,useMemo } from 'react';
const list = defaultProps.route.routes
export const usePath =  () => {
  const path = useAppSelector(state=>state.path)
  const dispath = useAppDispatch()
  //获取状态
  const {pathName,current} = path
  //方法
    //改变路径
  const changePath = (path:string) => {
    dispath(setPath(path))
    changeCurrent(path)
  }
  //改变导航
  const changeCurrent = useCallback((path:string)=>{
    const newCurrent = list.find(v=>v.path.split('/')[1]===path.split('/')[1])||{}
    dispath(setCurrent(newCurrent))
  },[pathName])
  //获取apiType
  const apiType = useMemo(()=>{
    if(current.routes){
      const target = current.routes.find(v=>pathName.includes(v.path))!
      return target.children?target.children.find(v=>v.path===pathName).apiType:target.apiType
    }
},[pathName,current])
  return {
    pathName,changePath,current,apiType
  }
}

export const useRefresh =  () => {
  const [refresh,setRefresh] = useState(false)
  const path = useAppSelector(state=>state.path)
  //获取状态
  const {pathName} = path
  useEffect(()=>{
    setRefresh(true)
    setTimeout(()=>{
      setRefresh(false)
    },500)
},[pathName])
return {refresh}
}
