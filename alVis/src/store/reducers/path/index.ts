import { createSlice } from '@reduxjs/toolkit'
import { defaultType } from '../../../pages/Home/defaultProps'
const path = sessionStorage.getItem('pathName')
const current =JSON.parse(sessionStorage.getItem('current')!)

interface initialState {
	pathName:string,
	current:defaultType
}
const initialState:initialState = {
	pathName:path||'/welcome',
	current:current||{},
}
const pathSlice = createSlice({
	name: 'path', 
	initialState,
	reducers: { // 一个个的action操作
		setPath(state, action){
			state.pathName = action.payload
			sessionStorage.setItem('pathName',action.payload)

		},
		setCurrent(state, action){
			const temp = JSON.parse(JSON.stringify(action.payload))
			temp.icon = ''
			state.current = temp
			sessionStorage.setItem('current',JSON.stringify(temp))
		},
	}
})
export const {setPath,setCurrent} = pathSlice.actions
export default pathSlice.reducer