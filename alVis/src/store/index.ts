import { configureStore } from '@reduxjs/toolkit'
import pathReducer from './reducers/path'

// 生成store
const store = configureStore({
	// 将所有子模块匹配值在这里
	reducer: {
		path: pathReducer
	}
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;
