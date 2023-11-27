import {setOpen as setOpenAction,setType as setTypeAction} from '../store/reducers/model';
import {useAppDispatch,useAppSelector} from './declare'
export const useModel =  () => {
  const model = useAppSelector(state=>state.model)
  const dispath = useAppDispatch()
  const {type,open,titleMap} = model
  const setType= (type:number) => {
    dispath(setTypeAction(type))
    setOpen(true)
  }
  const setOpen= (state:boolean) => {
    dispath(setOpenAction(state))
  }
  return {
    setOpen,setType,type,open,titleMap
  }
}