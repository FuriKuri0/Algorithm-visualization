import defaultProps from "../../pages/Home/defaultProps"
const lists = defaultProps.route.routes
// interface item {
//     name:string,
//     active:boolean,
//     routes:Array<{name:string,path:string}>
// }

// // 添加新的应用需要修改三个地方 ： list leftMap 和 scss（用于导航栏的滑块）
// const list:Array<item> =  [
//     {name:'文本识别',active:false,
// routes:[{name:'通用场景文字识别',path:'/welcome/'},{name:'票据文本识别',path:''},{name:'卡证文字识别',path:''},]},
// {name:'语音识别',active:false,routes:[{name:'语音识别',path:''},{name:'语音合成',path:''}]},
// {name:'大模型应用',active:false,routes:[{name:'AiChat智能聊天助手',path:''}]},
// {name:'语音识别1',active:false,routes:[{name:'语音识别',path:''},{name:'语音合成',path:''}]},
// {name:'大模型应用1',active:false,routes:[{name:'AiChat智能聊天助手',path:''}]},
// {name:'语音识别2',active:false,routes:[{name:'语音识别',path:''},{name:'语音合成',path:''}]},
// {name:'大模型应用2',active:false,routes:[{name:'AiChat智能聊天助手',path:''}]},
// {name:'语音识别3',active:false,routes:[{name:'语音识别',path:''},{name:'语音合成',path:''}]},
// {name:'大模型应用3',active:false,routes:[{name:'AiChat智能聊天助手',path:''}]},
// ]

export default lists

export const leftMap = [0,83,175]