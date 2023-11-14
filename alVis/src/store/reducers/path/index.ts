import { createSlice } from '@reduxjs/toolkit'
const path = sessionStorage.getItem('pathName')
const initialState = {
	pathName:path||'/welcome'
}
const pathSlice = createSlice({
	name: 'path', 
	initialState,
	reducers: { // 一个个的action操作
		setPath(state, action){
			state.pathName = action.payload
		},
	}
})
export const {setPath} = pathSlice.actions
export default pathSlice.reducer