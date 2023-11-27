import { createSlice } from '@reduxjs/toolkit'
const initialState:{open:boolean,type:number,titleMap:{[key:number]:string}} = {
	open:false,
    type:0,
	titleMap:{0:'激活授权',1:'新增用户',2:"修改信息"}
}
const countSlice = createSlice({
	name: 'model', 
	initialState,
	reducers: { // 一个个的action操作
		setOpen(state, action){
			state.open = action.payload
		},
		setType(state, action){
			state.type = action.payload
		},
	}
})
export const {setOpen,setType} = countSlice.actions
export default countSlice.reducer