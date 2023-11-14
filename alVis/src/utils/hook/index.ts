import {  useAppDispatch,useAppSelector } from './declare';
import {setPath} from '../../store/reducers/path';

export const usePath =  () => {
  const path = useAppSelector(state=>state.path)
  const dispath = useAppDispatch()
  //获取状态
  const {pathName} = path
  //方法
    //改变路径
  const changePath = (path:string) => {
    dispath(setPath(path))
    sessionStorage.setItem('pathName',path)
  }

  return {
    pathName,changePath
  }
}